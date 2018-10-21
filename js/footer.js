import React from 'react';

class WebFooter extends React.Component {
  render(){
    return (
      <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
               Richmond, VA</p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">

            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">AROUND THE WEB</h4>

              <ul className="list-inline mb-0 ">
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="https://github.com/jints0819">
                     <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" href="Emily_Resume.pdf">
                    <i className="fa fa-file-text"></i>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2018</small>
        </div>
      </div>
      </div>);
  }

}


export default WebFooter;
