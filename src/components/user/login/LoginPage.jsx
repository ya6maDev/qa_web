import React, { Component } from "react";
import LoginForm from "./LoginForm";
import request from "superagent";
/**
 * ログインページ
 */
export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit(user) {
    const params =  user;
    console.log('params :');
    console.log(params);
    request
      .get('/user/login/action')
      .set("Content-Type", "application/json")
      .query(params)
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }
        console.log('res : ',res);
        // ログイン結果を取得する
        const login = res.body;
        this.setState({ user: login.id });
      });
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={user => this.onSubmit(user)} />
      </div>
    );
  }
}
