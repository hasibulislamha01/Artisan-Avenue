import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const SpotCard = ({ spot }) => {
    console.log(spot)

    return (
        <div className="card bg-base-100 shadow-xl platypi">
            <figure><img className="h-[200px] w-full" src={spot?.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-400">{spot?.craftName ||spot?.spotName}</h2>
                <h6>{spot?.countryName || spot?.subCategoryName}</h6>
                <hr className='border-b-[1px] border-blue-200 w-full mx-auto' />
                <div className='space-y-2 mt-4'>
                    <p>Rating: <span>{spot?.location || spot?.rating}</span> </p>
                    <div>
                        {/* {
                            JSON.parse(spot?.customizable) === true ?
                            <p>Customizable</p>
                            : <p>Not Customizable</p>
                        } */}
                    </div>
                    <div>
                        {
                            spot?.inStock ?
                            <p>In stock</p>
                            : <p>Out of stock</p>
                        }
                    </div>
                </div>
                <div className="card-action w-4/5 mx-auto">
                    <Link to={`/spot/${spot._id}`} className="btn bg-sky-200 w-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spot: PropTypes.object
}


export default SpotCard;