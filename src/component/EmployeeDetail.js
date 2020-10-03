import React from "react";
import { Link } from "react-router-dom";

import Layout from "../Flame/Layout";

class EmployeeDetail extends React.Component {
  // コンストラクタ 
  constructor(props) {
    super(props);
    this.state = {};
  }

  // レンダリング
  render() {
    return (
      <Layout header="EmployeeDetail" title="EmployeeDetail">
        <table>
          <tr>
            <td colspan="2" height="50px">
              <p>= Public = </p>
            </td>
          </tr>
          <tr>
            <td width="150px">
              <p>id</p>
            </td>
            <td>
              <p>{this.props.location.state.id}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>name</p>
            </td>
            <td>
              <p>{this.props.location.state.name}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>department</p>
            </td>
            <td>
              <p>{this.props.location.state.department}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>joinDate</p>
            </td>
            <td>
              <p>{this.props.location.state.joinDate}</p>
            </td>
          </tr>
          <tr>
            <td colspan="2" height="50px">
              <p>= Private = </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>birthDate</p>
            </td>
            <td>
              <p>{this.props.location.state.birthDate}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>birthPlace</p>
            </td>
            <td>
              <p>{this.props.location.state.birthPlace}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>tel</p>
            </td>
            <td>
              <p>{this.props.location.state.tel}</p>
            </td>
          </tr>
        </table>
        <br />
        <Link to="/EmployeeList">
          <button>back</button>
        </Link>
        <Link to="/">
          <button>Menu</button>
        </Link>
      </Layout>
    );
  }
}
export default EmployeeDetail;
