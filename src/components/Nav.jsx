import styled from "styled-components";

export default function Nav() {
    return (
        <StyledNav>
            <h1>
                <a id="logo" href="#">
                    Capture
                </a>
            </h1>
            <ol>
                <a href="#">
                    <li>About Us</li>
                </a>
                <a href="#">
                    <li>Our Work</li>
                </a>
                <a href="#">
                    <li>Contact Us</li>
                </a>
            </ol>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
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

        li {
            padding-left: 10rem;
        }
    }
`;
