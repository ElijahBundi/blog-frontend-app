import React, { useState } from 'react';
import BlogForm from './BlogForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Blog({ blogs, onCompleteBlog, onRemoveBlog, onUpdateBlog }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  function submitUpdate(value) {
    onUpdateBlog(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <BlogForm edit={edit} onSubmit={submitUpdate} />;
  }

  return blogs.map((blog, index) => (
    <div
      className={Blog.isComplete ? 'blog-row complete' : 'blog-row'}
      key={index}
    >
      <div key={blog.id} onClick={() => onCompleteBlog(blog.id)}>
        {blog.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => onRemoveBlog(blog.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: blog.id, value: blog.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Blog;