import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCategories from './SingleCategories';

const AllCategories = () => {
    // const finderProperty = useLoaderData()
    const finderProperty = useParams();
    const subCategory = finderProperty?.subCategoryId
    console.log(subCategory)

    const [art, setArt] = useState([])


    useEffect(() => {
        fetch(`https://a-10-travel-site-server.vercel.app/spot`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setArt(data)
            })
        console.log("art is", art)

    }, [])

    const homologous = art?.filter(singleArt => singleArt?.countryName || singleArt?.subCategoryName === subCategory )
    console.log(homologous)


    return (
        <div className='container mx-auto min-h-screen flex flex-col justify-center py-20'>
            <h1 className='text-center text-3xl lg:text-7xl styled-font text-rose-300 my-6
            '>{subCategory}</h1>
            <div className='space-y-6'>
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