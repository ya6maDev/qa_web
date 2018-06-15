import React, { Component } from "react";
import DetailGrid from "./DetailGrid";
import ShowMessage from "../../common/ShowMessage";

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ShowMessage
          message={this.props.message}
          bsStyle={this.props.bsStyle}
        />
        <DetailGrid 
          question={this.props.question} 
          answer={this.props.answer} />
      </div>
    );
  }
}
