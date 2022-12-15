import Welcome from "./Welcome";
import mercedesDoubleStack from "../media/mercedesDoublePitstop.mp4"



function Main() {
    return (
        <div className="main">
            <div className="overlay">
                <video src={mercedesDoubleStack} autoPlay muted />
                <Welcome />
            </div>
        </div>
    );
}

export default Main