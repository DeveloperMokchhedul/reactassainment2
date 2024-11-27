import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Container from './common/Container';
import Description from './common/Description';
import Title from './common/Title';
import { swiperData } from '../Api/Swiper';

export default function Slider() {
    useEffect(() => {

        const prevButton = document.querySelector('.custom-prev');
        const nextButton = document.querySelector('.custom-next');

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                const swiperInstance = document.querySelector('.mySwiper').swiper;
                swiperInstance.slidePrev();
            });

            nextButton.addEventListener('click', () => {
                const swiperInstance = document.querySelector('.mySwiper').swiper;
                swiperInstance.slideNext();
            });
        }
    }, []);

    return (
        <>
            <div className="bg-bg-primary md:pt-[96px] md:pb-[80px] relative">
                <Container>
                    <Swiper
                        cssMode={true}
                        pagination={{ clickable: true }}
                        mousewheel={true}
                        keyboard={true}
                        loop={true} 
                        autoplay={{
                            delay: 3000, 
                            disableOnInteraction: false, 
                            reverseDirection: false, 
                        }}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                        className="mySwiper"
                    >
                        {swiperData.map((data, index) => (
                            <SwiperSlide className="flex" key={index}>
                                <div className="md:w-[920px] mx-auto text-center px-[24px]">
                                    <img
                                        className="w-[74px] h-[74px] mb-[44px] flex mx-auto"
                                        src={data.image}
                                        alt=""
                                    />
                                    <Description className="text-[24px] md:text-[32px] leading-[31px] md:leading-[45px]">
                                        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </Description>
                                    <Title className="text-[18px] leading-[27px] md:text-[24px] font-semibold md:leading-[36px] mt-[24px] text-primary">
                                        John Doe
                                    </Title>
                                    <Description className="mb-[54px] text-[16px]">
                                        Chief Strategy Officer @ Company
                                    </Description>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

              
                    <div className="hidden md:flex justify-between mt-4">
                        <button className="custom-prev text-white absolute top-[45%] left-[150px] px-4 py-2 rounded cursor-pointer">
                            <img className="rotate-180" src="/images/next.png" alt="" />
                        </button>
                        <button className="custom-next text-white absolute top-[45%] right-[150px] px-4 py-2 rounded cursor-pointer">
                            <img src="/images/next.png" alt="" />
                        </button>
                    </div>
                </Container>
            </div>
        </>
    );
}
