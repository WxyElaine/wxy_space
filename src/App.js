import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Emoji from 'a11y-react-emoji';

import TabComponent from './TabComponent';
import AccordionComponent from './AccordionComponent';
import './App.css';

import {
  Education, Skills, RecentAppointments, ResearchExperience, Publications, Awards,
  Presentations, Projects, Activities} from './cv';

import {
  GatesCenter, Xian, Xinyi, XinyiAndCamera, PhotographyItems, PapercuttingItems, PaintingItems
} from './pics';

import logoWhite from './logos/logo-white.png';
import githubLogo from './logos/GitHub-Mark-120px-plus.png';
import linkedInLogo from './logos/LI-In-Bug.png';

function Navigation() {
  return (
    <Navbar variant="dark" expand="md" fixed="top">
      <Navbar.Brand href="#intro">
      <img
        src={logoWhite}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Xinyi's logo"
      />{' '}
        Xinyi&#39;s Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#cv">CV</Nav.Link>
          <Nav.Link href="#artwork">ARTWORK</Nav.Link>
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
  const names = [
    <CollapsibleTabName name="Education" symbols={["🎓"]} labels={["graducation cap"]} />,
    <CollapsibleTabName name="Skills" symbols={["💻"]} labels={["laptop"]} />,
    <CollapsibleTabName name="Appointments" symbols={["👩🏻‍💻"]} labels={["women technologist"]} />,
    <CollapsibleTabName name="Research" symbols={["🔍", "🤖"]} labels={["magnifying glass", "robot"]} />,
    <CollapsibleTabName name="Publications" symbols={["📃"]} labels={["paper"]} />,
    <CollapsibleTabName name="Awards" symbols={["🏅"]} labels={["metal"]} />,
    <CollapsibleTabName name="Presentations" symbols={["💬"]} labels={["speech bubble"]} />,
    <CollapsibleTabName name="Projects" symbols={["🖥️", "🖱️", "⌨️"]} labels={["desktop computer", "mouse", "keyboard"]} />,
    <CollapsibleTabName name="Activities" symbols={["🎗️", "🇨🇳"]} labels={["gold ribbon", "flag of china"]} />
  ];
  const contentList = [
    Education, Skills, RecentAppointments, ResearchExperience,
    Publications, Awards, Presentations, Projects, Activities
  ];
  return (
    <Jumbotron id="cv">
      <h2>CV</h2>
      <TabComponent type="cv" tabNames={names} contentList={contentList} />
      <AccordionComponent type="cv" cardNames={names} contentList={contentList} />
    </Jumbotron>
  )
}

function Artwork() {
  const names = [
    <CollapsibleTabName name="Photography" symbols={["📷"]} labels={["camera"]} />,
    <CollapsibleTabName name="Papercutting" symbols={["✂️"]} labels={["scissor"]} />,
    <CollapsibleTabName name="Painting" symbols={["🎨"]} labels={["palette"]} />
  ];
  const contentList = [PhotographyItems, PapercuttingItems, PaintingItems];
  return (
    <Jumbotron id="artwork" onContextMenu={(e) => e.preventDefault()}>
      <h2>ARTWORK</h2>
      <TabComponent type="artwork" tabNames={names} contentList={contentList} />
      <p id="copyright">
        Copyright &copy; 2015-<span>{(new Date()).getFullYear()}</span>. Xinyi Wang. All Rights Reserved.
      </p>
    </Jumbotron>
  );
}

function CollapsibleTabName(props) {
  const emojis = props.symbols.map((symbol, index) => {
    return (
      <Emoji key={index} symbol={symbol} label={props.labels[index]} />
    );
  });
  return (
    <span>
      <span className="collapsible-title">{props.name} </span>
      {emojis}
    </span>
  );
}

function Contact() {
  return (
    <Jumbotron id="contact">
      <Container>
        <h2>CONTACT</h2>
        <p>Email: wxyelaine98@gmail.com</p>
        <Row id="contactLogoContainer">
          <Col><a href="https://github.com/WxyElaine"><Image className="contactLogo" src={githubLogo} fluid/></a></Col>
          <Col><a href="https://www.linkedin.com/in/xinyi-wang-148919119/"><Image className="contactLogo" src={linkedInLogo} fluid/></a></Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

function App() {
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

export default App;
