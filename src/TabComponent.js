import React, { useState } from 'react';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListGroup from 'react-bootstrap/ListGroup';

import Gallery from "react-photo-gallery";

function TabComponent(props) {
    const [activeTab, setActiveTab] = useState(0);

    const tabNames = props.tabNames;        
    const tabItems = tabNames.map((name, index) => {
        return (
            <Tab key={index} eventKey={index} title={name}>
                <TabContent 
                    type={props.type}
                    contentList={props.contentList[activeTab]}
                />
            </Tab>
        );
    });
    return (
        <div className={props.type + "-desktop"}>
            <Tabs 
                activeKey={activeTab}
                onSelect={(selectedTab) => setActiveTab(selectedTab)}
                className="justify-content-center"
            >
                {tabItems}
            </Tabs>
        </div>
    );
}

function TabContent(props) {
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

export default TabComponent;