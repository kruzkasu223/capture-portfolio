import styled from "styled-components";
import { MainDiv } from "../utils/styles";

export default function FaqSection() {
    return (
        <Faq>
            <h2>
                Any questions? <span>FAQs</span>
            </h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Esse, officiis?
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Esse, officiis?
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Esse, officiis?
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What products do we offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Esse, officiis?
                    </p>
                </div>
            </div>
        </Faq>
    );
}

const Faq = styled(MainDiv)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background-color: #23d997;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;

        h4 {
            font-size: 2rem;
        }
        .answer {
            padding: 2rem 0;

            p {
                padding: 1rem 0;
            }
        }
    }
`;
