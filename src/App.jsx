import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div className="bg-gray-100 w- min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg bg-white rounded-lg overflow-hidden shadow-md p-8">
        <div className="flex items-center justify-center">
          <img className="h-16 mr-4" src={memories} alt="icon" />
          <h2 className="text-4xl font-bold text-blue-500">Save Memories</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-8">
          <div>
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


