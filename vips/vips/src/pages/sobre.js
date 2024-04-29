import Barra from "../components/folder/barra"
import ButtonWaze from "../components/MapsWaze/ButtonWaze"
import '../pages/sobre.css'

const Sobre =( ) =>{
  
 return(
    <div>
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
        <p className="textsobre">
        Para entrar em contato com a VIP Descartáveis e fazer suas compras, basta ligar 
        para o telefone (21) 99863-2430. A equipe terá prazer em atendê-lo e fornecer 
        todas as informações necessárias. Se preferir, você também pode visitar a loja 
        pessoalmente e conferir de perto todo o seu catálogo de produtos.
        </p>
        <p className="textsobre ultimo">
        Não importa se você está organizando uma festa, gerenciando um estabelecimento
        comercial ou simplesmente buscando praticidade no seu dia a dia, a VIP Descartáveis
        está aqui para atender todas as suas necessidades de forma rápida, eficiente e 
        econômica. Venha nos visitar e descubra por que somos a escolha preferida de 
        tantos clientes em São Gonçalo e região.
        </p>
        <Barra nametitle='Localização' />
        <div style={{position:'relative', display:'flex', alignItems:'center'}}>
        <ButtonWaze latitude={-22.861957} longitude={-43.0881549} label="Encontre no Waze" />
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14705.569767729581!2d-43.0881549!3d-22.861957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998522537cd1c1%3A0x79048f9142c0c2a5!2sVips%20Descart%C3%A1veis!5e0!3m2!1spt-BR!2sbr!4v1714278457375!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa da VIP Descartáveis"
      ></iframe>
        </div>
        
      
    </div>

 )


} 

export default Sobre