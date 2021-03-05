import home1 from "../img/home1.png";
import { MainDiv, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
        <MainDiv>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span>
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>
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
