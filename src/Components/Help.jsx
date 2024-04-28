
const Help = () => {
    return (
        <div className="text-center animate__rubberBand animate__delay-2s">
            <h1 className="text-3xl font-semibold mt-12 md:mt-20 animate__animated  animate__rubberBand animate__delay-2s">See how
                <span className="text-blue-500 ml-3">Dream</span>
                <span className="text-amber-500 mr-3">Dwell</span> can help</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Buy a Home</h2>
                        <p>With over 1 million+ homes for sale available on the website, We can match you with a house you will want to call home..</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Rent a Home</h2>
                        <p>With 35+ filters and custom keyword search, We can help you easily find a home or apartment for rent that you will love.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card bg-amber-100 text-black-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sell a Home</h2>
                        <p>With more neighborhood insights than any other real estate website, we have captured the color and diversity of communities.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Help;