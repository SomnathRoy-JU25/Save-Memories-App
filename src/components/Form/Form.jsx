import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <form
        autoComplete="off"
        noValidate
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </h1>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
        <div className="w-97% m-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="flex flex-row space-x-10">
          <div>
            <button
              className="mb-10 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-800 shadow-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div>
            <button
              className="bg-red-500 text-white p-2 rounded-lg  hover:bg-red-800 shadow-sm"
              type="button"
              onClick={clear}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;


//********************* Using Material UI ********************
// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPost, updatePost } from '../../actions/posts';

// const Form = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({
//     creator: '',
//     title: '',
//     message: '',
//     tags: '',
//     selectedFile: ''
//   });
//   const post = useSelector((state) =>
//     currentId ? state.posts.find((message) => message._id === currentId) : null
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({
//       creator: '',
//       title: '',
//       message: '',
//       tags: '',
//       selectedFile: ''
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (currentId === 0) {
//       dispatch(createPost(postData));
//       clear();
//     } else {
//       dispatch(updatePost(currentId, postData));
//       clear();
//     }
//   };

//   return (
//     <Paper className="p-8">
//       <form
//         autoComplete="off"
//         noValidate
//         className="flex flex-col items-center gap-4"
//         onSubmit={handleSubmit}
//       >
//         <Typography variant="h6">
//           {currentId ? `Editing "${post.title}"` : 'Creating a Memory'}
//         </Typography>
//         <TextField
//           name="creator"
//           variant="outlined"
//           label="Creator"
//           fullWidth
//           value={postData.creator}
//           onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
//           className="w-full"
//         />
//         <TextField
//           name="title"
//           variant="outlined"
//           label="Title"
//           fullWidth
//           value={postData.title}
//           onChange={(e) => setPostData({ ...postData, title: e.target.value })}
//           className="w-full"
//         />
//         <TextField
//           name="message"
//           variant="outlined"
//           label="Message"
//           fullWidth
//           multiline
//           rows={4}
//           value={postData.message}
//           onChange={(e) => setPostData({ ...postData, message: e.target.value })}
//           className="w-full"
//         />
//         <TextField
//           name="tags"
//           variant="outlined"
//           label="Tags (coma separated)"
//           fullWidth
//           value={postData.tags}
//           onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
//           className="w-full"
//         />
//         <div className="w-97% m-4">
//           <FileBase
//             type="file"
//             multiple={false}
//             onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
//           />
//         </div>
//         <Button
//           className="mb-10"
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           fullWidth
//         >
//           Submit
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           onClick={clear}
//           fullWidth
//         >
//           Clear
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;
