import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";

/**
 * QA検索ページ 入力フォーム
 */

export default class SearchForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      question: "",
      answer: ""
    };
  }

  getValidationState() {
    const length = this.state.question.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  /**
   * 質問フォーム内で値が変更された場合のイベントハンドラー
   * @param {*} e
   */
  handleChange(e) {
    this.setState({ question: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit("ai", this.state.question);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.question}
              placeholder="質問を入力して下さい"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }
}
