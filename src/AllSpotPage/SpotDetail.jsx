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
                <img src={spot?.photo} alt="" />
            </div>
            <div className="mt-6 space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">{spot?.spotName}</h1>
                    <h3 className="text-lg font-medium">Situated in
                        <span> {spot?.location}</span> ,
                        <span>{spot?.countryName}</span>
                    </h3>
                    <hr className="mb-3 w-full lg:w-1/2  mx-auto" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-xl font-medium">About the place</h1>
                    <p className="w-full lg:w-1/2 mx-auto text-lg">
                        {spot?.description}
                    </p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl font-medium">Best time to visit</h1>
                    <p className="w-full lg:w-1/2 mx-auto text-lg">
                        {spot?.season}
                    </p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-xl">On average {spot?.visitors} visit the place in a calender year.</h2>
                    <h4 className="text-xl">Time Required to visit the place: {spot?.travelDuration}</h4>
                    <h3 className="text-xl">Expected cost per trip per head: {spot?.cost} $ </h3>
                </div>
            </div>
        </div>
    );
};

export default SpotDetail;