import './PfProject.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";

const pfProject = () => {
    const path:string = process.env.PUBLIC_URL;

    const projectImageSlider1 = () => {
        const slideList:any = [];

        // for(let i=0; i<5; i++) {
        //     slideList.push(<div key={i+1} className={"image-slide" + (i+1)}>
        //     </div>);
        // }

        for(let i:number=0; i<=5; i++) {
            slideList.push(
                <SwiperSlide key={i}>
                    <img src={path + '/images/repProject' + (i) +'.png'} />
                </SwiperSlide>
            );
        }

        return slideList;
    }

    const projectImageSlider2 = () => {
        const slideList:any = [];

        for(let i:number=0; i<=2; i++) {
            slideList.push(
                <SwiperSlide key={i}>
                    <img src={path + '/images/piProject' + (i) +'.png'} />
                </SwiperSlide>
            );
        }

        return slideList;
    }

    const projectStack1 = () => {
        const skillItem:string[] = ['Java', 'React', 'JavaScript', 'AWS', 'MySQL', 'CSS3', 'HTML5', 'NodeJs'];
        const skillList:any = [];

        for(let i:number=0; i<skillItem.length; i++) {
            skillList.push(<span key={i}>{skillItem[i]}</span>);
        }

        return skillList;
    }

    const projectStack2 = () => {
        const skillItem:string[] = ['React', 'TypeScript', 'CSS3', 'HTML5'];
        const skillList:any = [];

        for(let i:number=0; i<skillItem.length; i++) {
            skillList.push(<span key={i}>{skillItem[i]}</span>);
        }

        return skillList;
    }

    return (
        <div className="portfolio-project-body">
            <div className="portfolio-project-content">

                <div className="portfolio-project-title">
                    Project
                </div>
                <div className="portfolio-project-text">

                    <div className="portfolio-project-box">
                        <div className="project-image">
                            <Swiper className="image-slide"
                                    modules={[Navigation, Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    speed={500}
                                    loop={true}
                                    loopAdditionalSlides={1}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}>
                                {projectImageSlider1()}
                            </Swiper>
                        </div>
                        <div className="project-text">
                            <div className="project-text-header">
                                <div className="project-text-header-item">
                                    <div className="project-text-title">
                                        ReP
                                    </div>
                                    <div className="project-text-date">
                                        2023.07 ~ -ing &nbsp;/&nbsp; 1명
                                    </div>
                                </div>
                                <div className="project-text-skill">
                                    {projectStack1()}
                                </div>
                            </div>
                            <div className="project-text-body">
                                <div className="project-text-content">
                                    커뮤니티 웹사이트 주제로 진행한 웹 개발 프로젝트입니다. <br />
                                    React와 Java/SpringBoot + MySQL로 구축하였으며,

                                    FE는 React를 처음 접해 독학으로 공부하며 진행했고
                                    Spring Security 사용하여 웹 보안에 신경쓰며 만들었습니다. <br />
                                    또한, AWS S3를 사용하여 원활한 이미지 업로드를 구현하였습니다.
                                    <div className="content-item-list">
                                        <div className="content-item">
                                            JWT 토큰을 도입해 전달 데이터 암호화
                                        </div>
                                        <div className="content-item">
                                            OAuth2를 이용한 간편로그인 적용
                                        </div>
                                        <div className="content-item">
                                            Stomp를 통한 실시간 채팅 구현
                                        </div>
                                    </div>
                                </div>
                                <div className="project-text-link">
                                    <Link to="http://ec2-52-78-218-238.ap-northeast-2.compute.amazonaws.com:8080/" className="link">
                                        <div className="link-button">
                                            배포 사이트 이동하기
                                            <div className="dot">

                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="https://github.com/rlawo32/react-sts-practice" className="link">
                                        <div className="link-button">
                                            GitHub 이동하기
                                            <div className="dot">

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-project-box">
                        <div className="project-image">
                            <Swiper className="image-slide"
                                    modules={[Navigation, Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false
                                    }}
                                    speed={500}
                                    loop={true}
                                    loopAdditionalSlides={1}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}>
                                {projectImageSlider2()}
                            </Swiper>
                        </div>
                        <div className="project-text">
                            <div className="project-text-header">
                                <div className="project-text-header-item">
                                    <div className="project-text-title">
                                        Pi
                                    </div>
                                    <div className="project-text-date">
                                        2023.11 ~ -ing &nbsp;/&nbsp; 1명
                                    </div>
                                </div>
                                <div className="project-text-skill">
                                    {projectStack2()}
                                </div>
                            </div>
                            <div className="project-text-body">
                                <div className="project-text-content">
                                    PE를 좀 더 공부하자는 생각으로 시작한 프로젝트입니다. <br />
                                    TypeScript와 SCSS를 중점으로 공부를 하며 진행했고
                                    컴포넌트 분리와 반응형 웹에 신경쓰며 만들었습니다. <br />
                                    이곳에선 다른 프로젝트들을 소개해주며, 다양한 CSS를 직접 적용, 실습하고 있습니다. <br />
                                    <div className="content-item-list">
                                        <div className="content-item">
                                            SVG와 SCSS 연산자를 이용해 텍스트 애니메이션 구현
                                        </div>
                                        <div className="content-item">
                                            IntersectionObserver를 이용한 fade 애니메이션 구현
                                        </div>
                                        <div className="content-item">
                                            Swiper를 사용하여 이미지 슬라이더 구현
                                        </div>
                                    </div>
                                </div>

                                <div className="project-text-link">
                                    <Link to="https://rlawo32.github.io/my-portfolio/" className="link">
                                        <div className="link-button">
                                            배포 사이트 이동하기
                                            <div className="dot">

                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="https://github.com/rlawo32/my-portfolio.git" className="link">
                                        <div className="link-button">
                                            GITHUB 이동하기
                                            <div className="dot">

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default pfProject;