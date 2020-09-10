import React from 'react';
import { Layout } from 'antd';
import { TwitterCircleFilled } from '@ant-design/icons';

const { Header } = Layout;

const HeaderLocal = () => {
  return (
    <div>
      <Layout>
      <Header id="bHead" style={{background:'#2894b5fa'}}><TwitterCircleFilled className="bName"/>
      <strong className="bName">Twitter</strong></Header>
      </Layout>
    </div>
  );
}
export default HeaderLocal;