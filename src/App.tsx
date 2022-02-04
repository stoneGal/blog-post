import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from './store';
import { GetBlogPost } from './actions/blogPostAction';
import { Row, Col, Card } from 'react-bootstrap';
import './App.css';



const App = () => {
  const dispatch = useDispatch();
  const [blogPostName, setBlogPostName] = useState(" ");
  const [filter, setFilteredData] = useState(" ");

  const blogPostState = useSelector((state: RootStore) => state.blogPost);
  const searchText = (event: React.ChangeEvent<HTMLInputElement>) => setFilteredData(event.target.value);
  //console.warn(filter)
  const blogPostNameData = blogPostState.blogPost?.filter((post: any) => {
    return Object.keys(post).some(key => post[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  })

  const handleSubmit = () => dispatch(GetBlogPost(blogPostName))
  //console.log("blogPostState state:", blogPostState.blogPost);

  useEffect(() => {
    dispatch(GetBlogPost(blogPostName))
  }, [])
  return (
    <div className="App">
      <div className="header">
        <p className="blog_app">Blog app Test</p>
      </div>

      <div className="body-wrap">
        <div className="input_type">
          <input className="input" type="text" value={filter} placeholder="filter" onChange={searchText.bind(this)} />
          {/*<button className="button" >Search</button>*/}
        </div>
        {blogPostNameData && blogPostNameData?.length === 0 && (
          <div className="notFound"> WHOOPPPSSY!!! No Blog Post Found</div>
        )}

        {blogPostNameData !== undefined && (<div>
          {blogPostNameData.map((post, index) => {

            return (
              <div className="body_item" key={index}>
                <Row xs={1} md={4} className="g-10">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                      <Card className="card">
                        <Card.Img variant="top" src="https://picsum.photos/" />
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

              </div>
            )
          })
          }
        </div>)}
      </div>

    </div>
  );
}

export default App;
