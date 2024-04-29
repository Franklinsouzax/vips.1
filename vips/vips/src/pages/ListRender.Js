//Imagens

import bandejaIsopor from '../Images/bandejaIsopor.png'
import colherSobremesa from '../Images/colherSobremesa.png'
import colherStrawplast from '../Images/ColherStrawplast.png'
import copinhoIsopor from '../Images/copinhoIsopor.png'
import copoTransparente from '../Images/copoTransparente.png'
import cumbucaIsopor from '../Images/cumbucaIsopor.png'
import dogueira from '../Images/dogueira.png'
import facaForte from '../Images/facaForte.png'
import frangueira from '../Images/frangueira.png'
import garfoInquebravel from '../Images/garfoInquebravel.png'
import guardanapoPerola from '../Images/guardanapoPerola.png'
import guardanapoPerola1 from '../Images/guardanapoPerola1.png'
import hamburgueira from '../Images/hamburgueira.png'
import interfolha from '../Images/Interfolhas.png'
import kitPoteRedondo from '../Images/kitPodeRedondo.png'
import marmitaRedonda from '../Images/marmitaRedonda.png'
import palitoPettit from '../Images/palitoPettit.png'
import pote500MlTransparente from '../Images/pote500MlTransparente.png'
import pratosPapelao from '../Images/pratosPapelao.png'
import sacoAzul from '../Images/sacoAzul.png'
import sacoKraft from '../Images/sacoKraft.png'
import sacola from '../Images/sacola.png'
import sacoSacole from '../Images/sacoSacole'
import pratoAcrilico from '../Images/pratoAcrilico.png'
import embalagemRetangular from '../Images/embalagemRetangular.png'
import pratoDescartavel from '../Images/pratoDescartavel'
import poteRetangular from '../Images/poteRetangular.png'
import copoDrink from '../Images/copoDrink.png'
import copoDrinkcolor from '../Images/copoDrinkcolor.png'
import copinhoTampa from '../Images/copinhoTampa.png'
import facaInquebravel from '../Images/facaInquebravel.png'
import garfoStrawplast from '../Images/garfoStrawplast.png'
//Array

