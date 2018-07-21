import React, { Component } from "react";
import LoginForm from "./LoginAddForm";
import request from "superagent";
import ShowMessage from "../../common/ShowMessage";
/**
 * ユーザー新規登録ページ
 */
export default class LoginAddPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      successFlg: false,
      bsStyle: "",
    };
  }

  onSubmit(user) {
    const params =  user;
    console.log('params :');
    console.log(params);
    request
      .get('/user/loginAdd/action')
      .set("Content-Type", "application/json")
      .query(params)
      .end((err, res) => {
        var message = "";
        var successFlg = false;
        var bsStyle = "warning";
        if (err) {
          console.log("ajax通信に失敗しました。");
        } else {
          message = "QAの登録に成功しました。";
          successFlg = res.body.successFlg;
          bsStyle = "success";
        }
        this.setState({
          message: message,
          successFlg: successFlg,
          bsStyle: bsStyle 
        });
      });
  }

  render() {
    if (this.state.successFlg) {
      return (
        <div>
          <ShowMessage
            message={this.state.message}
            bsStyle={this.state.bsStyle}
          />
        </div>
      );
    } else {
      return (
        <div>
          <LoginForm onSubmit={user => this.onSubmit(user)} />
        </div>
      );
    }
  }
}
