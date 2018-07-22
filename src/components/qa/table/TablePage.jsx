import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class TablePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const qas = this.props.qas;

    if (qas != null && qas.length != 0) {
      return (
        <div>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>質問</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
              {qas["qas"].map(qa => (
                <tr key={qa.id}>
                  <td>{qa.question}</td>
                  <td>{qa.answer}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return <div>検索結果が見つかりません。</div>;
    }
  }
}
