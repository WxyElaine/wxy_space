import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Gallery from "react-photo-gallery";

import './App.css';

import {
  GatesCenter, Xian, Xinyi, XinyiAndCamera,
  PapercuttingItems, PaintingItems, PhotographyItems
} from './pics';
import githubLogo from './logos/GitHub-Mark-120px-plus.png';
import linkedInLogo from './logos/LI-In-Bug.png'

function Navigation() {
  return (
    <Navbar variant="dark" expand="md" fixed="top">
      <Navbar.Brand href="#intro">Xinyi&#39;s Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#cv">CV</Nav.Link>
          <NavDropdown title="ARTWORK" id="basic-nav-dropdown">
            <NavDropdown.Item href="#photography">Photography</NavDropdown.Item>
            <NavDropdown.Item href="#papercutting">Paper-cutting & Paper-carving</NavDropdown.Item>
            <NavDropdown.Item href="#painting">Painting</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Intro() {
  const hometownImgRef = <span>Background image painted by Xinyi Wang.</span>;
  const eduImgLink = <a href="https://news.cs.washington.edu/2019/03/01/allen-school-celebrates-dedication-of-the-new-bill-melinda-gates-center-for-computer-science-engineering/">Website of Paul G. Allen School of Computer Science and Engineering</a>;
  const eduImgRef = <span>Photo credit: Mark Stone/University of Washington.<br/>Source: {eduImgLink}</span>;

  return(
    <Jumbotron fluid id="intro">
      <Container>
        <Row xs={1} sm={1} md={2}>
          <IntroCard
            id="xinyiCardMask"
            imgSrc={Xinyi}
            title={<span id="name">Xinyi Wang<br/><span id="chineseName">(王心怡)</span></span>}
          />
          <IntroCard
            imgSrc={Xian}
            title="Hometown"
            text="Come from Xi&#39;an, Shaanxi, China."
            imgRef={hometownImgRef}
            btnHref="https://en.wikipedia.org/wiki/Xi%27an"
            btnText="Know more about Xi'an"
          />
          <IntroCard
            id="eduCardMask"
            imgSrc={GatesCenter}
            title="Education"
            text="Graduated from the Paul G. Allen School of Computer Science and Engineering at the University of Washington with a Bachelor's degree in Computer Science."
            imgRef={eduImgRef}
            btnHref="https://www.cs.washington.edu/"
            btnText="Know more about UW CSE"
          />
          <IntroCard
            imgSrc={XinyiAndCamera}
            title="Interests"
            text="Love photography, paper-cutting and paper-carving, painting, star-gazing and traveling."
            btnHref="#artwork"
            btnText="See my artwork"
          />
        </Row>
      </Container>
    </Jumbotron>
  );
}

function IntroCard(props) {
  return (
    <Col>
      <Card className="introCard text-light">
        <Card.Img src={props.imgSrc} alt={props.title} />
        <Card.ImgOverlay className="introCardMask" id={props.id}>
          <Card.Title className="font-weight-bold">{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text className="imgRef">{props.imgRef}</Card.Text>
          {props.btnHref ? <Button variant="purple" href={props.btnHref}>{props.btnText}</Button> : null}
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
}

function CV() {
  return (
    <Jumbotron id="cv">
      <Container>
        <h2>CV</h2>
      </Container>
    </Jumbotron>
  )
}

class Artwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArtwork: 0  // 0: photography, 1: papercutting, 2: painting
    };
    this.handleArtworkClick = this.handleArtworkClick.bind(this);
    this.getArtworkButtonClassName = this.getArtworkButtonClassName.bind(this);
  }

  handleArtworkClick(index) {
    this.setState({ selectedArtwork: index });
  }

  getArtworkButtonClassName(index) {
    if (this.state.selectedArtwork === index) {
      return 'navHighlight';
    } else {
      return '';
    }
  }

  render() {
    return (
      <Jumbotron id="artwork" onContextMenu={(e) => e.preventDefault()} >
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <ArtworkButtons
            artworkList={['Photography', 'Papercutting', 'Painting']}
            onClick={this.handleArtworkClick}
            getClassName={this.getArtworkButtonClassName}
          />
        </Nav>
        <ArtworkComponent
          selectedArtwork={this.state.selectedArtwork}
        />
        <p id="copyright">
          Copyright &copy; 2015-<span>{(new Date()).getFullYear()}</span>. Xinyi Wang. All Rights Reserved.
        </p>
      </Jumbotron>
    );
  }
}

function ArtworkButtons(props) {
  const artworkList = props.artworkList;
  return (artworkList.map((artworkName, index) => {
    return (
      <Nav.Item key={index}>
        <Nav.Link
          onClick={() => props.onClick(index)}
          className={props.getClassName(index)}
        >
          {artworkName}
        </Nav.Link>
      </Nav.Item>
    );
  }));
}

function ArtworkComponent(props) {
  switch (props.selectedArtwork) {
    case 0:
      return <Gallery photos={PhotographyItems} id="photography"/>;
    case 1:
      return <Gallery photos={PapercuttingItems} id="papercutting"/>;
    default:
      return <Gallery photos={PaintingItems} id="painting"/>;
  }
}

function Contact() {
  return (
    <Jumbotron id="contact">
      <Container>
        <h2>Contact</h2>
        <p>Email: wxyelaine98@gmail.com</p>
        <Row id="contactLogoContainer">
          <Col><a href="https://github.com/WxyElaine"><Image className="contactLogo" src={githubLogo} fluid/></a></Col>
          <Col><a href="https://www.linkedin.com/in/xinyi-wang-148919119/"><Image className="contactLogo" src={linkedInLogo} fluid/></a></Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="App bg-light">
        <Navigation />
        <Intro />
        <CV />
        <Artwork />
        <Contact />
      </div>
    );
  }
}

export default App;
