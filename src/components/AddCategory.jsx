import { useState } from 'react';

export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputValue ] = useState ('Goku');

    const onInputChange = ({target}) => {
     setInputValue(target.value); //agarra el valor del input
    }

const onSubmit = (event) => {

event.preventDefault();
if ( inputValue.trim().length <= 1) return;

//onNewCategory( inputValue.trim())
//setCategories( categories => [ inputValue, ...categories ]);

setInputValue('');//limpiando el valor del input
onNewCategory( inputValue.trim());
}

  return (
   
    <form onSubmit= {onSubmit}>
<input 
        type="text"
        placeholder="Buscar Gifts"
        value={ inputValue}
        onChange={onInputChange}

        />

    </form>
        
  )
}


