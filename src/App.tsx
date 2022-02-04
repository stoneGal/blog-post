import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux"
import { RootStore } from './store';
import { GetBlogPost } from './actions/blogPostAction';
import { Row, Col, Card} from 'react-bootstrap';



function App() {
const dispatch = useDispatch()
  const [blogPostName, setBlogPostName] = useState(" ")
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");

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
      {/*<UserFind/>*/}
      <div className="body-wrap">
        {/*<div className="input_type">
          <input className="input" type="text" onChange={handleChange} placeholder="Filter" />
          <button className="button" onClick={handleSubmit}>Search</button>
        </div>*/}

     

     
      {/*{blogPostState === undefined ? <h1>Loading...</h1> :

        console.log('data: ', blogPostState)
}*/}
     
      {blogPostState.blogPost !== undefined && (<div>
          {blogPostState.blogPost.map((post, index) => {
            //if (search === "" || post.body.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div className="body_item" key={index}>
           
                  <Row xs={1} md={4} className="g-10">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <Col>
                        <Card className="card">
                          <Card.Img variant="top" src="https://www.istockphoto.com/photo/aerial-view-of-residential-distratic-at-major-mackenzie-dr-and-islinton-ave-detached-gm1320991884-407359315" />
                          <Card.Body>
                            <Card.Title className="">Title: {post.title}</Card.Title>
                            <Card.Text>
                              Body:  {post.body}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  {/*<p>{post.userId}</p>*/}
                  {/*<p> {post.id}</p>*/}
             
                </div>

              )
            //} 
        })
        }
        </div>)}
        </div>
      
    </div>
  );
}

export default App;
