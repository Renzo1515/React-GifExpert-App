import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExperApp = () => {

    const [ categories, setCategories ] = useState([ 'Star Wars' ]);

    const onAddCategory = (newCategory) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories ] );
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


