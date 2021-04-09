import React from "react";
import {withRouter} from "react-router-dom";
import {Button, Col, Form, Input, Row} from "antd";

class Login extends React.Component<any> {
    // const onLogin = (values: any) => {
    //     console.log('Success:', values);
    //     //this.props.history
    //     //this.props.history.push({pathname:'detail'})}
    //     //return <Redirect to="/home" />;
    // }


    render() {
        const onLogin = (values: any)=> {
            console.log('Success:', values);
            console.log('Success:', this.props.history);
            this.props.history.push({pathname: 'home'})

            //return <Route path="home2"/>

        }
        return (
            <Row>
                <Col offset={8} span={8}>
                    <Form onFinish={onLogin}>
                        <Form.Item
                            label={"账号"}
                            name={"username"}
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={"密码"}
                            name={"password"}
                            rules={[{ required: true, message: 'Please input your password  !' }]}>
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">登录</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default withRouter(Login)
