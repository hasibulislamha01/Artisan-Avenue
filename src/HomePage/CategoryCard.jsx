import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    console.log(category)
    const subCategoryId = category?.subCategory;
    console.log(subCategoryId)
    return (
        <div className="card glass  platypi">
            <figure><img className='h-[200px] w-full' src={category?.image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-sky-400">{category?.subCategory}</h2>
                <p>{category?.line}</p>
                <div className="card-actions">
                    <Link to={`/allCategories/${subCategoryId}`} className="mt-4 btn w-4/5 mx-auto bg-sky-200 text-black hover:text-sky-400">Similar Paintings</Link>
                </div>
            </div>
        </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.object
}

export default CategoryCard;