import './PfContact.scss'

import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub as github} from "@fortawesome/free-brands-svg-icons";
// import {faEnvelope as email} from "@fortawesome/free-regular-svg-icons";
import {faPhone as phone, faEnvelope as email, faBlog as blog} from "@fortawesome/free-solid-svg-icons";

const pfContact = () => {

    return (
        <div className="portfolio-contact-body">
            <div className="portfolio-contact-content">

                <div className="portfolio-contact-title">
                    Contact
                </div>
                <div className="portfolio-contact-text">

                    <div className="portfolio-contact-box">
                        <div className="contact-box-item">
                            <Link to="https://github.com/rlawo32/" className="link">
                                <FontAwesomeIcon icon={github} className="item-key"/>
                            </Link>
                            <div className="item-value">
                                <div className="contact-title">
                                    GitHub
                                </div>
                                <div className="contact-content">
                                    <Link to="https://github.com/rlawo32/" className="link">
                                        <div className="link-move">
                                            이동하기
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-contact-box">
                        <div className="contact-box-item">
                            <Link to="https://rlawo32.tistory.com/" className="link">
                                <FontAwesomeIcon icon={blog} className="item-key"/>
                            </Link>
                            <div className="item-value">
                                <div className="contact-title">
                                    Tistory Blog
                                </div>
                                <div className="contact-content">
                                    <Link to="https://rlawo32.tistory.com/" className="link">
                                        <div className="link-move">
                                            이동하기
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-contact-box">
                        <div className="contact-box-item">
                            <FontAwesomeIcon icon={email} className="item-key"/>
                            <div className="item-value">
                                <div className="contact-title">
                                    Email us
                                </div>
                                <div className="contact-content">
                                    rlawo32@naver.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-contact-box">
                        <div className="contact-box-item">
                            <FontAwesomeIcon icon={phone} className="item-key"/>
                            <div className="item-value">
                                <div className="contact-title">
                                    Phone us
                                </div>
                                <div className="contact-content">
                                    010-2208-4803
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default pfContact;