import Card from "../components/card/card"
import talheres from "./ListTop"
import '../pages/Produtos.css'
import sacola from './ListSaco'
import ListIsopor from './ListIsopor'
import Guardanapos from './ListGuard'
import Plast from './ListPlast'
import Papelao from './ListPape'
import Details from "../components/detalhes/Details"
import { useState } from "react"
import Barra from "../components/folder/barra"


const Produtos =() =>{
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (produto) => {
        setSelectedProduct(produto);
        console.log("Produto selecionado:", produto);
    };



    return(
       <div >
        <Details produtoSelecionado={selectedProduct} />
        <Barra nametitle='Linha Talheres'/>
         <section className='area-card'>
                {talheres.map((produto, index) => (
                    <Card
                        key={index}
                        foto={produto.foto}
                        name={produto.name}
                        descricao={produto.descricao}
                        handleClick={() => handleProductSelect(produto)} // Passe a função de seleção de produto como handleClick
                    />
                    
                ))}
                
            </section>
            <Barra nametitle='Linha Sacos e Sacolas'/>
           <section className='area-card'>
           {sacola.map((produto,index)=>(
                <Card
                key={index}
                foto={produto.foto}
                name={produto.name}
                decricao={produto.decricao}
                handleClick={() => handleProductSelect(produto)}
                />
            ))}
           </section>
           <Barra nametitle='Linha Isopor'/>
           <section className='area-card'>
           {ListIsopor.map((produto,index)=>(
                <Card
                key={index}
                foto={produto.foto}
                name={produto.name}
                decricao={produto.decricao}
                handleClick={() => handleProductSelect(produto)}
                />
            ))}
           </section>
           <Barra nametitle='Linha Papeis e Guardanapo'/>
           <section className='area-card'>
           {Guardanapos.map((produto,index)=>(
                <Card
                key={index}
                foto={produto.foto}
                name={produto.name}
                decricao={produto.decricao}
                handleClick={() => handleProductSelect(produto)}
                />
            ))}
           </section>
           <Barra nametitle='Linha Plasticos'/>
           <section className='area-card'>
           {Plast.map((produto,index)=>(
                <Card
                key={index}
                foto={produto.foto}
                name={produto.name}
                decricao={produto.decricao}
                handleClick={() => handleProductSelect(produto)}
                />
            ))}
           </section>
           <Barra nametitle='Linha Papelão'/>
           <section className='area-card'>
           {Papelao.map((produto,index)=>(
                <Card
                key={index}
                foto={produto.foto}
                name={produto.name}
                decricao={produto.decricao}
                handleClick={() => handleProductSelect(produto)}
                />
            ))}
           </section>

           
          
       </div>
   
    )
   
   
   } 
   
   export default Produtos