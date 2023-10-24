import React from "react";


const Info = () => {
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ Years</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">15+ Projects</h3>
                <span className="about__subtitle">Completeted</span>
            </div>

            <div className="about__box">
                <i className="bx bx-book-open about__icon"></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">AA - BS</span>
            </div>
        </div>
    )
}

export default Info