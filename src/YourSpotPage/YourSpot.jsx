import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import YourSpotCard from "./YourSpotCard";

const YourSpot = () => {

    const {user} = useContext(AuthContext) || {}
    const [mySpot, setMySpot] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/mySpot/${user?.email}`)
        .then(res => res.json())
        .then(data => setMySpot(data))

    },[user])


    return (
        <div>
            <h1 className="text-center text-3xl">Your Spots</h1>
            <div>
                {
                    mySpot.map(mySingleSpot => <YourSpotCard key={mySingleSpot._id} mySingleSpot={mySingleSpot}></YourSpotCard>)
                }
            </div>
        </div>
    );
};

export default YourSpot;