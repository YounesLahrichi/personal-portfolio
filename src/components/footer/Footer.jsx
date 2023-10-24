import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Lahrichi</h1>

                <ul className="footer__list">

                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://github.com/YounesLahrichi" className="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/younes-lahrichi-0894721a1/" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Younes Lahrichi. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer