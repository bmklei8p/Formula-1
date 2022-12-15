import { motion } from "framer-motion";
import { useEffect, useState } from "react";


function Welcome() {
    const [ trigger, setTrigger ] = useState(false)

    // This will cause a delay in the animation of 14 seconds to give time for the video
    // to finish
    useEffect(() => {
        const timer = setTimeout(() => {
            setTrigger(true);
        }, 14000);
    }, []);

    return (
    <>
        {/* This will cause animation to trigger after the state is updated to true from the useEffect */}
        { trigger ? (
            <motion.div animate={{x: 0}} transition={{ ease: "easeOut", duration: 2}} className="videoContent">
                <h1 style={{fontSize: "110px"}}>Formula 1 Pit Box</h1>
                <h2 style={{fontSize: "60px"}}> Your one-stop for all things Formula 1</h2>
            </motion.div>
        ) : (
            <p style={{display: "none"}}></p>
        )}
    </>
    )
}

export default Welcome