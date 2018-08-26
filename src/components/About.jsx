import React, { Component } from "react";
import JumbotronParts from "../components/common/JumbotronParts";
import { Media } from "react-bootstrap";

export default class About extends Component {
  render() {
    const instance = (
      <div>
        <Media>
          <Media.Body>
            <div className="about">
              <JumbotronParts
                title="AIに質問をしてみよう"
                message="組織内に蓄積されたノウハウを学習することで、あなたに最適な回答が出来るようになります"
              />
            </div>
          </Media.Body>
          <Media.Right>
            <img
              width={400}
              height={350}
              src="/img/about_brain.png"
              alt="thumbnail"
            />
          </Media.Right>
        </Media>
      </div>
    );

    return instance;
  }
}
