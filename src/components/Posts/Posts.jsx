import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import Spinner from '../../Spinner';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? (
      <div className="flex items-center">
        <div>
          <Spinner />
        </div>
      </div>
    ) : (
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div key={post._id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Posts;
