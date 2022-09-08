import React, { useState } from 'react';
import BlogForm from './BlogForm';
import Blog from './Blog';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = blog => {
    if (!blog.text || /^\s*$/.test(blog.text)) {
      return;
    }

    const newBlogs = [blog, ...blogs];

    setBlogs(newBlogs);
    console.log(...blogs);
  };

  const updateBlog = (blogId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setBlogs(prev => prev.map(item => (item.id === blogId ? newValue : item)));
  };

  const removeBlog = id => {
    const removedArr = [...blogs].filter(blog => blog.id !== id);

    setBlogs(removedArr);
  };

  const completeBlog = id => {
    let updatedBlogs = blogs.map(blog => {
      if (blog.id === id) {
        blog.isComplete = !blog.isComplete;
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  return (
    <>
      <h1>What's the latest blog?</h1>
      <BlogForm onSubmit={addBlog} />
      <Blog
        blogs={blogs}
        completeBlog={completeBlog}
        removeBlog={removeBlog}
        updateBlog={updateBlog}
      />
    </>
  );
}

export default BlogList;