import React, { useState, useEffect } from "react";
import PostListItem from "./PostListItem";

function PostList() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPosts(data.hits);
  }

  return(
    <div>
      {posts.map( post => ( <PostListItem  key={post.id} 
      title={post.title} text={post.body}/> ))}
    </div>
  );


}

export default PostList;
