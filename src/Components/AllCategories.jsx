import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCategories from './SingleCategories';

const AllCategories = () => {
    // const finderProperty = useLoaderData()
    const finderProperty = useParams();
    const subCategory = finderProperty?.subCategoryId
    console.log(subCategory)

    const [art, setArt] = useState([])

    // const response = await fetch('')

    useEffect(() => {
        fetch(`http://localhost:5000/spot`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArt(data)
            })
        console.log("art is", art)

    }, [])

    const homologous = art?.filter(singleArt => singleArt?.countryName === subCategory )
    console.log(homologous)


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl lg:text-7xl styled-font text-rose-300 mt-8 mb-2
            '>{subCategory}</h1>
            <div>
                {
                   homologous?.map(item=> <SingleCategories key={item._id} item={item}></SingleCategories>)
                }
            </div>
        </div>
    );
};

// AllCategories.propTypes = {
//     subCategory: PropTypes.
// }

export default AllCategories;