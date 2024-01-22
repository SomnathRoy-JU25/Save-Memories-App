import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";

import { AiFillLike } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
 
  return (
    <div className="border rounded-lg overflow-hidden flex flex-col h-full relative shadow-md bg-white">
      <img
        className="w-full h-40 object-cover shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        src={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        alt={post.title}
      />

      <div className="absolute top-2 left-2 text-white">
        <h6 className="text-lg font-bold">{post.creator}</h6>
        <p className="text-xs">{moment(post.createdAt).fromNow()}</p>
      </div>
      <div className="absolute top-2 right-2 text-white">
        <button
          className="text-white"
          onClick={() => setCurrentId(post._id)}
        >
          {/* You can replace the following icon with your preferred icon */}
          <span>&#8942;</span>
        </button>
      </div>
      <div className="flex justify-between m-3">
        <p className="text-xs text-gray-600">
          {post.tags.map((tag, index) => (
            <span key={index} className="mr-1">
              #{tag}
            </span>
          ))}
        </p>
      </div>
      
      <h5 className="p-2 text-lg font-semibold">{post.title}</h5>
      <p className="p-2 text-gray-800">{post.message}</p>

      <div className="flex justify-between p-2 bg-gray-200">
        <button
         className="text-sm text-blue-500 flex items-center"
          onClick={() => dispatch(likePost(post._id))}
        >
          <AiFillLike className="mr-1" /> Like {post.likeCount}
        </button>
        <button
         className="text-sm text-red-500 flex items-center "
          onClick={() => dispatch(deletePost(post._id))}
        >
         <MdOutlineDelete className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
};

export default Post;


