import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event,context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:662612480731:deployPortfolioTopic')

    location ={
        "bucketName":'portfoliobuild.emilylu',
        "objectKey":'portfoliobuild.zip'
    }
    try:
        job=event.get('CodePipeline.job')

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"]=="MyAppBuild":
                    location=artifact["location"]["s3Location"]

        print "Build Portfolio from"+str(location)
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        build_bucket = s3.Bucket(location['bucketName'])
        portfolio_bucket = s3.Bucket('portfolio.emilylu')

        portfolio_zip=StringIO.StringIO()
        build_bucket.download_fileobj(location['objectKey'],portfolio_zip)

        with zipfile.ZipFile('portfolio_zip') as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "job Done"
        topic.publish(Subject="test", Message="suceess")
        if job:
            codepipeline= boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject="test fail", Message="fail")
