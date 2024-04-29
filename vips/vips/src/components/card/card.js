import VejaMais from '../buttons/vejaMais';
import { useNavigate } from 'react-router-dom';
import '../card/card.css'


const Card = ({ foto, name, decricao ,handleClick, index}) => {

    const navigate = useNavigate();

    const handleProductClick = () => {
        // Navega para a página de detalhes do produto com o ID do produto como parâmetro
        navigate(`/produtos/${index}`);
    };

    return (
        <div  key={index} className='card' onClick={handleProductClick} >
            
            <img className='cardimage' src={foto} alt={name} />
            <h2 className='cardtitle'>{name}</h2>
            <p className='card-descr' >{decricao}</p>
            <VejaMais onClick={() => handleClick(index)} index={index} />
        </div>
    );
}

export default Card;
