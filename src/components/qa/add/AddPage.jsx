import React, { Component } from "react";
import request from "superagent";
import AddForm from "./AddForm";
import AddResult from "./AddResult"

const QA_ADD_URL = "/qa/add/action";

export default class AddPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  onSubmit(qa) {
    request
      .post(QA_ADD_URL)
      .set("Content-Type", "application/json")
      .send({ question: qa.question, answer: qa.answer })
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }
        this.setState({ message: res.body.data.message });
      });
  }

  render() {
    return (
      <div>
        <AddForm onSubmit={qa => this.onSubmit(qa)} />
        <AddResult message = {this.state.message} />
      </div>
    );
  }
}
