import React from 'react';
import Welcome from '../components/Welcome/index'

const Home = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <Welcome />
        </div>
      </div>
    </main>
  );
};

export default Home;
