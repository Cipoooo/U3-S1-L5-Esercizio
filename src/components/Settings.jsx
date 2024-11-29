import { Form, Button , ListGroup ,FormGroup, FormControl,Nav, Container, Row, Col } from "react-bootstrap";
import Image from '../../Netflix-assets/assets/netflix_logo.png'
import Image2 from '../../Netflix-assets/assets/avatar.png'
import Image3 from '../../Netflix-assets/assets/media1.jpg'


const Settings = () =>{
    return(
<div className="bg-light">
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
            <FormControl style={{width: "130px"}} className=" bg-black form-outline-secondary m-0 p-0 text-white" type="search" placeholder="KIDS" aria-label="Search"/>
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

    <header>
        <Container className="container-sm d-flex justify-content-start flex-column">
            <h1 className="text-black mt-3">Account</h1>
            <hr style={{maxWidth: "1226px"}}className="bg-dark"/>
        </Container>
    </header>

      <div className="container-sm">
        <Row>
        <div className="d-flex justify-content-between">
            <Col className="col-lg-4  me-3 d-flex flex-column">
                <p className="h3 text-secondary">MEMBERSHIP & BILLING</p>
                <Button style={{maxWidth: "70%"}} className="btn px-3 mb-5 bg-secondary text-black">Cancel Membership</Button>
            </Col>
            <Col className="col-lg-8 d-flex flex-column">
                <div className="row justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <p><strong>student@strive.school</strong></p>
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Change e-mail account</a>
                        </Col>
                    </div>
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <p className="text-secondary">Password *******</p>
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Change password</a>
                        </Col>
                    </div>
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <p className="text-secondary">Phone number: 36738 2637 2638</p>
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Change number</a>
                        </Col>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <Col className="col-8 col-lg-8">
                            <div className="d-flex">
                            <i className="bi bi-paypal pe-2">Paypal</i>
                            <p><strong>adminstrive@.school</strong></p>
                            </div>
                        </Col>
                        <div className="col-4 col-lg-4">
                            <a href="">Update payment info</a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Col className="col-lg-8">
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Billing details</a>
                        </Col>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <Col className="col-lg-8">
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Redeem gift card or promo code</a>
                        </Col>
                    </div>
                    <div className="d-flex">
                        <Col className="col-lg-8">
                        </Col>
                        <Col className="col-lg-4">
                            <a href="">Where to buy gift cards</a>
                        </Col>
                    </div>
                </div> 
            </Col>
        <hr/>
        </div>
        <Row className="align-items-baseline">
            <div className="col-lg-4 d-flex flex-column">
                <p className="h2 text-secondary">PLAN DETAILS</p>
            </div>
            <Col className="col-lg-8 d-flex flex-column">
                <Row className="justify-content-between">
                    <div className="d-flex align-items-center">
                        <Col className="col-lg-8 flex-row-reverses">
                            <div className="d-flex align-items-center">
                                <i style={{fontSize: "2rem"}} className="bi bi-badge-4k-fill pe-2"></i>
                                <p className="m-0"><strong>Premium</strong></p>
                            </div>
                        </Col>
                        <Col className="col-lg-4">
                            <a className="ps-3" href="">Change plan</a>
                        </Col>
                    </div>
                </Row>
            </Col> 
        </Row>
        <hr/>
        <Row >
            <Col className="col-lg-4 d-flex flex-column">
                <p className="h2 text-secondary">SETTINGS</p>
            </Col>
            <Col className="col-lg-8 d-flex flex-column">
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">Parental controls</a>
                        </Col>
                        
                    </div>
                </Row>
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">test participation</a>
                        </Col>    
                    </div>
                </Row>
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">Manage download devices</a>
                        </Col>
                        <Col className="col-lg-4">
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">Activate a device</a>
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">Recent device streaming activities</a>
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-between">
                    <div className="d-flex">
                        <Col className="col-lg-8">
                            <a href="">Sign out of all devices</a>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className="col-lg-4 d-flex flex-column">
                <p className="h2 text-secondary pb-3">MY PROFILE</p>
            </Col>
            <Col className="col-lg-8 d-flex flex-column">
                <Row className="justify-content-between">
                    <div className="d-flex align-items-center">
                        <Col className="col-lg-8">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src={Image3} alt="avatar Netflix" width="50" height="50px"/>
                                <p className="m-0 ps-2"><strong>Strive student</strong></p>
                            </div>
                        </Col>
                        <Col className="col-lg-4">
                            <a className="ps-3" href="">Manage profiles</a>
                        </Col>
                    </div>
                </Row>
            </Col> 
        </Row>
        <Row className="mt-3">
            <Col className="col-lg-4 d-flex flex-column">
            </Col>
            <Col className="col-lg-8 d-flex flex-column">
                <Row className="gy-2 justify-content-between">
                    <div className="d-flex">
                        <Col className="col-6 col-lg-4">
                           <a href="">Language</a>
                        </Col>
                        <Col className="col-6 col-lg-4">
                            <a href="">Viewing activity</a>
                        </Col>
                         <Col className="col-6 col-lg-4">
                           <a href=""></a>
                        </Col>
                    </div>
                    <div className="d-flex">
                        <Col className="col-6 col-lg-4">
                           <a href="">Playback settings</a>
                        </Col>
                        <Col className="col-6 col-lg-4">
                            <a href="">Ratings</a>
                        </Col>
                         <Col className="col-0 col-lg-4">
                           <a href=""></a>
                        </Col>
                    </div>
                    <div className="d-flex">
                        <Col className="col-6col-lg-4">
                           <a href="">Subtitle appearance</a>
                        </Col>
                        <Col className="col-0 col-lg-4">
                            <a href=""></a>
                        </Col>
                         <Col className="col-0 col-lg-4">
                           <a href=""></a>
                        </Col>
                    </div>
                </Row>
            </Col>
        </Row>
    </Row>
    <Container/>
</div>
</div>

    );
};
export default Settings;