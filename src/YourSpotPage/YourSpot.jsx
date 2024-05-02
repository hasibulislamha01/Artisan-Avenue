import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import YourSpotCard from "./YourSpotCard";
import { Helmet } from "react-helmet-async";

const YourSpot = () => {

    // const [spot, setSpot] = useState()

    const { user } = useContext(AuthContext) || {}
    const [mySpot, setMySpot] = useState([])

    useEffect(() => {
        fetch(`https://a-10-travel-site-server.vercel.app/mySpot/${user?.email}`)
            .then(res => res.json())
            .then(data => setMySpot(data))

    }, [user])

    const [search, setSearch] = useState('')
    console.log(search)
    mySpot.map(spot => console.log(spot.customizable))


    return (
        <div className="mt-12 container mx-auto">
            <Helmet>
                Artisan Avenue | Your Arts
            </Helmet>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn">Filter</div>
                    <ul tabIndex={0} className="dropdown-content dropdown-right z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <button className="btn" onClick={() => setSearch('true')}>Customizable</button>
                        <button className="btn" onClick={() => setSearch('false')}>Not customizable</button>
                    </ul>
                </div>
                <h1 className="text-center text-3xl">Your Crafts</h1>
                <div>

                </div>
            </div>
            <div>
                {
                    mySpot.filter(spot => {
                        return search.toLowerCase() === '' ? spot : spot?.customizable.toLowerCase().includes(search)
                    }).map(mySingleSpot =>
                        <YourSpotCard
                            key={mySingleSpot._id}
                            mySingleSpot={mySingleSpot}
                            mySpot={mySpot}
                            setMySpot={setMySpot}
                        >

                        </YourSpotCard>)
                }
                {/* {
                    mySpot.map(mySingleSpot =>
                        <YourSpotCard
                            key={mySingleSpot._id}
                            mySingleSpot={mySingleSpot}
                            mySpot={mySpot}
                            setMySpot={setMySpot}
                        >

                        </YourSpotCard>)
                } */}
            </div>
        </div>
    );
};

export default YourSpot;