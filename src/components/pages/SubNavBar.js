
import PillsExample from './LinksDeNav';
import ImagePerfil  from './../assets/images/Sem título-1.png';

function SubNavBar() {
  return (
    <div className=' d-flex justify-content-around mt-4 mb-3 mx-5'>
    <div  className= 'd-flex justify-content-center'>
    <div className="w-75">
      <h3 id='subTitle' >Olá, meu nome é Jéssica Silva e construo páginas web.</h3>
      <p >Atualmente estou cursando Superior em Sistemas para Internet e participando do Projeto Desenvolve oferecido pelo grupo Boticário. 
        Conclui recentemente um curso de Desenvolvimento Web FrontEnd ofertado pelo projeto Mover em parceria com o Descomplica.
      </p>
     <PillsExample/> 
       </div> 
       <div> < img className='d-flex img-fluid justify-content-end col-3' style={{width:230, borderRadius:150}} src={ImagePerfil} alt='Foto Perfil' /></div>
      
      
</div>
 
</div>
  );

}

export default SubNavBar;
