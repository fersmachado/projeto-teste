import { Button, Checkbox, Form as Formantd, Input } from 'antd';
import React from 'react';

const Form = ({onAddUser}) => {
    const onFinish = (values) => {
        console.log('Success:', values);

        onAddUser(values.username)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Formantd
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Formantd.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Formantd.Item>

          

           
            <Formantd.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Formantd.Item>
        </Formantd>
    );
};

export default Form;