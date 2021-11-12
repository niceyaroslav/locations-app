import {React} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

const Navigation = (props) => {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand  href="/">Asset Manager App</Navbar.Brand>
                <Nav className="me-auto" style={{marginLeft:"20px"}}>
                    <Nav.Link onClick={props.handleShow}>Menu</Nav.Link>
                    <Nav.Link>Placeholder1</Nav.Link>
                    <Nav.Link>Placeholder2</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigation;