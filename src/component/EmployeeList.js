import React from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

import Layout from "../Flame/Layout";

class EmployeeList extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // 初回処理
  componentDidMount() {
    // json読み取り
    this.setState(require("../json/test.json"));
  }

  // レンダリング
  render() {
    return (
      <Layout header="EmployeeList" title="EmployeeList">
        <br />
        <MaterialTable
          title=""
          columns={[
            { title: "id", field: "id" },
            { title: "name", field: "name" },
            { title: "department", field: "department" },
            { title: "joinDate", field: "joinDate", type: "date" },
            {
              title: "birthDate",
              field: "birthDate",
              type: "date",
              hidden: true
            },
            { title: "birthPlace", field: "birthPlace", hidden: true },
            { title: "tel", field: "tel", hidden: true }
          ]}
          // jsonデータ
          data={this.state.list}
          // actionsのヘッダータイトル空欄
          localization={{
            header: { actions: "" }
          }}
          // 詳細ボタンでEmployeeAddへ遷移
          actions={[
            {
              icon: () => (
                <Button variant="contained" color="primary">
                  DETAIL
                </Button>
              ),
              tooltip: "",
              onClick: (event, rowData) =>
                // 値を格納
                this.props.history.push({
                  pathname: "/EmployeeDetail",
                  state: {
                    id: rowData.id,
                    name: rowData.name,
                    department: rowData.department,
                    joinDate: rowData.joinDate,
                    birthDate: rowData.birthDate,
                    birthPlace: rowData.birthPlace,
                    tel: rowData.tel
                  }
                })
            }
          ]}
          // オプション
          options={{
            filtering: true,
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            }
          }}
        />
        <br />
        <Link to="/">
          <button>Menu</button>
        </Link>
      </Layout>
    );
  }
}
export default EmployeeList;
