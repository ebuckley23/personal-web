import React from 'react';
import Header from './Header';
import Content from './Content';

export default function Layout({ children }) {
  return [
    <Header />,
    <Content>
      {children}
    </Content>
  ]
}
