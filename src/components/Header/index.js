'use client'
import React, { useEffect, useState } from 'react';
import {Layout, Input, Button} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
import './index.css'
import Link from 'next/link'
import DynamicButton from '../DynamicButton';

const {Header} = Layout
const {Search} = Input

const AppHeader = () => {
  const router = useRouter()
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    router.push('/login')
  }
  return (
    <Header className={`header`}>
      <div className='logo'>
        <Link href='/'>
          <img src='https://i.ibb.co/93fJBw1/rit.png' width='70' height='30' />
        </Link>
      </div>
      <div className='search-header'>
        <Search placeholder='Search' allowClear style={{width: 200}} />
      </div>
      <div className='logout'>
      <DynamicButton type="primary" onClick={onClickLogout} icon={<UserOutlined />} text="Logout" danger />
        
      </div>
    </Header>
  )
}

export default AppHeader
