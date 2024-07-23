import React from 'react';
import logo from './logo.jpg';
import {Link} from "react-router-dom";

const BlogNav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Blog Platform</span>
      </div>
      <div className="right-side">
      <div className="links">
        <li><Link to="/post1">JavaScript</Link></li>
        <li><Link to="/post2">Data Stucture</Link></li>
        <li><Link to="/post3">Alogorithm</Link></li>
        <li><Link to="/post4">Computer Network</Link></li>
      
        <input type="text" placeholder="Search..." />
      </div>
      </div>
    </nav>
  );
}

export default BlogNav;
