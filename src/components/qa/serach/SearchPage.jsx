import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import Table from "../table/Table";
import request from "superagent";
import { Tabs, Tab } from "react-bootstrap";

const QA_SEARCH_URL = "/qa/search/answer";

/**
 * QA検索ページ
 */
export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      // アクション名
      actionName: "all",
      // QAリスト
      qas: []
    };
  }

  /**
   * タブが選択された場合のイベントハンドラー
   * @param {*} key
   */
  handleSelect(key) {
    switch (key) {
      case 1:
        this.setState({ actionName: "ai" });
        break;
      case 2:
        this.setState({ actionName: "favorite" });
        break;
      case 3:
        this.setState({ actionName: "all" });
        break;
      default:
        break;
    }
  }

  onSubmit(params) {
    request
      .get(QA_SEARCH_URL + "/" + this.state.actionName)
      .set("Content-Type", "application/json")
      .query({ params })
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }

        // QA結果を取得する
        const result = res.body;

        switch (this.state.actionName) {
          case "ai":
            this.setState({ answer: result.answer });
            break;
          case "favorite":
            this.setState({ qas: result });
            break;
          case "all":
            this.setState({ qas: result });
            break;
          default:
            break;
        }
      });
  }

  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey={3}
          onSelect={this.handleSelect}
          id="uncontrolled-tab-example"
        >
          <Tab eventKey={1} title="AIに質問する">
            <SearchForm onSubmit={question => this.onSubmit(question)} />
            <SearchResult answer={this.state.answer} />
          </Tab>
          <Tab eventKey={2} title="お気に入り">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="QA全件表示">
            <Table qas={this.state.qas} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
