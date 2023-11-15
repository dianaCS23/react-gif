import {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 
  const [categories, setcategories] = useState(['Goku'])
 
  const onAddCategory = (NewCategory) => {
    
    if (categories.includes(NewCategory) ) return;
    
    setcategories ([NewCategory,...categories]);

  }


  return (
    <>
        <h2>Uso Basico de React + Llamado a api GHIPHY</h2>
       
      
  <AddCategory 
  //la palabra on usualemnte significa que esta emitiendo algo
  onNewCategory ={ (value) => onAddCategory (value) }
 
  //setCategories={ setcategories }
  />
   
           
 
          {
            categories.map( (category) =>(
            
            <GifGrid key={category}
             category={category}             
             
            />
            ))}
 
     
    </>
  )
}