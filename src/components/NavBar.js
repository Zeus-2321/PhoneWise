import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo1.png';
import './Nav.css';

function NavBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://phone-specs-api.azharimm.dev/search?query=${searchQuery}`);
            setSearchResults(response.data);
            navigate('/results', { state: searchResults });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top" className="navbar-container">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="nav-link">
                        <img src={logo} alt="PhoneWise" />
                        <span>PhoneWise</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex flex-grow-1" onSubmit={handleSearch}>
                        <Form.Control type="search" placeholder="Search" className="me-2 search-input" aria-label="Search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        <Link to="/brands" className="nav-link">
                            Brands
                        </Link>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;



