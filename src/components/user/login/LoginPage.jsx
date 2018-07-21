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
    //this.state.user = user;
    const params =  user;
    console.log('params :');
    console.log(params);
    //const params = { user: 'a' };
    request
      .get('/user/login/action')
      .set("Content-Type", "application/json")
      .query(params)
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }
        console.log('res : ',res);
        // QA結果を取得する
        //const qa = res.body;
        //this.setState({ answer: qa.answer });
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
