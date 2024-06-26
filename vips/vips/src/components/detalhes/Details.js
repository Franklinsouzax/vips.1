import '../detalhes/Details.css'
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';



const Details = ({ produtoSelecionado }) => {
    
    if (!produtoSelecionado) {
        return <div className='barravazia'
           
        >Selecione um produto para ver os detalhes.</div>;
    }

    const { foto, name, decricao } = produtoSelecionado;

    return (
        <div className='container-detalhes'>
           <section className='area-detalhes' >
           
           <div className='area-fotos'>
           <img className='foto-detalhe' src={foto} alt={name} />
           </div>
            
            <div className='area-text'>
            <h2 className='detalhe-title'>{name}</h2>
            <p className='detalhe-decricao'>{decricao}</p>
            <a href='/'> 
            <button className='button-whatsapp buttonvejamais'>
            Verificar com a loja 
            <FaWhatsapp className='whatsaap' style={{ fontSize:20}} /> 
            </button>
            </a>
            </div>
           </section>  
        </div>
    );
};

export default Details;
