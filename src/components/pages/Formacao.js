import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ImageAlura from './../assets/images/alura-logo.png';
import ImageUnifatecie from './../assets/images/logounifatecie.png';
import ImageDescomplica from './../assets/images/descomplica-logo.png';
import ImageAluralinguas from './../assets/images/alura-linguas-logo.png';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';




function Formacao() {
  return (
    <div >
      <NavBar />
      <div>
        <h4 className="shadow-sm p-3 mb-5 bg-white rounded col my-4 text-center">Formacão Acadêmica</h4>
      </div>
      <CardGroup className='row justify-content-around m-5'>

        <Card id='blocoCard' className=" shadow p-3 mb-5 bg-white rounded p-3 mx-2 my-3 border-white">
          <Card.Body className='text-center'  >
            <img className='img-fluid' style={{ width: 150 }} src={ImageUnifatecie} alt="logo-UniFatecie">
            </img>
            <h6>Superior em Sistemas para Internet</h6>

          </Card.Body>

          <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
             <strong>{'Previsão de término para 04/2025'}</strong>.
            </Tooltip>
          }
        >
          <Button id='btnContato'>Saber mais...</Button>
        </OverlayTrigger>
      ))}
    </>
        </Card>

        <Card id='blocoCard' className=" shadow p-3 mb-5 bg-white rounded bg-white  p-3 mx-2 my-3 border-white ">
          <Card.Body className='text-center'>
            <img className='img-fluid' style={{ width: 140 }} src={ImageAlura} alt="Alura">
            </img>
            <h6 >Desenvolvedor FullStack - Projeto  Desenvolve</h6>
          </Card.Body>
          
          <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
             <strong>{'Previsão de término para 08/2023'}</strong>.
            </Tooltip>
          }
        >
          <Button id='btnContato'>Saber mais...</Button>
        </OverlayTrigger>
      ))}
    </>
        </Card>



        <Card id='blocoCard' className=" shadow p-3 mb-5 bg-white rounded bg-white  p-3 mx-2 my-3 border-white">
          <Card.Body className='text-center'  >
            <img className='img-fluid' style={{ width: 190 }} src={ImageDescomplica} alt="Descomplica">
            </img>
            <h6>Desenvolvedor FrontEnd - Projeto Mover </h6>
          </Card.Body>
          
          <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
             <strong>{'Concluído em 05/2023'}</strong>.
            </Tooltip>
          }
        >
          <Button id='btnContato'>Saber mais...</Button>
        </OverlayTrigger>
      ))}
    </>
        </Card>


        <Card id='blocoCard' className=" shadow p-3 mb-5 bg-white rounded bg-white  my-3 border-white">
          <Card.Body className='text-center p-5'>
            <img className='img-fluid p-3' style={{ width:190 }} src={ImageAluralinguas} alt="logo_alura_linguas">
            </img>
            <h6>Inglês - Projeto Desenvolve </h6>
          </Card.Body>
          
          <>
      {[ 'bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
             <strong>{'Previsão de término para 08/2023'}</strong>.
            </Tooltip>
          }
        >
          <Button id='btnContato'>Saber mais...</Button>
        </OverlayTrigger>
      ))}
    </>
        </Card>



      </CardGroup>
    </div>
  );
}

export default Formacao;