
const AddCountries = () => {

    const handleAddCountries = (e) => {
        e.preventDefault()
        console.log('Country will be added')

        const form = e.target;
        const countryName = form.countryName.value;
        const countryInfo = form.description.value;
        const countryImage = form.imageLink.value;

        const newCountry = { countryName, countryInfo, countryImage };
        console.log(newCountry)


        // add countries to database
        fetch('https://a-10-travel-site-server.vercel.app/countries',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCountry)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })

    } 
    return (
        <div className="mt-12">
            <h1 className="text-center text-3xl font-semibold">Enter a Country Data</h1>
            <form onSubmit={handleAddCountries} className="mt-6 w-2/5 mx-auto space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="countryName"
                        className="grow"
                        required
                        placeholder="Country Name" />
                </label>

                <textarea
                    className="textarea textarea-lg textarea-bordered w-full"
                    name="description"
                    placeholder="Give a short description of the country">
                </textarea>

                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="imageLink"
                        className="grow"
                        required
                        placeholder="Enter image url" />
                </label>
                <button type="submit" className="btn btn-accent w-full">Add Country</button>
            </form>
        </div>
    );
};

export default AddCountries;