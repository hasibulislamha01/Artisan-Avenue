import { Link, useLoaderData, useParams } from "react-router-dom";

const SpotDetail = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, id)

    const spot = data.find(singleData => singleData._id == id)
    console.log(spot)
    return (
        <div className="container mx-auto flex flex-col justify-center py-20 text-center">
            <div>
                <img className="w-full mx-auto" src={spot?.photo} alt="" />
            </div>
            <div className="mt-6 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl text-sky-400 font-semibold">{spot?.craftName ||spot?.spotName}</h1>
                    <h3 className="text-lg font-medium">

                        <span>{spot?.countryName || spot?.subCategoryName}</span>
                    </h3>
                    <hr className="mb-3 w-full lg:w-1/2  mx-auto" />
                </div>

                <div className="space-y-2">
                    <p className="w-full lg:w-1/2 mx-auto text-lg">
                        {spot?.description}
                    </p>
                </div>
                <div className="space-y-2">
                    <div className="w-full lg:w-1/2 mx-auto text-lg">
                        {
                            spot?.inStock ?
                                <p>Available in Stock</p>
                                : <p>Out of Stock</p>
                        }
                    </div>
                    <p>
                        {
                            spot?.customizable ? 
                            <p>Not Customizable</p> :
                            <p>Customizable</p>
                        }
                    </p>
                </div>
                <div className="space-y-3">
                    <h4 className="text-xl">Time Required to deliver: {spot?.travelDuration || spot?.processingTime} hours</h4>
                    <h3 className="text-xl">Price: {spot?.cost} $ </h3>
                </div>
            </div>
            <p>added by: {spot?.email}</p>
            
            <Link to="/" className="w-[200px] mx-auto btn btn-sm mt-10 bg-sky-400">Back to home</Link>
        </div>
    );
};

export default SpotDetail;