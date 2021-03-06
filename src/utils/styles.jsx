import styled from "styled-components";
import { motion } from "framer-motion";

export const MainDiv = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
`;

export const Image = styled.div`
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
