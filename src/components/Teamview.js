import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teamview.css';


class Teamview extends Component{
    render() {
        return(
<React.Fragment>

<div className="container-fluid" style={{padding:"0px"}}>
           <nav className="navbar navbar-light bg-light">
                      <span className="navbar-brand mb-0 h1">TimeOff.com
                      </span>
                      <form className="form-inline">
                      <Link className="btn btn-outline-success my-2 my-sm-0"  to='/'> LANDING </Link>
                      <Link className="btn btn-outline-success my-2 my-sm-0" to='/dashboard' type="submit"> DASHBOARD </Link>
                      </form>
                </nav>
    </div>

    <div className="container">
           <div  className="headtext">
                <h3> </h3>
               
        </div>
        </div>

        <div className="container">
          
                <h3 style={{color:"orange" , marginTop:"40px"}}> Request for Leave </h3>
         
        </div>
        
        <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col"> Employee </th>
      <th scope="col">Department </th>
      <th scope="col">Date of Request</th>
      <th scope="col"> Leave dates </th>
      <th scope="col"> Type </th>
      <th scope="col"> Days </th>
      <th scope="col"> </th>
      <th scope="col"> </th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Emeka </td>
      <td> Warehouse </td>
      <td> 01-06-2019 </td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td> Maternity Leave </td>
      <td> 14</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Harry </td>
      <td> Housing </td>
      <td>12-08-2019</td>
      <td> From 01-08-2019 to 12-08-2019</td>
      <td> Vacation </td>
      <td> 4</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Catherine </td>
      <td> Warehouse</td>
      <td> 12-06-2019 </td>
      <td> From 06-06-2019 to 12-06-2019 </td>
      <td> Vacation</td>
      <td> 4</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td>  Vivian  </td>
      <td> Sales </td>
      <td> 01-06-2019 </td>
      <td>  From 01-06-2019 to 12-06-2019</td>
      <td> Vacation </td>
      <td> 6 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Maria </td>
      <td> Warehouse</td>
      <td>12-09-2019 </td>
      <td> From 01-09-2019 to 12-09-2019 </td>
      <td> Sick Leave</td>
      <td> 3 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Peter </td>
      <td> Marketing </td>
      <td> 01-10-2019</td>
      <td> From 01-10-2019 to 12-10-2019 </td>
      <td>Vacation</td>
      <td> 7 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
  </tbody>
</table>     

        </div>


        <div className="container">
          
          <p style={{color:"orange" , marginTop:"40px"}}> All Leaves </p>
   
  </div>

   
  <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col"> Type </th>
      <th scope="col">Deducted </th>
      <th scope="col">Dates</th>
      <th scope="col">Approved By </th>
      <th scope="col"> Status </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Vacation </td>
      <td>7</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  James </td>
      <td> Approved </td>
    </tr>
    <tr>
    <td> Sick Leave </td>
      <td>5</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  James </td>
      <td> Approved </td>
    </tr>
    <tr>
    <td> Vacation </td>
      <td>10</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  James </td>
      <td> Pending </td>
    </tr>
    <tr>
    <td> Sick Leave </td>
      <td>27</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  James </td>
      <td> Approved </td>
    </tr>

  </tbody>
</table>     

        </div>


        <div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOff.com
            </span>
            </nav>
            </div>


</React.Fragment>

        )
    }
}


export default Teamview;
