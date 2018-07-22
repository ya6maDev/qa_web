import React, { Component } from "react";
import request from "superagent";
import AddForm from "./AddForm";
import QaDetail from "../detail/DetailPage";
import AddFileForm from "./AddFileForm";

const QA_ADD_URL = "/qa/add/action";

export default class AddPage extends Component {
  constructor(props) {
    super(props);

    // パラメータを受け取る
    const { params } = this.props.match;

    this.state = {
      // アクション名
      actionName: params.action,
      // QA
      qa: {
        question: "",
        answer: ""
      },
      // QAリスト
      qas: {
        qa: {
          question: "",
          answer: ""
        }
      },
      message: "",
      successFlg: false,
      bsStyle: ""
    };
  }

  /**
   * Submit
   * @param {*} param
   */
  onSubmit(param) {
    request
      .post(QA_ADD_URL + "/" + this.state.actionName)
      .set("Content-Type", "application/json")
      .send({ param: param })
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
          // question: question,
          // answer: answer,
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
            // question={this.state.question}
            // answer={this.state.answer}
            message={this.state.message}
            bsStyle={this.state.bsStyle}
          />
        </div>
      );
    } else {
      const actionName = this.state.actionName;

      if (actionName == "input") {
        return (
          <div>
            <AddForm onSubmit={qa => this.onSubmit(qa)} />
          </div>
        );
      } else if (actionName == "upload") {
        return (
          <div>
            <AddFileForm onSubmit={qas => this.onSubmit(qas)} />
          </div>
        );
      }
    }
  }
}
