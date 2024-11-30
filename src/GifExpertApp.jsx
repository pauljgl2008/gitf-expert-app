import React, { useState } from 'react'
import { AddCategory } from './AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Goku']);
    const onAddCategory = (newCategory) => {
        // console.log(newCategory)
        // console.log(document.getElementById('new-category').value);
        // setCategories([document.getElementById('new-category').value, ...categories])
        // setCategories(cat => [...cat, document.getElementById('new-category').value])
        if(categories.includes(newCategory)){
            return;
        }
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            {/* <input id="new-category"></input> */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value=> onAddCategory(value)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                }
                )}
                {/* <li>ABC</li> */}
            </ol>
        </>
    )
}
