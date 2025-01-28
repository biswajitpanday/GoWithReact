import React, { Component } from "react";
import { TopNav } from "../../common/topNav";
import { AppLayout } from "../../layouts/appLayout";

export default class Home extends Component {
  render() {
    return (
      <AppLayout>
        <TopNav></TopNav>
        <div className="row">
          <div className="col-6 offset-3 mt-5">
            <div>
              <h3 className="float-left">Employee Contacts</h3>
              <button
                type="button"
                className="btn btn-sm btn-outline-dark float-right"
              >
                Add New
              </button>
            </div>

            <table className="table table-bordered mt-4">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>skype_id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>+8801XXXXXXXX</td>
                  <td>john_doe</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                  <td>++8801XXXXXXXX</td>
                  <td>moe_mary</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                  <td>++8801XXXXXXXX</td>
                  <td>july_doley</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AppLayout>
    );
  }
}
