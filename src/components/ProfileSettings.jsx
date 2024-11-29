import { Form, ListGroup, ListGroupItem, Button, Nav, Container, ButtonGroup, FormCheck } from 'react-bootstrap';
import Image from '../../Netflix-assets/assets/netflix_logo.png';
import Image2 from '../../Netflix-assets/assets/avatar.png'

const ProfileSettings = () => {
  return (
    <>
      <Nav className="navbar bg-black">
        <Container className="container ms-1">
          <a className="navbar-brand" href="home.html">
            <img src={Image} alt="Netflix logo" width="120" height="50" />
          </a>
        </Container>
      </Nav>

      
      <Container className="container-sm bg-black justify-content-center">
        <Container style={{ width: "60%" }} className="container">
          <h1 className="container pt-3 mb-0 d-flex justify-content-start text-white">Edit Profile</h1>
          <hr />
          <Container className="container mt-3 d-flex flex-row-reverse">
            <Container className="container d-flex flex-column ms-3">
              <p className="h4 text-bg-secondary p-2">Strive Student</p>
              <br />
              <p
                className="h4 text-bg-black text-secondary pb-1"
                style={{ color: "rgba(211, 211, 211, 0.587)" }}
              >
                Language:
              </p>
              <div className="dropdown">
                <Button
                  style={{ color: "white" }}
                  className="btn bg-black btn-outline-secondary rounded-0 ps-2 pe- dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </Button>
                <ListGroup className="dropdown-menu d-none">
                  <ListGroupItem>
                    <a className="dropdown-item" href="#">
                      Italian
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </div>

              <hr />
              <p className="h4 text-secondary">Maturity settings:</p>
              <p className="h6 text-bg-secondary text-light p-2 mt-3">
                All Maturity Settings
              </p>
              <p className="text-light mt-3">
                Show titles of <strong>all maturity ratings</strong> for this profile
              </p>
              <Button className="btn btn-outline-secondary bg-dark btn-text-light mt-2">EDIT</Button>
              <hr />
              <p className="h3 text-secondary">Autoplay controls</p>
              <Form className="d-flex align-items-center mb-2">
                <FormCheck type="checkbox" width="50" height="50" />
                <p className="text-light mb-0 ps-2">
                  Autoplay next episode in a series on all devices
                </p>
              </Form>
              <Form className="d-flex align-items-center">
                <FormCheck type="checkbox" name="Autoplay next episode in a series on all devices" id="" />
                <p className="text-light m-0 ps-2">
                  Autoplay previews while browsing on devices
                </p>
              </Form>
            </Container>
            <Container className="container">
              <div style={{ width: "100%", height: "100%" }}>
                <img src={Image2} alt="Profile Avatar" width="100%" height="auto" />
              </div>
            </Container>
          </Container>
        </Container>
        <Container className="container-sm d-flex justify-content-center mt-5">
          <ButtonGroup style={{ width: "60%" }} className="d-flex justify-content-center">
            <Button className=" bg-light-subtle text-secondary outline-dark rounded-0 mx-2">SAVE</Button>
            <Button className=" btn-outline-secondary bg-black rounded-0 mx-2">CANCEL</Button>
            <Button className=" btn-outline-secondary bg-black rounded-0 mx-2 px4">DELETE PROFILE</Button>
          </ButtonGroup>
        </Container>
      </Container>
    </>
  );
};

export default ProfileSettings;
