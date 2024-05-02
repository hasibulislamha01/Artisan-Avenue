import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleCategories = ({ item }) => {
    return (
        <div className="platypi rounded-xl bg-rose-50">
            <div className="px-12 pt-12 pb-6 rounded-2xl ">
                <img className=" rounded-2xl " src={item?.photo} alt="" />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-around items-center pb-8">
                <div className="w-2/5 space-y-5">
                    <p className="text-xl ">
                        {item?.description}
                    </p>
                    <Link to={`/spot/${item._id}`} className="btn bg-sky-300">View Details</Link>
                </div>
                <div>
                    <h1 className="text-3xl text-sky-400">{item?.craftName ||item?.spotName}</h1>
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