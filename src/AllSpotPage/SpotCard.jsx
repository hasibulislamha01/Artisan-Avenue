import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const SpotCard = ({spot}) => {
    console.log(spot)

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[200px]" src={spot?.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{spot?.spotName}</h2>
                <p>Total visitors per year: {spot?.visitors} </p>
                <p>Average Cost: {spot?.cost} </p>
                <p>Best time to visit: {spot?.season} </p>
                <p>Expected travel duration: {spot?.travelDuration} </p>
                <div className="card-actions justify-end">
                    <Link to={`/spot/${spot._id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spot: PropTypes.object
}


export default SpotCard;