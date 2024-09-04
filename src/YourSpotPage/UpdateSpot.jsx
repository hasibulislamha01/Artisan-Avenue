import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Select from 'react-select'

const UpdateSpot = () => {

    const navigate = useNavigate();
    const spot = useLoaderData()
    console.log(spot)

    const handleUpdateSpot = async (e) => {
        e.preventDefault()

        const form = e.target;
        const craftName = form.spotName.value;
        const photo = form.photo.value;
        const subCategoryName = form.countryName.value;
        const rating = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const customizable = form.season.value;
        const processingTime = form.travelDuration.value;
        const inStock = form.visitors.value;
        const userName = form.userName.value;
        const email = form.email.value;

        const updatedCraft = { spotName: craftName, photo, countryName: subCategoryName, location: rating, description, cost, customizable, travelDuration: processingTime, inStock, userName, email }
        console.log('updatedCraft', updatedCraft)


        // send data to database
        const response = await fetch(`https://a-10-travel-site-server.vercel.app/spot/${spot?._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
        const data = await response.json()
        // toast.success
        console.log(data);
        if (data?.modifiedCount) {
            toast.success('Craft Updated successfully')
            finalCommand()
        }
        else{
            toast.error('You have changed nothing about the craft')
        }

        

    }

    const finalCommand = () => {
        navigate('/')
    }

    const customizeOpt = [
        {value: 'true', label: 'Customizable'},
        {value: 'false', label: 'Not Customizable'},
    ]
    const stockOpt = [
        {value: 'true', label: 'In Stock'},
        {value: 'false', label: 'Out of Stock'},
    ]
    const ratingOpt = [
        {value: '0', label: '0'},
        {value: '0.5', label: '0.5'},
        {value: '1', label: '1'},
        {value: '1.5', label: '1.5'},
        {value: '2', label: '2'},
        {value: '2.5', label: '2.5'},
        {value: '3', label: '3'},
        {value: '3.5', label: '3.5'},
        {value: '4', label: '4'},
        {value: '4.5', label: '4.5'},
        {value: '5', label: '5'},
    ]


    return (
        <div className="min-h-screen flex flex-col justify-center py-20">
            <Toaster></Toaster>
            <h1 className="text-center text-3xl font-medium">Update the Craft  <span>{spot?.spotName}</span></h1>

            <form onSubmit={handleUpdateSpot} className="mt-6 lg:w-2/5 mx-auto flex flex-col gap-4">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="spotName"
                        className="grow"
                        required
                        placeholder="Craft Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="photo"
                        className="grow"
                        required
                        placeholder="Photo URL" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        name="countryName"
                        className="grow"
                        required
                        placeholder="Subcategory Name" />
                </label>
                <Select
                    options={ratingOpt}
                    placeholder='Rating of the craft'
                    name="location"
                ></Select>

                <textarea
                    className="textarea textarea-lg textarea-bordered w-full"
                    name="description"
                    placeholder="Give a short description of the craft">
                </textarea>

                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="number"
                        name="cost"
                        className="grow"
                        required
                        placeholder="Price of the craft" />
                </label>
                
                <Select
                    options={customizeOpt}
                    placeholder='Is the craft customizable ?'
                    name="season"
                ></Select>

                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="number"
                        name="travelDuration"
                        className="grow"
                        required
                        placeholder="Expected time for processing (hours)" />
                </label>
                <Select
                    options={stockOpt}
                    placeholder='Is the craft in stock ?'
                    name="visitors"
                ></Select>

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

                <button className="btn btn-info" type="submit"> Update Spot </button>
            </form>
        </div>
    );
};

export default UpdateSpot;