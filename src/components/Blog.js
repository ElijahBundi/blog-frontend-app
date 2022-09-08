import React, { useState } from 'react';
import BlogForm from './BlogForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Blog = ({ blogs, completeBlog, removeBlog, updateBlog }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateBlog(edit.id, value);
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
      <div key={blog.id} onClick={() => completeBlog(blog.id)}>
        {blog.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeBlog(blog.id)}
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