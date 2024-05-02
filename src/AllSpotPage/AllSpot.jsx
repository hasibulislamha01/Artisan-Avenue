import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useState } from "react";

const AllSpot = () => {
    const touristSpots = useLoaderData()
    console.log(touristSpots)




    return (
        <div className="container mx-auto mt-12 pb-12 lg:pb-32">

            <h1 className="text-center text-3xl lg:text-5xl font-semibold styled-font my-3 text-rose-300">All Arts here</h1>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Art Name</th>
                                <th>Art Category</th>
                                <th>Availability</th>
                                <th>Price</th>
                                <th>Details Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                touristSpots.map(art =>
                                    <tr key={art?._id}>
                                        <td>{art?.craftName ||art?.spotName}</td>
                                        <td>{art?.countryName}</td>
                                        {art?.inStock ? <td>In Stock</td> : <td>Out of Stock</td>}
                                        <td>{art?.cost}</td>
                                        <td> <Link to={`/spot/${art._id}`} className="btn bg-rose-200 btn-sm">View Details</Link></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllSpot;