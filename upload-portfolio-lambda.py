import boto3
from botocore.client import Config
import StringIO
import zipfile
from botocore.exceptions import ClientError
import logging
import mimetypes


def lambda_handler(event, context):
    #sns = boto3.resource('sns')
    #topic = sns.Topic('arn:aws:sns:us-east-1:662612480731:deployPortfolioTopic')

    LOGGER = logging.getLogger()
    LOGGER.setLevel(logging.INFO)

    location = {
        "bucketName":'portfoliobuild.emilylu',
        "objectKey":'buildportfolio.zip'
    }
    
    #try:
    job = event.get('CodePipeline.job')

    if job:
        for artifact in job["data"]["inputArtifacts"]:
             if artifact["name"] == "MyAppBuild":
                 location = artifact["location"]["s3Location"]

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    portfolio_bucket = s3.Bucket('portfolio.emilylu')
    build_bucket = s3.Bucket(location['bucketName'])

    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj(location['objectKey'], portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm,ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

    try:
        codepipeline = boto3.client('codepipeline')
        codepipeline.put_job_success_result(jobId=job['id'])
        LOGGER.info('===SUCCESS===')
        return True
    except ClientError as err:
        LOGGER.error("Failed to PutJobSuccessResult for CodePipeline!\n%s", err)
        return False
    
    #print job
        #topic.publish(Subject="test", Message="suceess")
    #if job:
    #    codepipeline = boto3.client('codepipeline')
    #    response = codepipeline.put_job_success_result(
    #        jobId = job["id"]
    #    )
    #   print "job Done"
    #   return response
    #except:
        #topic.publish(Subject="test fail", Message="fail")
