import { useLoaderData, useParams } from "react-router-dom";

const SpotDetail = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, id)

    const spot = data.find(singleData => singleData._id == id)
    console.log(spot)
    return (
        <div className="container mx-auto mt-12 text-center">
            <div>
                <img className="w-full mx-auto" src={spot?.photo} alt="" />
            </div>
            <div className="mt-6 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">{spot?.spotName}</h1>
                    <h3 className="text-lg font-medium">

                        <span>{spot?.countryName}</span>
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
                    <h4 className="text-xl">Time Required to deliver: {spot?.travelDuration}</h4>
                    <h3 className="text-xl">Price: {spot?.cost} $ </h3>
                </div>
            </div>
            <p>added by: {spot?.email}</p>
        </div>
    );
};

export default SpotDetail;