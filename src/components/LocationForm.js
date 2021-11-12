import React from 'react';
import { Card, Col, Row, Form, Button, Container } from 'react-bootstrap';


const LocationForm = (props) => {

    const updatePage = () => {
        props.updateContent();
        props.setResp(null);
    }

    const addNew = () => {
        props.saveLocation();
        props.setSubmitted(true);
    }

    console.log(props.currentLocation)
    let mapper = {"name":"Name","address":"Address","city":"City",
                "assignedUsers":"Users","assignedVendors":"Vendors","assignedCustomers":"Customers",
                "subLocations":"Sub-Locations"}
    return (
        <>
            <Container fluid>
                <Card>
                    <Card.Header>
                        <h3>{props.edit ? "Edit location" : "Add location"}</h3>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            {Object.keys(props.currentLocation).filter(i => i !== "id").map(k => {
                                    
                                   if (k === "subLocations") {
                                        return (
                                            <Col sm={8} key={mapper[k]  + "1"}>
                                                <Form.Group className="mb-3" controlId={k} key={mapper[k] + "2"}>
                                                    <Form.Label key={mapper[k] + "3"}>{mapper[k]}</Form.Label>
                                                    <Form.Control key={mapper[k]} name={k} type="text" value={props.currentLocation[k]}
                                                    onChange={props.handleInputChange}/>
                                                </Form.Group>
                                            </Col>
                                        )
                                    } else { 
                                        return (
                                            <Col sm={4} key={mapper[k] + "1"}>
                                                <Form.Group className="mb-3" controlId={k} key={mapper[k] + "2"}>
                                                    <Form.Label key={mapper[k] + "3"}>{mapper[k]}</Form.Label>
                                                    <Form.Control key={mapper[k]} name={k} type="text" value={props.currentLocation[k]}
                                                    onChange={props.handleInputChange}/>
                                                </Form.Group>
                                            </Col>
                                        )
                                    }   
                            }
                            )}
                        </Row>
                        {props.edit ? <Row xs="auto">
                            <Col>
                                <Button variant="primary" onClick={updatePage}>Update</Button>
                            </Col>
                            <Col>
                                <Button variant="success" href="/locations">Back to list</Button>
                            </Col>
                            
                        </Row> : <Row xs="auto">
                            <Col>
                                <Button variant="primary" onClick={addNew}>Save</Button>
                            </Col>
                            <Col>
                                <Button variant="success" href="/locations">Back to list</Button>
                            </Col>
                        </Row>}
                        <br/>
                        {props.resp ? <h5 color="success">Locations has been updated</h5> : <h5 color="primary">Waiting for changes to be submited...</h5>}
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default LocationForm;