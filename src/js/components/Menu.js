import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';
import { CONFIG } from '../constants/Config.js';

let userGithubUrl = CONFIG.owner;

class Menu extends Component {
  render() {
    return (
      <div id="home">
        <div className="avatar">
          <a href="{{userGithubUrl}}"></a>
        </div>
        <h1>cobish</h1>
        <div className="link">
          <Link to="all">全部</Link>
          <Link to="archive">归档</Link>
          <Link to="tags">标签</Link>
        </div>
      </div>
    );
  }
};

export default Menu;