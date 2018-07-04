import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export default class AddForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      qa: {
        question: '',
        answer: '',
      } ,
      message: ''
    };
  }

    /**
   * 値が変更された場合のイベントハンドラー
   * @param {*} e
   */
  handleChange(e) {
    var qa = this.state.qa;

    switch (e.target.name) {
      case 'question':
        qa.question = e.target.value;
        break;
      case 'answer':
        qa.answer = e.target.value;
        break;
      default:
        break;
    }

    this.setState({ qa: qa });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.qa);
  }

  render() {
    return (
      <form onSubmit ={e => this.handleSubmit(e)}>
        <FormGroup
          controlId="formControlsTextarea"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>質問</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="question"
            value={this.state.qa.question}
            placeholder="質問を入力して下さい"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="formControlsTextarea"
          //validationState={this.getValidationState()}
        >
          <ControlLabel>回答</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="answer"
            value={this.state.qa.answer}
            placeholder="回答を入力して下さい"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
