// Home.js
import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>Home Page</h2>
      <p>
          Thanks for viewing. We are excited to show you what we've learned. This project was made by the individual contributions
          of various students listed below. The purpose of this website is not only to showcase our knowledge in C++, but also to
          demonstrate our continued understanding and research of computer science concepts. This will be done using code demonstrations,
          blogs, graphs to demonstrate the live speed of backend algorithms, the creation and documentation of backend tools, etc.
        </p>
    </div>
  );
};

export default Home;
