import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Layout({ children, location, ...rest }) {
  const { pathname } = location;
  const showSideBar = pathname === '/' 
    || pathname.includes('/posts')
    || pathname.includes('/portfolio');
  const showBackButton = pathname !== '/';
  return [
    <Header showBackButton={showBackButton} />,
    <Content showSideBar={showSideBar}>
      {children}
    </Content>
  ]
}
