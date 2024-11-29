import { Nav, Button, ListGroup, Form, FormControl, FormGroup, } from 'react-bootstrap'
import Image from '../../Netflix-assets/assets/netflix_logo.png'
import Image2 from '../../Netflix-assets/assets/avatar.png'
const Topbar = () => {
    return (
        <>
    <Nav className="navbar container-fluid d-flex justify-content-between bg-black navbar-expand-lg">
      <div className="w-50 d-flex">
        <img src={Image} width={"120px"} height={"50px"} style={{marginLeft:"5%"}} alt="Logo Netflix" />
        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ListGroup className="navbar-nav">
            <li ><a className="nav-link text-white active" href="#">Home</a></li>
            <li ><a className="nav-link text-secondary" href="#">Tv Shows</a></li>
            <li ><a className="nav-link text-secondary" href="#">Movies</a></li>
            <li ><a className="nav-link text-secondary" href="#">Recently Added</a></li>
            <li ><a className="nav-link text-secondary" href="#">My List</a></li>
          </ListGroup>
        </div>
      </div>
      <div style={{marginRight : "100px"}} className='w-25'>
        <Form>
            <FormGroup className='d-flex align-items-center'>
            <i style={{color: "white", fontSize: "1rem"}} className="bi bi-search p-0 me-2"></i>
            <FormControl style={{width: "150px"}} className=" ps-2 bg-black form-outline-secondary m-0 p-0 text-white" type="search" placeholder="KIDS" aria-label="Search"/>
            <i style={{color: "white", fontSize: "1rem"}} className="bi bi-bell p-0 mx-2"></i>
        <div className="btn-group ms-2">
            <Button type="button" className="btn btn-dark p-0"><img style={{width: "50px", height: "50px"}} src={Image2} alt=""/></Button>
            <Button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="visually-hidden">Toggle Dropdown</span>
           </Button>
        </div>
          <ListGroup className=" d-none dropdown-menu">
            <li><a className="dropdown-item" href="profile.html">Profile</a></li>
            <li><a className="dropdown-item" href="settings.html">Settings</a></li>
            <li><a className="dropdown-item" href="home.html">Home</a></li>
          </ListGroup>
            </FormGroup>
        </Form>
      </div>
    </Nav>
        </>
    );
};
export default Topbar;