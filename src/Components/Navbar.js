import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Amable</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#" target="_self" onClick={(event) => {event.preventDefault(); window.open("localhost:3003","_blank");}}>Chatbot</Nav.Link>
                <Nav.Link href="/info">Info</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        )
    }
}
