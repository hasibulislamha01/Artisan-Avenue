
const Help = () => {
    return (
        <div className="text-center animate__rubberBand animate__delay-2s">
            <h1 className="text-3xl font-semibold mt-12 md:mt-20 animate__animated  animate__rubberBand animate__delay-2s">See how
                <span className="text-blue-500 ml-3">Trust</span>
                <span className="text-amber-500 mr-3">Travel</span> can help</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Book a Tour</h2>
                        <p>With over 1 million+ homes for sale available on the website, We can match you with a place you will want to call home..</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rent a Place</h2>
                        <p>With 35+ filters and custom keyword search, We can help you easily find a Place for occassionss  that you will love.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Price Garantee</h2>
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