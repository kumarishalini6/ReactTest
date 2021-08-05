import React, { useEffect, useState } from 'react';
import Axios from "axios";
import "./Home.css";

export default function Home() {
  const [users, setUsers] = useState([])
  const getusers = () => {
    Axios.get("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard").then(
      (response) => {
        console.log(response)
        setUsers(response.data.data)
      }
    )
  }
  useEffect(() => {
    getusers()
  }, [])
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <p class="logo"><i class="fa fa-life-ring icons"></i>&nbsp;
          TermMonitor</p>
        <a href="#" id="active" class="icon-a"><i class="fa fa-home icons"></i> &nbsp;&nbsp;Add Keywords</a>
        <a href="#" class="icon-a"><i class="fa fa-users icons"></i> &nbsp;&nbsp;Matches</a>
        <a href="#" class="icon-a"><i class="fa fa-list icons"></i> &nbsp;&nbsp;Manage sources</a>
        <a href="#" class="icon-a"><i class="fa fa-list icons"></i> &nbsp;&nbsp;Integration</a>
        <a href="#" class="icon-a"><i class="fa fa-tasks icons"></i> &nbsp;&nbsp;Alerts</a>
        <a href="#" class="icon-a"><i class="fa fa-star icons"></i> &nbsp;&nbsp;Settings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-caret-down icons"></i></a>
        <a href="#" class="icon-a">Billings</a>

      </div>
      <div id="main">

        <div className="head">
          <div className="col-div-6">
            <span className="nav">
              keywords</span>
          </div>

          <div className="col-div-6">
            <div className="profile">

              <div className="search_wrap search_wrap_1">
                <div className="box">
                  <input className="input" placeholder="submit ->" /> &nbsp;
                  <button className="button2">A</button>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="search_wrap search_wrap_1">
          <div className="row">
          <h6 className="text">Add another keyword <a>1/3</a> UPFREAD</h6>
          <hp className="h7tag">Advance search</hp>
          </div>
          <div className="search_box">
            <div className=" btn_common"><i class="fa fa-search icons"></i></div>
            <input type="text" className="input" placeholder="Enter your filter here" />
            <button className="button">SAVE FILTERS</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h5>The terms that you are tracking</h5>
          </div>
          <div className="col">
            <h6 className="h6tag">The data will refresh every 5 min</h6>
          </div>
          <table className="table border">
            <thead>
              <tr>
                <th>Keywords</th>
                <th></th>
                <th>Goals</th>
                <th>Matches</th>
                <th>Search status</th>
                <th>Delete keywords</th>
              </tr>
            </thead>
            <thead>
              {
                users.map((Elem) => {
                  return (
                    <tr>
                      <td>{Elem.keyword}</td>
                      <td><i class="fa fa-search icons"></i></td>
                      <td>{Elem.goal}</td>
                      <td>{Elem.matches}</td>
                      <td>{Elem.search_status}</td>
                      <td><i class="fa fa-circle icons"></i></td>
                    </tr>
                  )
                })
              }
            </thead>
          </table>
        </div>
        <button className="btn">
          VIEW RESULTS
        </button>
      </div>

    </>
  )
}
