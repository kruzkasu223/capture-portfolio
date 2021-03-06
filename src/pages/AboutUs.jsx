import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation";

export default function AboutUS() {
    return (
        <motion.div
            variants={pageAnimation}
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
