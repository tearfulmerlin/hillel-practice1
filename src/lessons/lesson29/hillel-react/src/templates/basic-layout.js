import React from 'react';
import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';
import { Outlet } from 'react-router-dom';

export default function BasicLayout(props) {
  return (
    <div className="App">
      <Header/>
      <Content>
        <Outlet/>
      </Content>
      <Footer/>
    </div>
  );
}
