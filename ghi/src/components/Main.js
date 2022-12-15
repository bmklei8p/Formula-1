import Welcome from "./Welcome";
import mercedesDoubleStack from "../media/mercedesDoublePitstop.mp4"



function Main() {
    return (
        <div className="main">
            <div className="overlay">
                <video src={mercedesDoubleStack} autoPlay muted />
            </div>
            <Welcome />
        </div>
    );
}

export default Main