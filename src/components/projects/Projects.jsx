import React, { useState } from "react";
import "./Projects.css"

const Projects = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return(
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Things i've built</span>

            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Portfolio</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(1)}>View More
                     <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Personal Portfolio</h3>

                            <p className="projects__modal-description">Built this personal portfolio project to serve as a showcase of my skills and capabilities</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Designed and launched a dynamic, user-friendly React portfolio showcasing my abilities.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Regularly updated the portfolio to reflect ongoing growth.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Ensured smooth deployment on Netlify.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Integrated personalized project listings to provide a comprehensive view of my work.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">EcoRyde</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                     <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">EcoRyde</h3>

                            <p className="projects__modal-description">Placed 4th @ UW ACM Hackathon</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Designed a sustainable rideshare platform emphasizing carpooling and reducing carbon footprint</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Created a user-friendly website for event travel planning, allowing users to host and find rides efficiently.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Utilized React for frontend and Express/Firebase for backend to ensure a responsive and secure platform.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Built an appealing frontend within a tight deadline, which focused on the user experience.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content">
                    <div>
                        <i className="uil uil-brackets-curly projects__icon"></i>
                        <h3 className="projects__title">CountrPicker</h3>
                    </div>

                    <span className="projects__button" onClick={() => toggleTab(3)}>View More
                     <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "projects__modal active-modal" : "projects__modal"}>
                        <div className="projects__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">CountrPicker</h3>

                            <p className="projects__modal-description">Passion project I built for MOBA DOTA 2</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Designed and built a mobile application for the popular MOBA game Dota 2.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Utilized current game trends to suggest the optimal hero counter pick.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">Boosted draft win rates by 35%.</p>
                                </li>

                                <li className="projects__modal-project">
                                    <i className="uil uil-check-circle projects__modal-icon"></i>
                                    <p className="projects__modal-info">50+ concurrent users.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Projects