import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import YourArtCard from "./YourArtCard";
import { Link } from "react-router-dom";


const YourArts = () => {

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
        <div className="container mx-auto min-h-screen flex flex-col justify-center items-center py-20 px-2">
            <Helmet>
                Artisan Avenue | Your Arts
            </Helmet>
            {
                mySpot?.length !== 0 ?
                    <>
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full">
                            <div className="dropdown order-2 md:order-none">
                                <div tabIndex={0} role="button" className="btn bg-rose-200">Filter</div>
                                <ul tabIndex={0} className="dropdown-content dropdown-right z-[1] menu p-4 shadow rounded-box w-52 space-y-4 bg-rose-100 ">
                                    <button className="btn rounded-[10px] hover:bg-rose-300" onClick={() => setSearch('true')}>Customizable</button>
                                    <button className="btn rounded-[10px] hover:bg-rose-300" onClick={() => setSearch('false')}>Not customizable</button>
                                </ul>
                            </div>
                            <h1 className="text-center text-3xl order-1  md:order-none">Your Crafts</h1>
                            <div>

                            </div>
                        </div>
                        <div>
                            {
                                mySpot?.filter(spot => {
                                    return search.toLowerCase() === '' ? spot : spot?.customizable.toLowerCase().includes(search)
                                }).map(mySingleSpot =>
                                    <YourArtCard
                                        key={mySingleSpot._id}
                                        mySingleSpot={mySingleSpot}
                                        mySpot={mySpot}
                                        setMySpot={setMySpot}
                                    >

                                    </YourArtCard>)

                            }

                        </div>
                    </>
                    :
                    <div className="flex flex-col items-center gap-12">
                        <h1 className="text-rose-500 text-2xl md:text-5xl">You have not created any arts yet </h1>

                        <picture>
                            <source type="image/webp" srcSet="/empty.webp" className=" h-[250px]" />
                            <img src="/empty.png" alt="empty" className=" h-[250px]" />
                        </picture>

                        <Link to='/addSpot'>
                            <button className="btn w-[200px] md:w-[300px] bg-sky-400 text-xl md:text-2xl px-6">
                                Create One !
                            </button>
                        </Link>
                    </div>

            }

        </div>
    );
};

export default YourArts;