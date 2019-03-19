import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';




class Landing extends Component {
    render() {
        return(
            <React.Fragment>
            <div className="container-fluid" style={{padding:"0px"}}>
           <nav className="navbar navbar-light bg-light">
                      <span className="navbar-brand mb-0 h1">TimeOff.com</span>
                      <form className="form-inline">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> LANDING </button>
                            
                            <Link className="btn btn-outline-success my-2 my-sm-0" to='/dashboard' type="submit"> DASHBOARD </Link>
                      </form>
                </nav>
              </div>
              <section className="imgwrapper">
                  <div className="container">
                    <div className="text">
                    <h2> TimeOff.com </h2>
                    <p> When you need time to detox, revitalize and renourish your entire being, TimeOff.com is just a click away</p>
                <p>At TimeOff.com, we make you feel anew! </p>
                  </div>
                  
                  <Link className="btn btn-secondary buttonstyle" to='/signup'>SIGN UP</Link>
                  <Link className="btn btn-secondary buttonstyle" to='/login'>LOGIN</Link>
        </div>
        </section> 

        
        <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOff.com</span>
            </nav>
            </div>
            </React.Fragment>   
            
        )
    }
}

export default Landing;