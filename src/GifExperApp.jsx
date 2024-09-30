import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExperApp = () => {

    const [ categories, setCategories ] = useState([ 'Star Wars' ]);

    const onAddCategory = (newCategory) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant' ] );
    };

  return (
    <>
        <h1>GifExperApp</h1>

        <AddCategory 
            onNewCategory={ event => onAddCategory(event) }
        />


        { 
            categories.map( ( category ) => ( 
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />
            )) 
        }
            


    </>
  )
}


