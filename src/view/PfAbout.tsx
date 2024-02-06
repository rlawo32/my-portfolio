import './PfAbout.scss';

const pfAbout = () => {

    return (
        <div className="portfolio-about-body">
            <div className="portfolio-about-content">
                <div className="portfolio-about-title">
                    About Me

                    <p>
                        안녕하세요. <br />
                        제 포트폴리오를 보러 와주셔서 감사합니다.
                    </p>
                </div>
                <div className="portfolio-about-text">
                    <div className="portfolio-about-box">
                        <div className="about-text-key">왜 풀스택을 목표하나요?</div>
                        <p className="about-text-value">
                            저는 FE/BE 어느 하나를 선택을 못 할 정도롤 둘 다 재밌게 느끼고 있습니다. <br />
                            또한, 풀스택은 시스템 전체를 골고루 경험을 할 수 있고
                            이를 통해 더욱 빠른 성장이 될 것이라 생각이 들었고 <br />
                            최근 업계가 풀스택을 원하는 추세라 풀스택을 목표로 합니다.
                        </p>
                    </div>
                    <div className="portfolio-about-box">
                        <div className="about-text-key">목표를 향한 계획이 있나요?</div>
                        <p className="about-text-value">
                            풀스택 개발자가 되기 위해 우선 꾸준히 다양한 프로젝트를 진행해보며,
                            여러 언어들과 기술들을 직접 다뤄보고 내 것으로 만들고 <br />
                            기업에 들어가 실무에서의 다양한 포지션을 경험해보는 것을 통해
                            풀스택 기량을 쌓을 수 있을거라 생각합니다.
                        </p>
                    </div>
                    <div className="portfolio-about-box">
                        <div className="about-text-key">현재는 무엇을 하고있죠?</div>
                        <p className="about-text-value">
                            현재 저는 개인 프로젝트를 진행중이며, 프론트부터 백까지 모든 부분을 직접
                            구현해내면서 공부를 하고 있습니다. <br />
                            또한, 기존 언어와 기술에 그치지 않고 새로운 것들을 사용해서
                            간단한 사이드 프로젝트를 고안하고 진행하고 있습니다.
                        </p>
                    </div>
                    <div className="portfolio-about-box">
                        <div className="about-text-key">채용시 이점이 있을까요?</div>
                        <p className="about-text-value">
                            저는 새로운 언어와 기술에 대한 거부감이 없으며,
                            더욱 다양한 경험을 하고자 하는 열정이 있습니다. <br />
                            또한, 이해와 경험을 통해서 배운 지식으로 기반한 응용력은 자신있다 자부합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default pfAbout;