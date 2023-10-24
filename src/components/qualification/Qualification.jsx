import React, { useState } from "react";
import "./Qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return(
        <section className="qualification section" id="experience">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BS: Computer Engineering</h3>
                                <span className="qualification__subtitle">UW - Bothell</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">AA: Arts & Sciences</h3>
                                <span className="qualification__subtitle">BC - Bellevue</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2021
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SDE - Intern</h3>
                                <span className="qualification__subtitle">T-Mobile - Bellevue</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> May 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">SWE - Intern</h3>
                                <span className="qualification__subtitle">Quranic - Seattle</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">SWE - Intern</h3>
                                <span className="qualification__subtitle">SCN - Seattle</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb 2023 - May 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>


                            <div>
                                <h3 className="qualification__title">SWE - Intern</h3>
                                <span className="qualification__subtitle">SEL - Seattle</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sept 2022 - May 2023
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification