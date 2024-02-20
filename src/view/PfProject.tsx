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

    const projectImageSlider3 = () => {
        const slideList:any = [];

        for(let i:number=1; i<=5; i++) {
            slideList.push(
                <SwiperSlide key={i}>
                    <img src={path + '/images/duduProject' + (i) +'.png'} />
                </SwiperSlide>
            );
        }
        return slideList;
    }

    const projectStack1 = () => {
        const skillItem:string[] = ['Java', 'React', 'JavaScript', 'AWS', 'MySQL', 'CSS3', 'HTML5', 'JPA'];
        const skillList:any = [];

        for(let i:number=0; i<skillItem.length; i++) {
            skillList.push(<div key={i}>{skillItem[i]}</div>);
        }

        return skillList;
    }

    const projectStack2 = () => {
        const skillItem:string[] = ['React', 'TypeScript', 'CSS3', 'HTML5'];
        const skillList:any = [];

        for(let i:number=0; i<skillItem.length; i++) {
            skillList.push(<div key={i}>{skillItem[i]}</div>);
        }

        return skillList;
    }

    const projectStack3 = () => {
        const skillItem:string[] = ['Java', 'React', 'TypeScript', 'MySQL', 'CSS3', 'HTML5', 'JPA'];
        const skillList:any = [];

        for(let i:number=0; i<skillItem.length; i++) {
            skillList.push(<div key={i}>{skillItem[i]}</div>);
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
                                    speed={1000}
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
                                        2023.07 ~ 2023.11 &nbsp;/&nbsp; 1명
                                    </div>
                                </div>
                                <div className="project-text-skill">
                                    {projectStack1()}
                                </div>
                            </div>
                            <div className="project-text-body">
                                <div className="project-text-content">
                                    커뮤니티 웹사이트 주제로 진행한 웹 개발 프로젝트입니다. <br />
                                    사실상 낙서장 느낌의 웹페이지로 이전 회사 퇴사 후 3개월간 공백기 뒤에 진행한 프로젝트였던지라
                                    개발에 대한 재적응과 새로 접해보는 React를 공부하는 겸해서 생각나는대로 기능을 구현해놓은 웹사이트입니다. <br />
                                    React와 Java/SpringBoot + MySQL로 구축하였으며,

                                    React는 독학으로 공부하며 진행했고 Spring Security와 Spring JPA, AWS S3, JWT 등 저로써는 처음 접해보는 여러 기능들을 사용하여 구현해보았습니다.
                                </div>

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
                                    speed={1000}
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
                                        My Blog
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
                                    FE와 퍼블리싱에 대해 좀 더 공부하자는 생각으로 시작한 프로젝트입니다. <br />
                                    사실상 개인 포트폴리오 겸 블로그 개념으로 계획을 하여 시작을 하게 되었고
                                    TypeScript와 SCSS를 중점으로 공부를 하며 진행했으며,
                                    컴포넌트 분리와 반응형 웹에 신경쓰며 만들었습니다. <br />
                                    이곳에선 다른 프로젝트들을 소개해주며, 다양한 CSS를 직접 적용, 실습하고 있습니다. <br />
                                </div>

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

                    <div className="portfolio-project-box">
                        <div className="project-image">
                            <Swiper className="image-slide"
                                    modules={[Navigation, Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    speed={1000}
                                    loop={true}
                                    loopAdditionalSlides={1}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}>
                                {projectImageSlider3()}
                            </Swiper>
                        </div>
                        <div className="project-text">
                            <div className="project-text-header">
                                <div className="project-text-header-item">
                                    <div className="project-text-title">
                                        DuDu-Project
                                    </div>
                                    <div className="project-text-date">
                                        2023.12 ~ -ing &nbsp;/&nbsp; 1명
                                    </div>
                                </div>
                                <div className="project-text-skill">
                                    {projectStack3()}
                                </div>
                            </div>
                            <div className="project-text-body">
                                <div className="project-text-content">
                                    혼자서 진행했던 첫번째 프로젝트의 정체성과 주제가 뚜렷하지 않아 새로 진행한
                                    개인프로젝트입니다. 문화센터 웹사이트를 주제로 정하여 진행했습니다. <br />
                                    기존 Js에서 Ts로 변경하여 진행하였으며, 다양하고 새로운 기술들과 Api들을
                                    도입하여 웹사이트를 구현하였습니다. <br />
                                    FE는 Netlify를 통해 BE와 DB는 CloudType를 통해 따로 배포하였습니다.<br />
                                    처음 계획했던대로 프로젝트는 완성이 된 상태이며, 현재는 오류가 있는지 체크하면서 웹사이트 성능을 올려보려 공부하면서 테스트 중입니다.
                                </div>

                                <div className="content-item-list">
                                    <div className="content-item">
                                        Java Scheduler를 응용하여 강좌 상태 자동변경
                                    </div>
                                    <div className="content-item">
                                        QueryDSL를 사용하여 동적 쿼리 구현
                                    </div>
                                    <div className="content-item">
                                        Styled-Component를 통해 다크모드 구현
                                    </div>
                                    <div className="content-item">
                                        Zustand를 사용하여 전역 상태 관리
                                    </div>
                                </div>

                                <div className="project-text-link">
                                    <Link to="https://dudu-project.netlify.app/" className="link">
                                        <div className="link-button">
                                            배포 사이트 이동하기
                                            <div className="dot">

                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="https://github.com/rlawo32/dudu-project-BE.git" className="link">
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