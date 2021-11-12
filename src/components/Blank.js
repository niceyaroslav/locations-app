import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Blank = () => {

    return (

        <Container fluid>
          <Row style={{'marginTop':"3%"}}>
            <Col sm={2}></Col>
            <Col sm={10}>
              <h3>This is a part of CRUD app for asset management</h3><br/>
              <h3>Click on the Menu button to open the menu</h3>
            </Col>
          </Row>
        </Container>
    )
}

export default Blank;