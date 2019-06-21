import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <a href='#section1'>Resume</a>
                <a href='#section2'>Detalhes</a>
                <a href='#section3'>Projects</a>
                <a href='#section4'>Contact</a>
            </Navigation>
        </Header>
        
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    
</div>

    );
  }
}

export default App;
