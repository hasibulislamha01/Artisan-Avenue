import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://a-10-travel-site-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    console.log(categories)

    return (
        <div className="container mx-auto mt-20  md:mt-[300px]">
            <h1 className="text-center text-3xl lg:text-5xl text-rose-500 styled-font">Categories</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    categories.map(category =>
                        <CategoryCard
                            key={category._id}
                            category={category}
                        >
                        </CategoryCard>)
                }
            </div>
            
        </div>
    );
};

export default Categories;