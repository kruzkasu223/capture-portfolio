import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <StyledNav>
            <h1>
                <Link to="/" id="logo">
                    Capture
                </Link>
            </h1>
            <ol>
                <Link to="/">
                    <li>About Us</li>
                </Link>
                <Link to="/work">
                    <li>Our Work</li>
                </Link>
                <Link to="/contact">
                    <li>Contact Us</li>
                </Link>
            </ol>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: #282828;

    #logo {
        font-family: "Lobster", cursive;
        font-weight: lighter;
        font-size: 1.5rem;
    }

    a {
        color: white;
        text-decoration: none;
    }

    ol {
        display: flex;
        list-style-position: inside;

        a {
            margin-left: 10rem;
        }
    }
`;
