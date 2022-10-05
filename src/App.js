import React, {useEffect, useState} from "react";
import { Spinner, Nav , Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import getData from "./reducers/actions";
import './App.css';



function App() {

    const [dragon, setDragon] = useState(0);

    const data = useSelector((state) => state.dragonsInfo.spacexData)

    const dispatch = useDispatch();

    useEffect(()=>{
        getData(dispatch)
    }, [])


    if(!data.length){
        return (
            <>
                    <Spinner animation="border" role="status" className="spinner"/>
            </>)
    }


  return(
      <>
          <div className="wrapper">
      <h1 className="text-center">SpaceX Dragons</h1>
              <h4 className="text-center text">Choose the SpaceX dragon</h4>
              <div className="text-center text">
                  <div className="btn" onClick={() => setDragon(0)}>Dragon 1</div>
                  <div className="btn" onClick={() => setDragon(1)}>Dragon 2</div>
            </div>
              <div className="carousel">
                  <Carousel slide={false} >
                  {data[dragon].flickr_images.map((data) =>
                      <Carousel.Item fade>
                          <img className="images" src={data} alt=""/>
                      </Carousel.Item>
                  )}
              </Carousel>
              </div>
              <div className="text-center description">{data[dragon].description}</div>
              <div className="text-center text">
                   type : {data[dragon].type}
              </div>
              <div className="text-center text">
                  first flight : {data[dragon].first_flight}
              </div>
              <div className="text-center text">
                    diameter : {data[dragon].diameter.meters} m
              </div>
              <div className="text-center text">
                  height with trunk : {data[dragon].height_w_trunk.meters} m
              </div>
              <div className="text-center text">
                  dry mass : {data[dragon].dry_mass_kg} kg
              </div>

              <div className="Link">
              <Nav variant="pills" activeKey="1">
              <Nav.Item>
                <Nav.Link eventKey="link-2" href={data[dragon].wikipedia}>
                    wiki link
                </Nav.Link>
              </Nav.Item>
              </Nav>
          </div>
          </div>
      </>
  )
}

export default App;
