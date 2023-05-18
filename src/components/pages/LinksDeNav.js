import Nav from 'react-bootstrap/Nav';


function PillsExample() {
  return (
  
<div  className='d-flex my-4' > 
      <Nav.Item  >
        <Nav.Link id='linksNavBar' target="_blank" className='  p-2 d-flex ' href="https://github.com/jessicasilvagermano?tab=repositories " >Github<span className="material-symbols-outlined">arrow_outward</span>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item  >
        <Nav.Link id='linksNavBar' target="_blank" className='  p-2  mx-3 d-flex ' href="https://www.linkedin.com/in/jessica-silva-developer">Linkedin<span className=" material-symbols-outlined">arrow_outward</span>
        </Nav.Link>
      </Nav.Item>

</div>
  
  );
}

export default PillsExample;