const topicos = [
        [
        { id:1, foto:garfoStrawplast , name:'Garfo Descartável Transparente Strawplast Forte Pacote', decricao:'O Garfo Forte Refeição Strawplast possui estrutura reforçada, indicado para refeições completas. Substitua com elegância os talheres de metal, aproveitando a praticidade dos descartáveis. <br/> Vai bem com refeições completas. </br> O Garfo Forte Refeição Strawplast é fabricado com PS (Poliestireno)'},
        { id:2, foto:facaForte, name:'Faca Refeição Forte Reforçada Branca', decricao:'A Faca Forte Refeição Strawplast possui estrutura reforçada, indicada para refeições completas. Substitua com elegância os talheres de metal, aproveitando a praticidade dos descartáveis.<br/>Vai bem com refeições completas.<br/>A Faca Forte Refeição Strawplast é fabricada com PS (Poliestireno)'},          
        { id:3, foto:garfoInquebravel, name:'Garfo Descartável Master Branco plastblab', decricao:'Garfo inquebrável MASTER PLASTLAB, produzido com material de alta qualidade, oferece resistência, higiene e versatilidade.<br/>Garfo inquebrável MASTER PLASTLAB, produzido com material de alta qualidade, oferece resistência, higiene e versatilidade'}, 
        { id:4, foto: facaInquebravel, name:'Faca inquebrável branco c/50 und plastlab', decricao:'Faca inquebrável MASTER PLASTLAB, produzido com material de alta qualidade, oferece resistência, higiene e versatilidade.<br/>Faca inquebrável MASTER PLASTLAB, produzido com material de alta qualidade, oferece resistência, higiene e versatilidade'},
        { id:5, foto:colherStrawplast, name:'Colher refeição branco strawplast', decricao:'Colher Refeição Branco 50 unid Strawplast.<br/>Substitua com elegância os talheres de metal, aproveitando a praticidade dos descartáveis.'},
        { id:6, foto:colherSobremesa, name:'Colher Sobremesa Cristal "Prafesta"', decricao:'As colheres da marca Prafesta são reconhecidas pela alta qualidade. São ideais para acompanharem as sobremesas e também combinam com qualquer tipo de decoração por terem cor neutra. Por serem descartáveis são práticas e geram um maior custo benefício. <br/><br/> São perfeitas como acompanhamentos de mousses, sobremesas, bolos e tortas, podendo também ser utilizadas em sorveterias.'},
    ],
    [
        { id:7, foto:sacoAzul,  name:'Sacola Alça Camiseta 40x50 Azul "40X50"' , decricao:'Sacolas Camisetas possuem ótimo custo-benefício, ideal para farmácias, supermercados e padarias, são resistentes e práticas. Além disso, as sacolas camisetas possuem o menor <br/>valor por unidade e também podem ser personalizadas; são fabricadas em Polietileno de Alta Densidade (PEAD), portanto não transmite cheiro para os produtos que são transportados.'},
        { id:8, foto:sacola, name:'Sacolas Plástica 25x35', decricao:'Sacola plástica branca 25x35 resistente. Ótimas para o seu comércio, podendo ser utilizada para colocar qualquer tipo de mercadoria ou material'},
        { id:9, foto:sacoSacole, name:'Saco plástico Baixo 06X24', decricao:'Saquinho de Sacolé,Geladinho,chupe-chupe,Dindim, Farofa, Molhos,temperos '},
        { id:10, foto:sacola, name:'Sacola Branca 38x48 Light', decricao:'A sacola Light possui alça camiseta, é produzida em polietileno pigmentado na cor branca. <br/> Pode ser usada em diversos segmentos desde supermercados, padarias, açougues, lojas de roupas e bazar.'},
        { id:11, foto:sacoKraft, name:'Saco De Papel Kraft Pardo 1 Kg   ', decricao:'Ideal para personalização de saquinhos de surpresa, lembrancinhas e artesanato <br/>  Padarias, Docerias, Farmácias, Delivery. etc <br/>Ideal para personalização de saquinhos de surpresa, lembrancinhas e artesanato.'},
        { id:12, foto:sacoKraft, name:'Saco De Papel Pardo Descartável Kraft 1/2kg Pequeno', decricao:'Perfeito para comércios, drogarias, mercearias, bancas de jornal, etc. Muito utilizado para embalar blísters de medicamentos, objetos de pequeno porte, etc.'},
    ],
    [
        { id:13, foto:marmitaRedonda, name:'Marmitherm Base Quadrada N9', decricao:'A Marmitherm Base Quadrada é uma solução ideal para manter suas quentinhas intactas. Fabricada com materiais de alta qualidade, ela oferece resistência contra amassados e proporciona segurança para o transporte de alimentos. Além disso, sendo reciclável, você também contribui para o meio ambiente enquanto desfruta de sua praticidade.'},
        { id:14, foto:marmitaRedonda, name:'Marmitherm Base Redonda N8 "40X50"' , decricao:'A Marmitherm Base Rendoda é projetada para garantir que suas quentinhas permaneçam intactas durante o transporte e armazenamento. Com sua forma arredondada, ela oferece uma proteção extra contra amassados, garantindo a integridade dos alimentos. Feita com materiais de alta qualidade, é uma opção segura e confiável para suas necessidades de embalagem. Além disso, sendo reciclável, você também contribui para um futuro mais sustentável'},
        { id:15, foto:hamburgueira, name:'Hamburgueira H01' , decricao:'A Hamburgueira H01 é o complemento perfeito para garantir que seu hambúrguer favorito chegue ao seu destino sem ser amassado. Com seu design cuidadosamente projetado, esta hamburgueira oferece proteção e segurança para o seu lanche, mantendo-o fresco e intacto até a hora de ser saboreado. Agora você pode desfrutar de hambúrgueres deliciosos onde quer que vá, sem se preocupar com amassados ou bagunças.'},
        { id:16, foto:hamburgueira, name:'Hamburgueira H03 "40X50"' , decricao:'A Hamburgueira H01 é o complemento perfeito para garantir que seu hambúrguer favorito chegue ao seu destino sem ser amassado. Com seu design cuidadosamente projetado, esta hamburgueira oferece proteção e segurança para o seu lanche, mantendo-o fresco e intacto até a hora de ser saboreado. Agora você pode desfrutar de hambúrgueres deliciosos onde quer que vá, sem se preocupar com amassados ou bagunças.'},
        { id:17, foto:dogueira, name:'Dogueira Ch04' , decricao:'A dogueira de isopor é indicada para transportar hotdog. Muito usada para delivery em restaurantes, lanchonetes e padarias. Mantém a temperatura do alimento e seu sabor original, mantendo a boa satisfação do seu cliente, pra que o mesmo receba o produto na qualidade que merece'},
        { id:18, foto:frangueira, name:'Frangueira De Isopor H05' , decricao:'A Frangueira de Isopor oferece praticidade e eficiência no transporte e armazenamento de frangos assados. Fabricada com isopor de alta qualidade, proporciona isolamento térmico para manter os alimentos quentes. Leve e durável, é ideal para uso doméstico e comercial.'},
        { id:19, foto:cumbucaIsopor, name:'Cumbuca Pote Isopor Com Tampa' , decricao:'A Cumbuca Pote Isopor com Tampa proporciona segurança e praticidade para armazenar caldos em seu estabelecimento. Feita de isopor resistente, mantém os caldos quentes por mais tempo e sua tampa permite um transporte seguro dos alimentos'},
        { id:20, foto:copinhoIsopor, name:'Copo De Isopor Diversos tamanhos' , decricao:'"Copos de Isopor em diversos tamanhos, oferecendo praticidade e versatilidade para servir uma ampla variedade de bebidas em seu estabelecimento'},
        { id:21, foto:bandejaIsopor, name:'Bandeja de Isopor (rasas e fundas) diversos tamanhos' , decricao:'Bandejas de Isopor em tamanhos variados, oferecendo versatilidade para atender às diferentes necessidades de seu negócio'},

    ],
    [
        { id:23, foto:guardanapoPerola1, name:'Guardanapos seda Pérolas 18X20' , decricao:'Guardanapos de seda Pérolas, tamanho 18x20, ideais para adicionar um toque de elegância às suas ocasiões especiais.'},
        { id:24, foto:guardanapoPerola, name:'Guardanapos seda Pérolas 13X14 (Estojo)' , decricao:''},
        { id:25, foto:interfolha, name:'Interfolhas brancas Inter Silvestre' , decricao:'Interfolhas brancas Inter Silvestre, ideais para embalar alimentos, mantendo sua frescura e higiene em qualquer ocasião.'},
        { id:26, foto:palitoPettit, name:'palito dente sache Pettit sanches' , decricao:'Palitos de dente em sachê, da marca Petit Sanches, ideais para higiene pessoal e para servir pequenos petiscos em eventos e restaurantes.'},
    ],
    [
        { id:27, foto:copoTransparente, name:'Copo Leitoso (Diversos tamanhos)' , decricao:'Copos Leitosos em diversos tamanhos, perfeitos para servir uma variedade de bebidas com estilo e praticidade em qualquer ocasião'},
        { id:28, foto:copinhoTampa ,name:'Potes para molhos com tampa' , decricao:'Potes com tampa para molhos, proporcionando praticidade e armazenamento seguro para seus condimentos favoritos.'},
        { id:29, foto:copoTransparente ,name:'Copos transparentes (Diversos tamanhos)' , decricao:'Copos transparentes em diversos tamanhos, ideais para servir uma ampla variedade de bebidas com elegância e versatilidade.'},
        { id:30, foto:copinhoIsopor ,name:'Copos Descartáveis(Diversos tamanhos)' , decricao:'Copos descartáveis em diversos tamanhos, oferecendo conveniência e praticidade para servir bebidas em eventos e estabelecimentos comerciais.'},
        { id:31, foto:kitPoteRedondo ,name:'Kit Pote Redondo 250ML' , decricao:'Kit de potes redondos de 250ml, perfeito para armazenar e organizar alimentos com praticidade e segurança.'},
        { id:32, foto:pote500MlTransparente ,name:'kit Pote Redondo 500ML ' , decricao:'Kit de potes redondos de 500ml, ideal para armazenar uma variedade de alimentos de forma conveniente e organizada.'},
        { id:33, foto:poteRetangular, name:'Kit Pote Retangular C/Tampa 750ML' , decricao:'Kit de potes retangulares com tampa de 750ml, proporcionando uma solução prática e versátil para armazenar alimentos de maneira segura e organizada'},
        { id:34, foto:poteRetangular, name:'Kit Pote Retangular C/Tampa 500ML' , decricao:'Kit de potes retangulares com tampa de 500ml, oferecendo uma solução conveniente e funcional para armazenar uma variedade de alimentos de forma organizada e segura.'},
        { id:35, foto:copoDrink , name:'Copo Rígido para Drinks (Diversos Tamanhos)' , decricao:'Copos rígidos para drinks em diversos tamanhos, ideais para servir bebidas com elegância e praticidade em qualquer ocasião.'},
        { id:36, foto: copoDrinkcolor ,name:'Copo Rígido para Drinks Colorido' , decricao:'Copos rígidos coloridos para drinks, adicionando um toque vibrante e divertido à sua festa ou evento especial.'},

    ],
    [
        { id:37, foto:embalagemRetangular ,name:'Embalagem Retangular (Diversos Tamanho)' , decricao:'Embalagens retangulares em diversos tamanhos, proporcionando versatilidade e praticidade para armazenar uma variedade de itens de forma organizada e segura'},
        { id:38, foto:pratosPapelao ,name:'Pratos de Papelão (Diversos Modelos e Tamanhos)' , decricao:'Pratos de papelão disponíveis em diversos modelos e tamanhos, oferecendo uma solução prática e sustentável para servir refeições em eventos e ocasiões especiais'},
        { id:39, foto:pratoDescartavel ,name:'Pratos Descartáveis (Branco/Transparente)' , decricao:'Pratos descartáveis disponíveis em branco e transparente, oferecendo conveniência e praticidade para servir refeições em eventos e ocasiões diversas.'},
        { id:40, foto:pratoAcrilico ,name:'Pratos Acrílicos (Brancos/Transparente)' , decricao:'Pratos acrílicos disponíveis em branco e transparente, oferecendo durabilidade e elegância para servir refeições em eventos e ocasiões especiais.'},
        
    ],

  ];

 export default topicos;