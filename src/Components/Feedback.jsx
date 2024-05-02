
const Feedback = () => {
    return (
        <div className="mt-12 md:mt-20 text-center platypi">
            <h1 className="text-3xl font-semibold">Help us to improve </h1>
            <p className="mt-4 w-1/2 mx-auto text-gray-800">Fill up the following feedback form to help us know your experience with us. We always try to serve you the better services.</p>
            <div>
                <div className="w-full md:w-3/5 lg:w-1/2 mt-10 p-6 mx-auto  text-left  border border-rose-300 rounded-xl">
                    <h2 className="text-xl font-semibold text-center text-gray-500">Feedback form</h2>
                    <p className="mt-6"> Which of the services you have taken from us ?</p>
                    <div className="space-y-1 text-sm">
                        <label className="cursor-pointer flex items-center gap-3">
                            <input type="checkbox" className="checkbox checkbox-warning" />
                            <span>Baught a Painting</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-3">
                            <input type="checkbox" className="checkbox checkbox-warning" />
                            <span>Booked a Exhibition</span>
                        </label>
                        <label className="cursor-pointer flex items-center gap-3">
                            <input type="checkbox" className="checkbox checkbox-warning" />
                            <span>Sold a Painting</span>
                        </label>
                    </div>
                    <div className="mt-6">
                        <h3>How was the service ? Explaine briefly</h3>
                        <label className="min-h-64">
                            <textarea required className="bg-rose-100 border min-h-64 w-full border-rose-300 rounded-lg">

                            </textarea>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-6 btn bg-rose-200 w-1/2 flex justify-center" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;