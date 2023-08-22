import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, OverlayTrigger, Popover, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Search_Form.css"
import "../Search Form/Search_Form.css"
import { CONSTANTS } from "../CONSTANTS";

export default function Search_Form() {
  const [FilterBy, setFilterBy] = useState(
    {
        pickup_city : "",
        drop_city : "",
        trip_date : ""
    }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilterBy((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  function PopoverPositionedExample(popover_placement, popover_bodyText) {
    return (
      <>
          <OverlayTrigger
            trigger="click"
            key={popover_placement}
            placement={popover_placement}
            overlay={
              <Popover id={`popover-positioned-${popover_placement}`}>
                <Popover.Header as="h3" style={{"background":"yellow","color":"black"}}>{`Please Enter From Below Only`}</Popover.Header>
                <Popover.Body style={{"background":"black","color":"white"}}>
                  <p>{popover_bodyText}</p>
                </Popover.Body>
              </Popover>
            }
          >
            <b style={{"border": "5px solid black", "borderRadius":"50%", "padding":"0px 5px", "background":"black","color":"white","margin":"5px","cursor":"pointer"}}>?</b>
          </OverlayTrigger>
      </>
    );
  }

  return (
    <>
        <div className="d-flex justify-content-center align-items-center p-3" style={{"height":"100vh"}}>
        
        <form action='#' className='border border-primary bg-light rounded-5 p-5 '>
            <h1 className="text-center"><b>{CONSTANTS.app_name}</b> - Choose Cities & Date</h1>

            <div className="m-3">
                <label className="form-label">Pickup City</label>
                <input type="text" class="form-control bg-warning" placeholder="enter pickup city" onChange={handleInputChange} name="pickup_city" value={FilterBy.pickup_city} />
            </div>
            <div className="m-3">
                <label className="form-label">Drop City</label>
                <input type="text" class="form-control bg-warning" placeholder="enter drop city" onChange={handleInputChange} name="drop_city" value={FilterBy.drop_city} />
            </div>
            <div className="m-3">
                <label className="form-label">Trip Date</label>
                <input type="date" class="form-control bg-warning" placeholder="enter trip date" onChange={handleInputChange} name="trip_date" value={FilterBy.trip_date} required />
            </div>
            <div className="m-3">
                <Link to={`/trips/${FilterBy.pickup_city || 'a'}/${FilterBy.drop_city || 'a'}/${FilterBy.trip_date || '2023-08-20'}`}>
                    <button type="submit" class="btn btn-success">Find Trips</button>
                </Link>
            </div>
        </form>

            {/* <form action='#' className='border border-primary bg-light rounded-5 p-5 '>

                <div className="container">
                    <h1 className="text-center">{CONSTANTS.app_name} - Choose Trip</h1>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-warning" id="basic-addon1">Pickup City</span>
                                <input type="text" class="form-control border-5 border-warning" placeholder="enter pickup city" onChange={handleInputChange} name="pickup_city" value={FilterBy.pickup_city} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-warning" id="basic-addon1">Drop City</span>
                                <input type="text" class="form-control border-5 border-warning" placeholder="enter drop city" onChange={handleInputChange} name="drop_city" value={FilterBy.drop_city} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4">
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-warning" id="basic-addon1">*Trip Date</span>
                                <input type="date" class="form-control border-5 border-warning" placeholder="enter trip date" onChange={handleInputChange} name="trip_date" value={FilterBy.trip_date} aria-label="Username" aria-describedby="basic-addon1" required />
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <Link to={`/trips/${FilterBy.pickup_city || 'a'}/${FilterBy.drop_city || 'a'}/${FilterBy.trip_date || '2023-08-20'}`}>
                            <button type="submit" class="btn btn-success">Find Trips</button>
                        </Link>
                    </div>
                </div>

                
                
            </form>
        </div> */}

{/* 
        <Container fluid className="searchForm pt-5 pb-5 text-center">
        <Container className="mt-5">
            
            <Row className="mb-5">
            <Col>
                <h1>Find Trips</h1>
            </Col>
            </Row>
            
            <Row className="justify-content-md-center mb-0" xs="auto">
            <Col>
                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                        pickup_city
                </Form.Label>
                <InputGroup className="my-2">
                <InputGroup.Text className="FormInput p-3">Pickup City</InputGroup.Text>
                <Form.Control
                    className="FormInput"
                    name='pickup_city'
                    id="input_pickup_city"
                    placeholder="Toronto"
                    value={FilterBy.pickup_city}
                    onChange={handleInputChange}
                />
                </InputGroup>
            </Col>

                <Col>
                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                    Drop City
                </Form.Label>
                <InputGroup className="FormInput my-2">
                    <InputGroup.Text className="FormInput p-3">Drop City</InputGroup.Text>
                    <Form.Control
                        className="FormInput"
                        name='drop_city'
                        id="input_drop_city"
                        placeholder="Kitchener"
                        value={FilterBy.drop_city}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                </Col>
                
                <Col>
                <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                Trip Date
                </Form.Label>
                <InputGroup className="FormInput my-2">
                    <InputGroup.Text className="FormInput p-3">Trip Date</InputGroup.Text>
                    <Form.Control
                        className="FormInput"
                        name='trip_date'
                        id="input_trip_date"
                        placeholder="2023-08-25"
                        value={FilterBy.trip_date}
                        onChange={handleInputChange}
                    />
                </InputGroup>
                </Col>
            </Row>

            <Row className="justify-content-md-center mt-3">
                <Col>
                <center className="">
                    <Link to={`/trips/${FilterBy.pickup_city || "A"}/${FilterBy.drop_city || "A"}/${FilterBy.trip_date || "2023-08-25"}`}>
                    <Button type="submit" className="FormInput p-3">Find Trip</Button>
                    </Link>
                </center>
                </Col>
            </Row>

            </Form>
        </Container>
        </Container> */}
        </div>
    </>
  );
}