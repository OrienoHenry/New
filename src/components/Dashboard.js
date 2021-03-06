import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

  
class Dashboard extends Component{
    render() {
        return(
                
<React.Fragment>

        <div className="container-fluid" style={{padding:"0px"}}>
        <nav className="navbar navbar-light bg-light" aria-label="breadcrumb">
            <span className="navbar-brand mb-0 h1">TimeOff.com</span>
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <Link to='/'> LANDING </Link></li>
                    <li class="breadcrumb-item"> <Link to='/absenceform'> ABSENCE-FORM </Link></li>
                <li class="breadcrumb-item active"  aria-current="page"><a href="#"> Calendar </a></li>
                <li class="breadcrumb-item"> <Link to='/teamview'>TEAM-VIEW  </Link></li>
                </ol>
            </nav>
        </div>

        <div className="container">
           <div  className="headingtext">
                <h3> Employee Calendar </h3>
                <p> Emeka's calendar for 2019 </p>
        </div>
        </div>

        <div className="container">
            <div  className="headingtext">
                <h3 style={{color:"orange", marginTop:"40px"}}>  Statistics </h3> 
         <div className="row headingtext">
            <div className="col-md-3">
            <table className="table" >
              <tr>
              <th scope="col"> <p className="number" style={{textAlign:"center"}}> 8.5 </p></th>
              </tr>
              <tbody>
              <tr>
     
      <td><p style={{textAlign:"center"}}> days remaining out of 21 in Allowance </p></td>
      </tr>
              </tbody>
            </table>
               
            </div>

                    <div className="col-md-3">
                    <table className="table" >
              <tr>
              <th scope="col"> <h5 style={{textAlign:"center"}}> used so far </h5> </th>
              </tr>
              <tbody>
              <tr>
     
      <td>  <p> Vacation : <span style={{float:"right"}}> 12.5 </span>  </p></td>
      </tr>
      <tr>
     
     <td>  <p> Sick Leave : <span style={{float:"right"}}> 1 out of 10 </span>  </p></td>
     </tr>
              </tbody>
            </table>
                    
               
                    </div>

                <div className="col-md-3">

                <table className="table" >
              <tr>
              <th scope="col">  <h5 style={{textAlign:"center"}}>Available Types </h5> </th>
              </tr>
              <tbody>
              <tr>
     
      <td>   <p> Vacation </p></td>
      </tr>
      <tr>
     
     <td>  <p> Maternity </p></td>
     </tr>
     <tr>
     
     <td>  <p> Annual Leave </p></td>
     </tr>
     <tr>
     
    <td> <p> Sick Leave (up to 10 days) </p> </td>
     </tr>
              </tbody>
            </table>
              
             </div>

             <div className="col-md-3">

             <table className="table" >
              <tr>
              <th scope="col">  <h5 style={{textAlign:"center"}}> Details </h5> </th>
              </tr>
              <tbody>
              <tr>
     
      <td>   <p> Supervisor:  <span style={{float:"right", color:"orange"}}>  James </span></p></td>
      </tr>
      <tr>
     
     <td> <p> Department: <span style={{float:"right", color:"orange"}}>  Sales </span></p></td>
     </tr>
     <tr>
     
     <td>  <p> Allowance in 2019: <span style={{float:"right"}}> 21 days </span></p></td>
     </tr>
     
              </tbody>
            </table>
            
             </div>
                </div>

            </div>
    </div>

                <div className="container">
                <h3 style={{color:"orange", marginTop:"40px"}}>  Calendar  </h3> 
                <h5 style={{textAlign:"center" , marginTop:"30px"}}> Upcoming Months </h5>
                    <div className="row" style={{marginTop:"30px"}}>
                        <div className="col-md-3">
                        <div className="month">      
                             <ul>
    <li> July 2019 </li>
                            </ul>
                        </div>
                                
<ul className="weekdays">
<li>M</li>
  <li>T</li>
  <li>W</li>
  <li>Th</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
                        </div>
                        <div className="col-md-3">
                        <div className="month">      
                             <ul>
    <li> August 2019 </li>
                            </ul>
                        </div>
                                
<ul className="weekdays">
<li>M</li>
  <li>T</li>
  <li>W</li>
  <li>Th</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li><span className="active">17</span></li>
  <li><span className="active">18</span></li>
  <li><span className="active">19</span></li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
                        </div>

                            <div className="col-md-3">
                            <div className="month">      
                             <ul>
    <li> September 2019 </li>
                            </ul>
                        </div>
                                
<ul className="weekdays">
<li>M</li>
  <li>T</li>
  <li>W</li>
  <li>Th</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li><span className="active">17</span></li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
                            </div>

                            <div className="col-md-3">
                            <div className="month">      
                             <ul>
    <li> October 2019 </li>
                            </ul>
                        </div>
                                
<ul className="weekdays">
<li>M</li>
  <li>T</li>
  <li>W</li>
  <li>Th</li>
  <li>F</li>
  <li>S</li>
  <li>S</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li><span className="active">9</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li><span className="active">25</span></li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
                            </div>
                    </div>
</div>
                
                <div className="container">
                <h3 style={{color:"orange", marginTop:"40px"}}> All Absences  </h3> 
                </div>
        <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Deducted</th>
      <th scope="col">Dates</th>
      <th scope="col">Approved For</th>
      <th scope="col"> Status </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Vacation </td>
      <td>7</td>
      <td> From 01-06-2019 to 12-06-2019 </td>
      <td> Maria </td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Sick Leave </td>
      <td>0</td>
      <td>From 01-08-2019 to 12-08-2019</td>
      <td> Vivian </td>
      <td>Approved</td>
    </tr>
    <tr>
    <td> Vacation </td>
      <td>7</td>
      <td> From 06-06-2019 to 12-06-2019 </td>
      <td> Maria </td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Vacation </td>
      <td>7</td>
      <td> From 01-06-2019 to 12-06-2019 </td>
      <td> Maria </td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Vacation </td>
      <td>0.5</td>
      <td> From 01-09-2019 to 12-09-2019 </td>
      <td> Emeka </td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Vacation </td>
      <td>3 </td>
      <td> From 01-10-2019 to 12-10-2019 </td>
      <td> Peter </td>
      <td> Approved</td>
    </tr>
  </tbody>
</table>     

        </div>

        <div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOff.com</span>
            </nav>
            </div>


</React.Fragment>






        )
    }
}




export default Dashboard;