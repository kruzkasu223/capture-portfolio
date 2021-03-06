import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

import { motion } from "framer-motion";
import { pageAnim } from "../utils/animation";

export default function AboutUs() {
    return (
        <motion.div
            variants={pageAnim}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}
