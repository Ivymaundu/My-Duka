import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import './layout.css'


export default function Layout() {
    return(
    <div className="container-fluid">
        <header className="layout-header">
            <Navbar bg="dark" variant="dark" className="navbar-expand-lg">
                <Container>
                    <a className="navbar-brand"  href="#">My Duka</a>
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link active" href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/myaccount">My Account</Nav.Link>
                        

                    </Nav>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>

        </header>
    </div>
    )
}