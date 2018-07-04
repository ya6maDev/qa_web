import React, { Component } from "react";
import request from "superagent";
import AddForm from "./AddForm";
import QaDetail from "../detail/DetailPage";

const QA_ADD_URL = "/qa/add/action";

export default class AddPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
      message: "",
      successFlg: false,
      bsStyle: ""
    };
  }

  onSubmit(qa) {
    var question = qa.question;
    var answer = qa.answer;
    request
      .post(QA_ADD_URL)
      .set("Content-Type", "application/json")
      .send({ question: question, answer: answer })
      .end((err, res) => {
        var message = "";
        var successFlg = false;
        var bsStyle = "warning";
        if (err) {
          message = "ajax通信に失敗しました。";
          successFlg = false;
          bsStyle = "";
        } else {
          message = "QAの登録に成功しました。";
          successFlg = res.body.successFlg;
          bsStyle = "success";
        }
        this.setState({
          question: question,
          answer: answer,
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
          <QaDetail
            question={this.state.question}
            answer={this.state.answer}
            message={this.state.message}
            bsStyle={this.state.bsStyle}
          />
        </div>
      );
    } else {
      return (
        <div>
          <AddForm onSubmit={qa => this.onSubmit(qa)} />
        </div>
      );
    }
  }
}
