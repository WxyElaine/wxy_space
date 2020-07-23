import React, { Component } from 'react';

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ListGroup from 'react-bootstrap/ListGroup';

import Gallery from "react-photo-gallery";

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0  // 0: photography, 1: papercutting, 2: painting
        };
        this.handleSelection = this.handleSelection.bind(this);
    }
    
    handleSelection(selectedTab) {
        this.setState({ activeTab: selectedTab });
    }

    render() {
        const tabNames = this.props.tabNames;        
        const tabItems = tabNames.map((name, index) => {
            return (
                <Tab key={index} eventKey={index} title={name}>
                    <TabContent 
                        type={this.props.type}
                        contentList={this.props.contentList[this.state.activeTab]}
                    />
                </Tab>
            );
        });
        return (
            <div className={this.props.type + "-desktop"}>
                <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelection} className="justify-content-center">
                    {tabItems}
                </Tabs>
            </div>
        );
    }
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