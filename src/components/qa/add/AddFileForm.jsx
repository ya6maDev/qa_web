import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import Papa from "papaparse";
import Encoding from "encoding-japanese";

export default class AddFileForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      qas: {
        qa: {
          question: "",
          answer: ""
        }
      }
    };
  }

  /**
   * 値が変更された場合のイベントハンドラー
   * @param {*} e
   */
  handleChange(e) {
    const file = e.target.files[0];
    this.handleParseCsv(file);
  }

  /**
   * 値がSubmitされた場合のイベントハンドラー
   * @param {*} e
   */
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.qas);
  }

  /**
   * アップロードしたcsvファイルを変換する。
   * @param {*} file
   */
  handleParseCsv(file) {
    const reader = new FileReader();
    reader.onload = e => {
      const codes = new Uint8Array(e.target.result);
      const encoding = Encoding.detect(codes);
      const unicodeString = Encoding.convert(codes, {
        to: "unicode",
        from: encoding,
        type: "string"
      });
      Papa.parse(unicodeString, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: results => {
          this.setState({ qas: results.data });
        }
      });
    };
    reader.readAsArrayBuffer(file);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <FormGroup
          id="formControlsFile"
          type="file"
          label="File"
          help="Example block-level help text here."
        >
          <ControlLabel>ファイルを選択して下さい。</ControlLabel>
          <FormControl type="file" accept=".csv" onChange={this.handleChange} />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
