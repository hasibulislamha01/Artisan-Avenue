import Typewriter from "./TypeWriter";
import TypeWriter from "./TypeWriter";

const Slider = () => {

    return (
        <div className="carousel w-full z-10 h-screen platypi">
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677679817248-c0069f56c94e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-opacity-50">
                            <h1 className="mb-5 text-3xl lg:text-7xl text-rose-200 font-bold styled-font"><Typewriter></Typewriter></h1>
                            <p className="mb-5">Thank you for choosing our Atrisan Avenue! We hope it brings joy and inspiration to your space. Feel free to reach out if you have any questions or need further assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-opacity-20 border-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-opacity-20 border-transparent">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full ">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673514503035-0021bb051fa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-opacity-50">
                            <h1 className="mb-5 text-5xl font-bold"><TypeWriter></TypeWriter></h1>
                            <p className="mb-5">Thank you for choosing our Atrisan Avenue! We hope it brings joy and inspiration to your space. Feel free to reach out if you have any questions or need further assistance.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-opacity-20 border-transparent">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-opacity-20 border-transparent">❯</a>
                </div>
            </div>
            

        </div>
    );
};

export default Slider;