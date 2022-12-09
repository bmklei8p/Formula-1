import {Container, Row} from "react-bootstrap";
import Welcome from "./Welcome";
import CallToAction from "./CallToAction";

function Main() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Welcome />
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                    <CallToAction />
                </Row>
            </Container>
        </div>
    );
}

export default Main