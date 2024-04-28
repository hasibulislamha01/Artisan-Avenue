import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllSpot = () => {
    const touristSpots = useLoaderData()
    // console.log(touristSpots)

    return (
        <div className="container mx-auto">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <h1>All spots here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    touristSpots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AllSpot;