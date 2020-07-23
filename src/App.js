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
import './App.css';

import {
  Education, Skills, RecentAppointments, ResearchExperience, Publications, Presentations,
  Awards, Projects, Activities} from './cv';

import {
  GatesCenter, Xian, Xinyi, XinyiAndCamera, PhotographyItems, PapercuttingItems, PaintingItems
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
  return (
    <Jumbotron id="cv">
      <h2>CV</h2>
      <TabComponent
        type='cv'
        tabNames={[
          <span>Education <Emoji symbol="&#x1F393;" label="graducation cap" /></span>,
          <span>Skills <Emoji symbol="&#x1F4BB;" label="laptop" /></span>,
          <span>Appointments <Emoji symbol="&#x1F469;&#x1F3FB;&#x200D;&#x1F4BB;" label="women technologist" /></span>,
          <span>Research <Emoji symbol="&#x1F50D;" label="magnifying glass" /> <Emoji symbol="&#x1F916;" label="robot" /></span>,
          <span>Publications <Emoji symbol="&#x1F4C3;" label="paper" /></span>,
          <span>Presentations <Emoji symbol="&#x1F4AC;" label="speech bubble" /></span>,
          <span>Awards <Emoji symbol="&#x1F3C5;" label="metal" /></span>,
          <span>Projects <Emoji symbol="&#x1F5A5;" label="desktop computer" /> <Emoji symbol="&#x1F5B1;&#xFE0F;" label="mouse" /> <Emoji symbol="&#x2328;&#xFE0F;" label="keyboard" /></span>,
          <span>Activities <Emoji symbol="&#x1F397;" label="gold ribbon" /> <Emoji symbol="&#x1F1E8;&#x1F1F3;" label="flag of china" /></span>
        ]}
        contentList={[
          [Education],
          [Skills],
          [RecentAppointments],
          ResearchExperience,
          Publications,
          [Presentations],
          [Awards],
          Projects,
          Activities
        ]}
      />
    </Jumbotron>
  )
}

function Artwork() {
  return (
    <Jumbotron id="artwork" onContextMenu={(e) => e.preventDefault()}>
      <h2>ARTWORK</h2>
      <TabComponent
        type='artwork'
        tabNames={[
          <span>Photography <Emoji symbol="&#x1F4F7;" label="camera" /></span>,
          <span>Papercutting <Emoji symbol="&#x2702;&#xFE0F;" label="scissor" /></span>,
          <span>Painting <Emoji symbol="&#x1F3A8;" label="palette" /></span>
        ]}
        contentList={[PhotographyItems, PapercuttingItems, PaintingItems]}
      />
      <p id="copyright">
        Copyright &copy; 2015-<span>{(new Date()).getFullYear()}</span>. Xinyi Wang. All Rights Reserved.
      </p>
    </Jumbotron>
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
