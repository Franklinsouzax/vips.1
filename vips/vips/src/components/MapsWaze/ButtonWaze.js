import '../MapsWaze/ButtonWaze.css'
import { FaWaze } from "react-icons/fa";


const ButtonWaze = ({ latitude, longitude, label }) => {
  // Função para abrir o aplicativo do Waze com a rota pré-definida
  const handleOpenWaze = () => {
    // URL para abrir o Waze com a rota pré-definida
    const wazeURL = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
    
    // Abre o Waze em uma nova aba
    window.open(wazeURL);
  };

  return (
    <button className='buttonvejamais loc' onClick={handleOpenWaze}>{label} <FaWaze style={{fontSize:'30px', padding:'3%'}}/> </button>
  );
};

export default ButtonWaze;  