import { Navbar, Container, Nav} from "react-bootstrap";
// import logo from "./media/f1_logo_transparent.png";

function FormulaNav() {
    return (
        <>
            <Navbar style={{padding: "20px", width: "100%"}} fixed="top" className="nav-color" variant="dark" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="/">
                        <img
                        alt="logo"
                        src={logo}
                        width="150"
                        height="80"
                        className="d-inline-block align top" /> {' '}
                    </Navbar.Brand> */}
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link>Drivers</Nav.Link>
                    <Nav.Link>Teams</Nav.Link>
                    <Nav.Link>Standings</Nav.Link>
                    <Nav.Link>Schedule</Nav.Link>
                    <Nav.Link href="/Tracks">Tracks</Nav.Link>
                    <Nav.Link>Store</Nav.Link>
                </Container>
            </Navbar>
        </>
    );
}

export default FormulaNav;