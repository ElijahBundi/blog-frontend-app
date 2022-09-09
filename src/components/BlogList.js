import React, { useState, useEffect } from 'react';
import BlogForm from './BlogForm';
import Blog from './Blog';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/blogs")
      .then((r) => r.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  function addBlog(newBlog) {
    if (!newBlog.text || /^\s*$/.test(newBlog.text)) {
      return;
    }

    const newBlogs = [newBlog, ...blogs];

    setBlogs(newBlogs);
    // console.log(...blogs);
  };

  function updateBlog(blogId, newValue) {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setBlogs(blogs => blogs.map(blog => (blog.id === blogId ? newValue : blog)));
  };

  function removeBlog(id) {
    const removedArr = [...blogs].filter(blog => blog.id !== id);

    setBlogs(removedArr);
  };

  function completeBlog(id) {
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
      <BlogForm onAddBlog={addBlog} />
      <Blog
        blogs={blogs}
        onCompleteBlog={completeBlog}
        onRemoveBlog={removeBlog}
        onUpdateBlog={updateBlog}
      />
    </>
  );
}

export default BlogList;