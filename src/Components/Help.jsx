
const Help = () => {
    return (
        <div className="text-center animate__rubberBand animate__delay-2s">
            <h1 className="text-3xl font-semibold mt-12 md:mt-20 animate__animated  animate__rubberBand animate__delay-2s">See how
                <span className="styled-font text-rose-400 ml-3">Artisan</span>
                <span className="ml-3 styled-font text-rose-400 mr-3">Avenue</span> can help</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="card bg-rose-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Get the best Artwork at hand</h2>
                        <p>With over 1 million+ homes for sale available on the website, We can match you with a place you will want to call home..</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-rose-200 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">visit the Showdown FREE</h2>
                        <p>We offer a loyality programme each year where our regular users can join the biggest fair of arts for free.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-rose-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Get Asthetic work</h2>
                        <p>We offer the best thing at a best price. Your most reliable partner at tour. </p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Help;