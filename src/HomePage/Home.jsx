// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";

import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import SpotCard from "../AllSpotPage/SpotCard";
import Feedback from "../Components/Feedback";
import Help from "../Components/Help";

// import ValidateUser from "../UserManagement/ValidateUser";

const Home = () => {
    const spots = useLoaderData()
    return (
        <div className="container mx-auto mt-12">
            <Slider></Slider>
            <section className="mt-12 md:mt-20">
                <h1 className="text-3xl text-center mb-6">All Arts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        spots.map(spot => <SpotCard key={spot._id} spot={spot}></SpotCard>)
                    }
                </div>
            </section>
            <section className="mt-12 md:mt-20">
                <Help></Help>
            </section>
            <section className="mt-12 md:mt-20">
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;