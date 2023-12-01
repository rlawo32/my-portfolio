import './PfExperience.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const pfExperience = () => {
    const sliderItemTitle:any = ['씨앤비플러스', '국가평생교육진흥원', '구디아카데미 45기', '울산과학대 컴퓨터정보학부'];
    const sliderItemDate:any = ['2022-09 ~ 2023-03', '2022-10 ~ 2023-01', '2022-01 ~ 2022-07', '2016-03 ~ 2022-02'];
    const sliderItemContent:any = ['그룹웨어 리팩토링/유지보수', '학사 취득을 위한 학점은행제 이수', 'Java, JavaScript, 웹 개발 등을 학습했습니다.', ''];
    const experienceSlider = () => {

        const sliderList:any = [];

        for(let i:number=0; i<sliderItemTitle.length; i++) {
            sliderList.push(<SwiperSlide key={i} className="experience-item">
                <div className="item-title">
                    {sliderItemTitle[i]}
                </div>
                <div className="item-date">
                    {sliderItemDate[i]}
                </div>
                <div className="item-content">
                    {sliderItemContent[i]}
                </div>
            </SwiperSlide>)
        }

        return sliderList;
    }

    return (
        <div className="portfolio-experience-body">
            <div className="portfolio-experience-content">

                <div className="portfolio-experience-title">
                    Experience
                </div>
                <div className="portfolio-experience-text">

                    <Swiper className="experience-list"
                            modules={[Navigation, Pagination]}
                            speed={1000}
                            slidesPerView={1}
                            spaceBetween={50}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                }
                            }}>
                        {experienceSlider()}
                    </Swiper>

                </div>
            </div>
        </div>
    )

}

export default pfExperience;