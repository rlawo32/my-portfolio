import './Main.scss';
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

import Planet from "./Planet";
import Rocket from "./Rocket";
import PfHome from "./PfHome";
import PfAbout from "./PfAbout";
import PfExperience from "./PfExperience";
import PfProject from "./PfProject";
import PfContact from "./PfContact";
import WaterWave from "./WaterWave";

const Main = () => {

    const pfArray:any = useRef<any>([]);
    const btnArray:any  = useRef<any>([]);
    const pfBox:any  = useRef<any>();

    const onClickScrollView = (e:number) => {
        pfArray.current[e].scrollIntoView({ behavior: "smooth", block: "start"});
    }

    useEffect(() => {

        const scrollObserver = new IntersectionObserver((e) => {
            e.forEach((div) => {
                if(div.isIntersecting) {
                    btnArray.current[div.target.id].className += ' active';
                    pfArray.current[div.target.id].className = pfArray.current[div.target.id].className.replace(' fade-out', ' fade-in');
                } else {
                    btnArray.current[div.target.id].className = btnArray.current[div.target.id].className.replace(' active', '');
                    pfArray.current[div.target.id].className = pfArray.current[div.target.id].className.replace(' fade-in', ' fade-out');
                }
            })

        }, {threshold: 0.12})

        pfArray.current.forEach((ref: any) => {
            scrollObserver.observe(ref);
        });

    }, []);

    return (
        <div className="main-view">

            <Planet />
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Rocket />
            </button>

            <div className="main-navigation">
                <div className="profile-remote">
                    <div ref={btn => (btnArray.current[0] = btn)} className="btn-custom">
                        <button onClick={() => onClickScrollView(0)}>
                            <div className="satellite"></div>
                        </button>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                    </div>
                    <div ref={btn => (btnArray.current[1] = btn)} className="btn-custom">
                        <button onClick={() => onClickScrollView(1)}>
                            <div className="satellite"></div>
                        </button>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                    </div>
                    <div ref={btn => (btnArray.current[2] = btn)} className="btn-custom">
                        <button onClick={() => onClickScrollView(2)}>
                            <div className="satellite"></div>
                        </button>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                    </div>
                    <div ref={btn => (btnArray.current[3] = btn)} className="btn-custom">
                        <button onClick={() => onClickScrollView(3)}>
                            <div className="satellite"></div>
                        </button>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                    </div>
                    <div ref={btn => (btnArray.current[4] = btn)} className="btn-custom">
                        <button onClick={() => onClickScrollView(4)}>
                            <div className="satellite"></div>
                        </button>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                        <div className="pulse-ring"></div>
                    </div>
                </div>
            </div>

            <div className="progress-bar">

            </div>

            <div className="main-box">
                <div className="main-header">

                </div>
                <div className="main-body" ref={pfBox}>

                    <div className="portfolio-home fade-out" ref={pfHome => (pfArray.current[0] = pfHome)} id={"0"}>
                        <PfHome />
                    </div>

                    <div className="portfolio-about fade-out" ref={pfAbout => (pfArray.current[1] = pfAbout)} id={"1"}>
                        <PfAbout />
                    </div>

                    <div className="portfolio-experience fade-out" ref={pfExperience => (pfArray.current[2] = pfExperience)} id={"2"}>
                        <PfExperience />
                    </div>

                    <div className="portfolio-project fade-out" ref={pfProject => (pfArray.current[3] = pfProject)} id={"3"}>
                        <PfProject />
                    </div>

                    <div className="portfolio-contact fade-out" ref={pfContact => (pfArray.current[4] = pfContact)} id={"4"}>
                        <PfContact />
                    </div>

                    <WaterWave />
                </div>
            </div>

        </div>
    )
}

export default Main;