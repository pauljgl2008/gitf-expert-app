import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dota']);
    const onAddCategory = (newCategory) => {
        // console.log(newCategory)
        // console.log(document.getElementById('new-category').value);
        // setCategories([document.getElementById('new-category').value, ...categories])
        // setCategories(cat => [...cat, document.getElementById('new-category').value])
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
            {
                categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )
            }
        </>
    )
}
