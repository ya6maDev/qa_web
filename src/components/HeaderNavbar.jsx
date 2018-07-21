import React, { Component } from "react";
import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";

export default class HeaderNavbar extends Component {
  render() {
    const navbarInstance = (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">QA</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/qa/search">
            <Glyphicon glyph="search" title="QAの検索" />
          </NavItem>
          <NavItem eventKey={2} href="/qa/add/input">
            <Glyphicon glyph="edit" title="QAの登録・編集" />
          </NavItem>
          <NavItem eventKey={3} href="/qa/add/upload">
            <Glyphicon glyph="upload" title="QAのアップロード" />
          </NavItem>
          <NavItem eventKey={4} href="/user/login">
            <Glyphicon glyph="log-in" title="ログイン" />
          </NavItem>
          <NavItem eventKey={5} href="/user/loginAdd">
            <Glyphicon glyph="user" title="ユーザー新規登録" />
          </NavItem>
        </Nav>
      </Navbar>
    );

    return navbarInstance;
  }
}
