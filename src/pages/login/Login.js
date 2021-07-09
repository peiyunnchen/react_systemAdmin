// 登入的路由組件
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// 記得引入樣式
import './login.less';
// 引入圖檔
import logo from './images/tether.png';

function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='login'>
      <header className='login-header'>
        <img src={logo} alt='logo' />
        <h1>後台管理系統</h1>
      </header>
      <section className='login-content'>
        <h2>用戶登錄</h2>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[
              { required: true, whitespace: true, message: '用戶名必須輸入' },
              { min: 4, message: '用戶名至少4位' },
              { max: 12, message: '用戶名最多12位' },
              {
                pattern: /^[a-zA-Z0-9_]+$/, //正則表達式
                message: '用戶名必須由英、數字、下畫線組成',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='用戶名'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { required: true, whitespace: true, message: '用戶名必須輸入' },
              { min: 4, message: '用戶名至少4位' },
              { max: 12, message: '用戶名最多12位' },
              {
                pattern: /^[a-zA-Z0-9]+$/, //正則表達式
                message: '用戶名必須由英、數字組成',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='密碼'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              登錄
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
}
export default Login;
