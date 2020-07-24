import React from 'react';

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import Gallery from "react-photo-gallery";

function AccordionComponent(props) {
    const cardNames = props.cardNames;
    const cardItems = cardNames.map((name, index) => {
        return (
            <Card key={index}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>{name}</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>
                        <CardContent type={props.type} contentList={props.contentList[index]} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    });
    return (
        <Accordion className="mobile" defaultActiveKey="0">
            {cardItems}
        </Accordion>
    );
}

function CardContent(props) {
    if (props.type === 'cv') {
        const cvItems = props.contentList.map((contents, index) => {
            const item = contents.map((content, index) => {
                return <div key={index}>{content}</div>;
            });
            return (<ListGroup.Item key={index}>{item}</ListGroup.Item>);
        });
        return (
            <ListGroup variant="flush">{cvItems}</ListGroup>
        );
    } else {  // 'artwork'
        return <Gallery photos={props.contentList} />;
    }
}

export default AccordionComponent;