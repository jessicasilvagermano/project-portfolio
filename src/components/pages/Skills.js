import { Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AiFillHtml5,AiOutlineGithub } from 'react-icons/ai';
import { BsFiletypeCss } from 'react-icons/bs';
import {  FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';

function GroupExample() {
  return (
    <div  >
      <Navbar />
      <div className=" text-center">
        <h3 className="shadow-sm  mb-5 bg-white rounded  text-center">Skills</h3>
      </div>
      <div className=' container  '>
        <div id='card' className='row justify-content-center py-4 mb-2 mt-1 rounded'>
          
          <Card  id='blocoCard' className='   rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>
            
            <Card.Body className='h2 text-center'>
              <Card.Title>Html 5</Card.Title>
              <Card.Text>
                <AiFillHtml5/>
              </Card.Text>
             
            </Card.Body>
          </Card>


          <Card  id='blocoCard' className='    rounded  col-6 justify-content-around  m-3 ' style={{ width: '11rem' }}>
            
            <Card.Body className='h2 text-center'>
              <Card.Title>CSS</Card.Title>
              <Card.Text>
              <BsFiletypeCss />
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card  id='blocoCard' className='   bg-white rounded  col-6 justify-content-around  m-3 ' style={{ width: '11rem' }}>
            
            <Card.Body className='h2 text-center'>
              <Card.Title>Git e Github</Card.Title>
              <Card.Text>
                <AiOutlineGithub/>
              </Card.Text>
            </Card.Body>
          </Card>


          <Card  id='blocoCard' className='   bg-white rounded  col-6 justify-content-around  m-3 ' style={{ width: '11rem' }}>
            
            <Card.Body className='h2 text-center'>
              <Card.Title>JavaScript</Card.Title>
              <Card.Text>
              <TbBrandJavascript />
              </Card.Text>
            </Card.Body>
          </Card>


          <Card  id='blocoCard' className='   bg-white rounded  col-6 justify-content-around  m-3 ' style={{ width: '11rem' }}>
            
            <Card.Body className='h2 text-center'>
              <Card.Title>React JS</Card.Title>
              <Card.Text>
              <FaReact />
              </Card.Text>
            </Card.Body>
          </Card>


        </div >
      </div >
    </div >
  );
}

export default GroupExample;