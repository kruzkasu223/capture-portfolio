import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleAnim, fadeAnim, photoAnim } from "../utils/animation";

import { MainDiv, Description, Image, Hide } from "../utils/styles";
import home1 from "../img/home1.png";

export default function AboutSection() {
    return (
        <MainDiv>
            <Description>
                <motion.div>
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
                <motion.p variants={fadeAnim}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills.
                </motion.p>
                <Link to="/contact">
                    <motion.button variants={fadeAnim}>
                        Contact Us
                    </motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={home1}
                    alt="Guy with a camera"
                />
            </Image>
        </MainDiv>
    );
}
