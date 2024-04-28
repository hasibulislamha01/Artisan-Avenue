import Swiper from "swiper";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper'
        >
            <SwiperSlide>
                <div className='slide-1 slider-bg text-center text-white flex flex-col justify-center h-full '>
                    <div className='lg:text-5xl font-semibold opacity-70 animate_animated animate__slideInRight animate__delay-0.5s'>
                        <p className='mb-[-10px]'>Discover a place</p> <br />
                        <p>you will love to live</p>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-2 slider-bg text-center text-blue-100 opacity-90 flex flex-col justify-center h-full'>
                    {/* <h1 className='lg:text-5xl font-semibold '>
                        <p className=''>Discover a place</p> <br /> 
                        <p>you will love to live</p>
                    </h1> */}
                    <p className='w-1/2 mx-auto text-2xl'>
                        Your dream home with Dreamscape Residences, where luxury and comfort meet in every detail.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-3 slider-bg text-center text-white flex flex-col justify-center h-full'>
                    <h1 className='lg:text-3xl font-semibold w-1/2 mx-auto opacity-70'>
                        Experience exceptional living with Dreamscape Residences
                    </h1>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-4 slider-bg text-center text-white flex flex-col justify-center h-full'>
                    <h1 className='lg:text-3xl w-1/2 mx-auto opacity-70 font-semibold '>
                        <p className='mb-[-10px]'>
                            Elevate your lifestyle with every detail of sophistication</p> <br />
                        
                    </h1>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-5 slider-bg text-center text-white flex flex-col justify-center h-full'>
                    <h1 className='lg:text-5xl font-semibold '>
                        <p className=''>Discover a place</p> <br />
                        <p>you will love to live</p>
                    </h1>
                    <p className='w-1/2 mx-auto'>
                        Welcome to DreamDwell, where luxury meets comfort in our meticulously designed residential buildings. Your dream home awaits.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slide-6 slider-bg text-center text-white flex flex-col justify-center h-full'>
                    <h1 className='lg:text-5xl font-semibold '>
                        <p className=''>Discover a place</p> <br />
                        <p>you will love to live</p>
                    </h1>
                    <p className='w-1/2 mx-auto'>
                        Welcome to DreamDwell, where luxury meets comfort in our meticulously designed residential buildings. Your dream home awaits.
                    </p>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;