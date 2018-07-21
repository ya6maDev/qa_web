import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

/**
 * ユーザー新規登録ページ 入力フォーム
 */

export default class LoginAddForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            user: {
              user_id: '',
              password: '',
              user_name: '',
            } ,
            message: ''
          };
    }

    handleChange(e) {
        var user = this.state.user;
    
        switch (e.target.name) {
          case 'id':
            user.user_id = e.target.value;
            break;
          case 'passwd':
            user.password = e.target.value;
            break;
          case 'name':
            user.user_name = e.target.value;
            break;
          default:
            break;
        }
    
        this.setState({ user: user });
      }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form submit');
        this.props.onSubmit(this.state.user);
      }

    render() {
        return (
            <div>
                <Form horizontal  onSubmit={e => this.handleSubmit(e)}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="email" 
                                name="id" 
                                placeholder="Email" 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="password" 
                                name="passwd" 
                                placeholder="Password" 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalName">
                        <Col sm={2}>
                            Name
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="string" 
                                name="name" 
                                placeholder="Name" 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>;
            </div>
        );
    }
}
