// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";

import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider";
import SpotCard from "../AllSpotPage/SpotCard";
import Feedback from "../Components/Feedback";
import Help from "../Components/Help";
import Categories from "./Categories";
import { Helmet } from "react-helmet-async";

// import ValidateUser from "../UserManagement/ValidateUser";

const Home = () => {
    const spots = useLoaderData()
    return (
        <div  className="svg pb-16 lg:pb-32">
            <Helmet>
                Artisan Avenue | Home
            </Helmet>
            <Slider></Slider>
            <section className="container mx-auto mt-12 md:mt-20">
                <h1 className="text-3xl lg:text-5xl styled-font text-center text-rose-500 font-medium mt-12 mb-6">All Arts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        spots?.map(spot => <SpotCard key={spot?._id} spot={spot}></SpotCard>)
                    }
                </div>
            </section>
            <section>
                <Categories></Categories>
            </section>
            <section className="container mx-auto mt-12 md:mt-20">
                <Help></Help>
            </section>
            <section className="container mx-auto mt-12 md:mt-20">
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;