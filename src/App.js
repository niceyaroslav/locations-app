import {React, useState} from "react";
import "./App.css"
import { Offcanvas, Container, ListGroup, Accordion} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import AddLocation from './components/AddLocation';
import Location from './components/Location';
import SearchLocations from './components/SearchLocations';
import Blank from './components/Blank';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Router>
        <Navigation handleShow={handleShow}/>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup variant={"flush"}>
              <Accordion defaultActiveKey="0" variant={"flush"}>
                <Accordion.Item>
                  <Accordion.Header>Locations</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant={"flush"}>
                      <ListGroup.Item>
                        <Link to={"/create"} onClick={handleClose} className="nav-link">
                          Create location
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Link to={"/locations"} onClick={handleClose} className="nav-link">
                          Search locations
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </ListGroup>
          </Offcanvas.Body>element
        </Offcanvas>
        <Container fluid className="container mt-3">
          <Routes>
            <Route path={"/"} element={<Blank/>}/>
            <Route exact path="/locations" element={<SearchLocations/>}/>
            <Route exact path="/create" element={<AddLocation/>}/>
            <Route path="/locations/:id" element={<Location/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  )}

export default App;
