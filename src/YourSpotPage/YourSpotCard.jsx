import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const YourSpotCard = ({ mySingleSpot, mySpot, setMySpot }) => {
    console.log(mySingleSpot)

    const handleDelete = (id) => {
        console.log('deleting', id)

        // sweet alert here
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f43f5e",
            cancelButtonColor: "#0d9488",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/spot/${mySingleSpot?._id}`, {
                    method: 'DELETE',
                    headers: {

                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = mySpot.filter( spot=> spot._id !== mySingleSpot?._id )
                            setMySpot(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div className="container mx-auto mt-12 flex justify-around items-center">
            <div>
                <img className='max-w-[500px]' src={mySingleSpot?.photo} alt="" />
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
                    <Link to={`/update/${mySingleSpot?._id}`} className="btn btn-sm btn-warning w-1/3">Update</Link>
                    <button onClick={() => handleDelete(mySingleSpot?._id)} className="btn btn-sm btn-error w-1/3">Delete</button>
                </div>
            </div>
        </div>
    );
};

YourSpotCard.propTypes = {
    mySingleSpot: PropTypes.object
}

export default YourSpotCard;