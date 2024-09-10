import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ArtCard = ({ spot }) => {
    console.log(spot)

    return (
        <div className="card shadow-xl platypi rounded-[7px] bg-base-100">
            <figure><img className="h-[200px] w-full" src={spot?.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-400">{spot?.craftName || spot?.spotName}</h2>
                <h6>{spot?.countryName || spot?.subCategoryName}</h6>
                <hr className='border-b-[1px] border-sky-200 w-full mx-auto' />
                <div className='flex items-center'>
                    <p>Rating: <span>{spot?.location || spot?.rating}</span> </p>

                    <div className='justify-end'>
                        {
                            spot?.inStock ?
                                <p>In stock</p>
                                : <p>Out of stock</p>
                        }
                    </div>
                </div>
                <div>
                    {
                        JSON.parse(spot?.customizable) === true ?
                            <p>Customizable</p>
                            : <p>Not Customizable</p>
                    }
                </div>
                <div className="card-action w-4/5 mx-auto">
                    <Link to={`/spot/${spot._id}`} className="btn bg-sky-200 w-full text-black hover:text-sky-600">View Details</Link>
                </div>
            </div>
        </div>
    );
};

ArtCard.propTypes = {
    spot: PropTypes.object
}


export default ArtCard;