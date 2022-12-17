import { motion } from "framer-motion";
import { useEffect, useState } from "react";


function Welcome() {
    const [ trigger, setTrigger ] = useState(false)

    // This will cause a delay in the animation of 14 seconds to give time for the video
    // to finish  use 13000
    useEffect(() => {
        const timer = setTimeout(() => {
            setTrigger(true);
        }, 13400);
    }, []);

    return (
    <>
        {/* This will cause animation to trigger after the state is updated to true from the useEffect */}
        { trigger ? (
            <div className="videoContent">
                <motion.h1 initial={{x: '-100vh' }} animate={{x: 950, y: -200}} transition={{ ease: "easeOut", duration: 2}} style={{fontSize: "135px"}}>Formula 1 Pit Box</motion.h1>
                <motion.h2 initial={{x: '-100vh' }} animate={{x: 980, y: -200}} transition={{ ease: "easeOut", duration: 2}} style={{fontSize: "75px"}}> Your one-stop for Formula 1</motion.h2>
            </div>
        ) : (
            <></>
        )}
    </>
    )
}

export default Welcome