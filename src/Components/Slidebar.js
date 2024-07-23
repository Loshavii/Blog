import React from 'react';


const Sidebar = () => {
  const recentPosts = [
    'JavaScript',
    'Data Structure',
    'Algorithm',
    'Computer Network'
  ];

  return (
    <div className="sidebar">
      <h3>Recent Posts</h3>
      <ul>
        {recentPosts.map((post, index) => (
          <li key={index}><a href={`#${post.toLowerCase().replace(/ /g, '-')}`}>{post}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
