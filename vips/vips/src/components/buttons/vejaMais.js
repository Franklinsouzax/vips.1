import React from 'react';
import '../buttons/VejaMais.css';

const VejaMais = ({ onClick, index }) => {

    

    return (
        <button className='buttonvejamais'
         onClick={() => onClick(index)}>Veja Mais</button>
    );
}

export default VejaMais;

