import React from 'react';
import data from './Data Stucture.jpg';

const Post1 = () => {
  return (
    <div className="card" style={{ margin: '40px 150px ', width: '60%' }}>
      <img src={data} alt="Post 1 Image" />
      <h2>Data Stucture</h2>
      <p>Data structures are specialized formats for organizing, processing, and storing data. They enable efficient access and modification of data and are fundamental for implementing algorithms and managing data efficiently in computer science.</p>
      <button>Read more</button>
    </div>
  );
}

export default Post1;
