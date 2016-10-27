import React, { Component } from 'react'
import '../Stylesheets/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div id="bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="inner">
                <span className="small fade">
                  ♥ Do have faith in what you're doing. <br/>
                V2EX Clone Made By Mashiro <br />
                <a href="https://github.com/MashiroWang/react-v2ex-clone">Github Repo</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
