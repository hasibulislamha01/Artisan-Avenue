import PropTypes from 'prop-types'

const YourSpotCard = ({ mySingleSpot }) => {
    console.log(mySingleSpot)
    return (
        <div className="container mx-auto mt-12 flex justify-around items-center">
            <div>
                <img src={mySingleSpot?.photo} alt="" />
            </div>
            <div className="space-y-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-2xl font-medium text-center">About the place</h1>
                    <p className="w-[90%] mx-auto text-lg">
                        {mySingleSpot?.description}
                    </p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-lg">On average {mySingleSpot?.visitors} visit the place in a calender year.</h2>
                    <h3 className="text-lg">Expected cost per trip per head: {mySingleSpot?.cost} $ </h3>
                </div>
                <div className="flex justify-center gap-10">
                    <button className="btn btn-sm btn-warning w-1/3">Update</button>
                    <button className="btn btn-sm btn-error w-1/3">Delete</button>
                </div>
            </div>
        </div>
    );
};

YourSpotCard.propTypes = {
    mySingleSpot: PropTypes.object
}

export default YourSpotCard;