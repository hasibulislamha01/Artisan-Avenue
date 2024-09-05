import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCategories = ({ item }) => {
    return (

        // canvas container
        <div className=" platypi rounded-2xl bg-rose-50 p-4 md:p-10 ">

            {/* canvas image container */}
            <div className="">
                <img className="h-[calc(100vh-100px)] w-full object-cover rounded-lg" src={item?.photo} alt="" />
            </div>

            {/* details container */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center py-4 gap-6">

                {/* right side details section */}
                <div className="w-full md:w-2/5 space-y-5">
                    <p className="text-xl ">
                        {item?.description}
                    </p>
                    <Link to={`/spot/${item._id}`} className="btn bg-sky-300">View Details</Link>
                </div>

                {/* left side details section */}
                <div className="">
                    <h1 className="text-3xl text-sky-400">{item?.craftName || item?.spotName}</h1>
                    <h4 className="text-xl">{item?.countryName}</h4>

                    <div className="text-lg">
                        <h3>Price: {item?.cost}</h3>
                        <h2>Rating: <span className="badge bg-rose-300 p-2 px-4 font-semibold">{item?.location || item?.rating}</span></h2>
                        <p>Processing Hour: {item?.travelDuration} hours</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

SingleCategories.propTypes = {
    item: PropTypes.object
}

export default SingleCategories;