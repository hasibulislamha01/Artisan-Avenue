
const AddSpot = () => {
    return (
        <div className="mt-12">
            <h1 className="text-center text-3xl font-medium">Add a new <span>Destination</span></h1>

            <form className="w-2/5 mx-auto mt-6 space-y-3">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="spotName"
                        className="grow"
                        required
                        placeholder="Spot Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="countryName"
                        className="grow"
                        required
                        placeholder="Country Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="location"
                        className="grow"
                        required
                        placeholder="Location of the spot" />
                </label>

                <textarea
                    className="textarea textarea-lg textarea-bordered w-full"
                    placeholder="Give a short description of the spot">
                </textarea>

                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="number"
                        name="cost"
                        className="grow"
                        required
                        placeholder="Expected cost per trip    ($)" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="season"
                        className="grow"
                        required
                        placeholder="Best time to visit the destination" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="number"
                        name="travelDuration"
                        className="grow"
                        required
                        placeholder="Expected no of days to complete the trip" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="number"
                        name="visitors"
                        className="grow"
                        required
                        placeholder="Average visitors per Year" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="userName"
                        className="grow"
                        required
                        placeholder="Your Name" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input
                        type="email"
                        name="email"
                        className="grow"
                        required
                        placeholder="Email" />
                </label>

                <button className="btn btn-info" type="submit"> Add Spot </button>
            </form>
        </div>
    );
};

export default AddSpot;