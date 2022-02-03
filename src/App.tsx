import React, { useState } from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { RootStore } from './redux/store';
import { GetBlogPost } from './redux/actions/blogPostAction';


function App() {
const dispatch = useDispatch()
  const [blogPostName, setBlogPostName] = useState("")
  const blogPostState = useSelector((state: RootStore) => state.blogPost);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setBlogPostName(event.target.value);
  const handleSubmit = () => dispatch(GetBlogPost(blogPostName))
  console.log("blogPostState state:", blogPostState);
  return (
    <div className="App">
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consequatur  esse maiores molestias non aliquid.</div>
  
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {blogPostState.blogPost && (<div>
        {blogPostState.blogPost.posts.map(post => {
          return (
            <div>
              {/*<p> {post.id}</p>
              <p>{post.userId}</p>*/}
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>

          )  
        })}
     </div>)}
    </div>
  );
}

export default App;
//return (
//  <div className="App">
//    <input type="text" onChange={handleChange} />
//    <button onClick={handleSubmit}>Search</button>
//    {pokemonState.pokemon && (
//      <div>
//        <img src={pokemonState.pokemon.sprites.front_default} alt="" />
//        {pokemonState.pokemon.abilities.map(ability => {
//          return <p>{ability.ability.name}</p>
//        })}
//      </div>
//    )}
//  </div>
//);