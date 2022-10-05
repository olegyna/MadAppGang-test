import React, {useEffect} from "react";
import { Spinner, Nav , Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import getData from "./reducers/actions";
import './App.css';



function App() {

    const data = useSelector((state) => state.dragonsInfo.spacexData)

    const dispatch = useDispatch();

    useEffect(()=>{
        getData(dispatch)
    }, [])

    console.log('data', data);

    if(!data.length){
        return (
            <>
            <Spinner animation="border" role="status" className="spinner"/>
            </>)
    }


  return(
      <>
      <h1>SpaceX Dragons</h1>
          <div className="wrapper">
          <div className="content-wrapper">
              <div className="carosel">
                  <Carousel fade="true">
                  {data[0].flickr_images.map((data) =>
                      <Carousel.Item interval={1000}>
                          <img className="image_styles" src={data}/>
                      </Carousel.Item>
                  )}
              </Carousel>
              </div>
              <div className="Link">
              <Nav variant="pills" activeKey="1">
              <Nav.Item>
                <Nav.Link eventKey="link-2" href={data[0].wikipedia}>wiki</Nav.Link>
              </Nav.Item>
              </Nav>
              </div>
          </div>
          </div>
      </>
  )
}

export default App;
