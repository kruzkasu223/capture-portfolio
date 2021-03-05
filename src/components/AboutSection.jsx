import { MainDiv, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import home1 from "../img/home1.png";

export default function AboutSection() {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.5 } },
    };

    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 1.5, staggerChildren: 0.5 } },
    };

    return (
        <MainDiv>
            <Description>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="title"
                >
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </p>
                <Link to="/contact">
                    <button>Contact Us</button>
                </Link>
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera" />
            </Image>
        </MainDiv>
    );
}
