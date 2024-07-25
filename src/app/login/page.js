'use client'
import {useState} from 'react'
import React from 'react'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import './index.css'
import {Form, Input, Button, Checkbox} from 'antd'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('admin@54321')

  const OnSuccess = jwtToken => {
    Cookies.set('jwt_tokenn', jwtToken, {expires: 30})
  }

  const onSubmit = async event => {
    event.preventDefault()
    if (username == 'admin' && password == 'admin@54321') {
      let jwt_token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
      OnSuccess(jwt_token)
      router.push('/')
    }
  }
  const onChangeUser = e => {
    setUsername(e.target.value)
  }
  const onChangePass = e => {
    setPassword(e.target.value)
  }

  return (
    <div className='form-login'>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <img style={{alignSelf: 'center'}} src="https://i.ibb.co/M5xScqy/rits-Consulting-New.png" width="100px"/>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            placeholder='Username'
            value={username}
            onChange={onChangeUser}
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            type='password'
            placeholder='Password'
            onChange={onChangePass}
            value={password}
          />
        </Form.Item>
        
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            onClick={onSubmit}
            className='login-form-button'
            style={{width: '100%' }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
