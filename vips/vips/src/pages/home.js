
import imagem1 from '../components/banners/frete.png'

import React from "react";
import Slider from "react-slick";
import '../pages/Home.css'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 
import talheres from "./ListTop";
import sacola from "./ListSaco";
import ListIsopor from "./ListIsopor";
import Guardanapos from "./ListGuard";
import Plast from "./ListPlast";
import Papelao from "./ListPape";
import { shuffle } from "lodash";
import Card from '../components/card/card';
import { useState, useEffect } from "react";
import Barra from '../components/folder/barra';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Home = () => {
const [produtosAleatorios, setProdutosAleatorios] = useState([]);
 const navigate = useNavigate();;

useEffect(() => {
  const listaDeProdutos = [...talheres, ...sacola, ...ListIsopor, ...Guardanapos, ...Plast, ...Papelao];
  const produtosEmbaralhados = shuffle(listaDeProdutos);
  setProdutosAleatorios(produtosEmbaralhados.slice(0, 10)); 
}, []);



const handleProductSelect = (produto) => {
  // Redirecionar para a página de detalhes do produto, passando o produto como parâmetro
  navigate(`/produtos/${produto.id}`, { state: { produto } });
};

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  

  return (

      <div  style={{ }}>
      <header   style={{  height:'auto',
                        width:'99.6%', 
                        paddingBottom:"3%", 
                        overflow:'hidden',  
                        '@media (max-width: 600px)': {
                          paddingBottom:"20px", 
                        }
                        }}>
        <Slider className='carrossel'style={{ }} {...settings}>
          <div>
            <img style={{ width:'100%'}}  src={imagem1} alt="Imagem 1" />
          </div>
          <div>
          <img style={{ width:'100%'}}  src={imagem1} alt="Imagem 2" />
          </div>
          <div>
          <img style={{ width:'100%'}}  src={imagem1} alt="Imagem 3" />
          </div>
        
        </Slider>
      </header>
    <main>
      <Barra nametitle='Oque você esta procurando'  />
    <section className='area-card'>
        {produtosAleatorios.map((produto, index) => (
          <Card
            key={index}
            foto={produto.foto}
            name={produto.name}
            descricao={produto.descricao}
            handleClick={() => handleProductSelect(produto)}
          />
        ))}
      </section>
      <Barra nametitle='Quem somos'/>
      <section className='quemsomos' >
      <h1 className="titlesobre">
        VIP Descartáveis: Sua Loja de Descartáveis de Confiança em São Gonçalo, RJ
        </h1>
        <p className="textsobre">
        Uma das grandes vantagens de escolher a VIP Descartáveis como sua fornecedora de 
        produtos descartáveis é a excelente relação custo-benefício. Com preços acessíveis
        e promoções regulares, a loja permite que seus clientes economizem sem abrir 
        mão da qualidade. Além disso, a VIP Descartáveis oferece opções de entrega rápida
        e eficiente, facilitando ainda mais a vida de seus clientes.
        </p>
        <Link className='link-button' to="/sobre">
        <button className='buttonvejamais homebutton'>Quem somos</button>
        </Link>

      </section>
    </main>
   </div>
   
  );
}


export default Home;
