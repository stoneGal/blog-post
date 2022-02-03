import React, { useEffect, useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { RootStore } from './store';
import { GetBlogPost } from './actions/blogPostAction';


function App() {
const dispatch = useDispatch()
  const [blogPostName, setBlogPostName] = useState("")
  const blogPostState = useSelector((state: RootStore) => state.blogPost);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setBlogPostName(event.target.value);
  const handleSubmit = () => dispatch(GetBlogPost(blogPostName))
  console.log("blogPostState state:", blogPostState.blogPost);

  useEffect(() => {
    dispatch(GetBlogPost(blogPostName))
  }, [])
  return (
    <div className="App">
      <div className="header">
       <p className="blog_app">Blog app Test</p>
      </div>
      <input className="input" type="text" onChange={handleChange} />
      <button className="button"onClick={handleSubmit}>Search</button>
      {/*{blogPostState === undefined ? <h1>Loading...</h1> :

        console.log('data: ', blogPostState)
}*/}
     
      {blogPostState.blogPost !== undefined && (<div>
        {blogPostState.blogPost.map((post,index) => {
          return (
            <div key={index}>
              <p>{post.title}</p>
              <p>{post.body}</p>

              {/*<p> {post.id}</p>*/}  
              {/*<p>{post.userId}</p>*/}
             
             
            </div>

          )  
        })}
     </div>)}
      
    </div>
  );
}

export default App;
