import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class CustomForm extends React.Component {

    handleFormSubmit = (event) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    }
    render() {
        return (
            <Form onSubmitCapture={this.handleFormSubmit}>
                <Form.Item label="Title">
                <Input name="title" placeholder="input placeholder" />
                </Form.Item>
                <Form.Item name="content" label="Content">
                <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        );
    }
};

export default CustomForm;