import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";
import TablePage from "../table/TablePage";
import JumbotronParts from "../../common/JumbotronParts";
import DownLoadButton from "../serach/DownLoadButton";
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
      actionName: "",
      // QAリスト
      qas: [],
    };
  }

  /**
   * タブが選択された場合のイベントハンドラー
   * @param {*} key
   */
  handleSelect(key) {
    switch (key) {
      case 1:
        this.setState({ actionName: "ai"});
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

  /**
   * Submit
   * @param {*} params
   */
  onSubmit(params) {

    const actionName = params.actionName;
    const question = params.question;

    var url = ''
    if(actionName == "ai"){
      url = 'http://127.0.0.1:5000/qa/reply/' + question
    } else {
      url = QA_SEARCH_URL + "/" + actionName
    }

    request
      .get(url)
      .set("Content-Type", "application/json")
      .query({ question })
      .end((err, res) => {
        if (err) {
          console.log("ajax通信に失敗しました。");
        }

        // QA結果を取得する
        var result = '';

        switch (actionName) {
          case "ai":
            result = res.body.answer;
            this.setState({ answer: result });
            break;
          case "favorite":
            result = res.body.data;
            this.setState({ qas: result });
            break;
          case "all":
            result = res.body.data;
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
          defaultActiveKey={1}
          onSelect={this.handleSelect}
          id="uncontrolled-tab-example"
        >
          <Tab eventKey={1} title="AIに質問する">
            <JumbotronParts title="" message="AIに質問をしてみよう" />
            <SearchForm onSubmit={question => this.onSubmit(question)} />
            <SearchResult answer={this.state.answer} />
          </Tab>
          <Tab eventKey={2} title="お気に入り">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="QA全件表示">
            <JumbotronParts title="" message="登録されているQAを表示します。" />
            <DownLoadButton qas={this.state.qas}/>
            <TablePage qas={this.state.qas} />
          </Tab>
        </Tabs>
      </div>
    );
  }

  /**
   * ComponentがDOMツリーに追加される前に一度だけ呼ばれる。
   */
  componentWillMount() {
    // QAを全件取得する。
    const params = {actionName: "all", question:""};
    this.onSubmit(params);
  }
}
