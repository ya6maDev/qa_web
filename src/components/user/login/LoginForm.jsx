import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

/**
 * ログインページ 入力フォーム
 */

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            user: {
              id: '',
              passwd: '',
            } ,
            message: ''
          };
    }

    handleChange(e) {
        var user = this.state.user;
    
        switch (e.target.name) {
          case 'id':
            user.id = e.target.value;
            break;
          case 'passwd':
            user.passwd = e.target.value;
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

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>;
      </div>
        );
    }
}
