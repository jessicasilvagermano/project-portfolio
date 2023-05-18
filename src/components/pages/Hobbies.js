
import { MdMonitor, MdHeadphones } from 'react-icons/md';
import { FaWalking, FaGuitar } from 'react-icons/fa';
import { GiKnifeFork,GiThreeFriends } from 'react-icons/gi';
import GroupExample from './Skills';

import Card from 'react-bootstrap/Card';
import NavBar from './NavBar';

function Hobbies() {
  return (

    <>
      <div >
        <NavBar/>
        <div  >
          <h3 className=" shadow-sm p-2  bg-white rounded  my-4 text-center">Hobbies</h3>
        </div>
        <div id='card' className=' container rounded'>
          <div  className='row justify-content-center py-4 my-4 '>

            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>
             
              <Card.Body className='h5'>
                <Card.Text>
                  <MdMonitor/>
                  <p> Assistir Séries </p>
                </Card.Text>
              </Card.Body>
            </Card>


            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>
            
              <Card.Body className='h5'>
               
                <Card.Text>
                  <MdHeadphones />
                  <p>Ouvir Música</p>
                </Card.Text>
               
              </Card.Body>
            </Card>


            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>
            
              <Card.Body className='h5'>
               
                <Card.Text>
                  <FaGuitar />
                  <p>Tocar Violão</p>
                </Card.Text>
               
              </Card.Body>
            </Card>


            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>

            
              <Card.Body className='h5'>
               
                <Card.Text>
                  <FaWalking />
                  <p>Caminhar ao ar livre</p>
                </Card.Text>
               
              </Card.Body>
            </Card>


            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>

            
              <Card.Body className='h5'>
               
                <Card.Text>
                  <GiKnifeFork />
                  <p>Comer</p>
                </Card.Text>
              </Card.Body>
            </Card>


            <Card id='blocoCard' className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>

            
              <Card.Body className='h5'>
               
                <Card.Text>
                  <GiThreeFriends/>
                  <p>Conversar com amigos </p>
                </Card.Text>
               
              </Card.Body >
            </Card>

          </div>
        </div>
        <GroupExample />
      </div>
    </>
  );
}

export default Hobbies;