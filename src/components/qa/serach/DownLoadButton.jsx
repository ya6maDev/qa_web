import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Papa from "papaparse";
import Encoding from "encoding-japanese";
import {saveAs} from 'file-saver'

export default class DownLoadButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * クリック時のイベントハンドラー
   * @param {*} e
   */
  handleClick(e) {
    const qas = this.props.qas['qas'];
    const csv = Papa.unparse(qas);

    //Excelで文字化けせず開けるように UTF-8用BOMを生成 
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    let blob = new Blob([bom, csv], {"type": "text/csv"});
    // csvをダウンロードする。
    saveAs(blob, "data.csv");
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>CSV出力</Button>
      </div>
    );
  }
}
