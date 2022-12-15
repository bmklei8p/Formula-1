import {Container, Row} from "react-bootstrap";
import Welcome from "./Welcome";
// import CallToAction from "./CallToAction";
import mercedesDoubleStack from "../media/mercedesDoubleStack.mp4"



function Main() {
    return (
        <div className="main">
            <video src={mercedesDoubleStack} autoPlay muted />
        </div>
    );
}

export default Main