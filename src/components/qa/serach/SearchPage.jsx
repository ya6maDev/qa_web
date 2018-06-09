import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import request from "superagent";

const QA_SEARCH_URL = "/qa/search/answer";

/**
 * QA検索ページ
 */
export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit(question) {
    const params = { question: this.state.question };

    request
      .get(QA_SEARCH_URL)
      .set("Content-Type", "application/json")
      .query({ params })
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }

        // QA結果を取得する
        const qa = res.body;
        this.setState({ answer: qa.answer });
      });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={question => this.onSubmit(question)} />
        <SearchResult answer={this.state.answer} />
      </div>
    );
  }
}
