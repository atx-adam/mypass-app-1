import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const ServiceProviderHomePage = () => {
    const [spOwners, setSpOwner] = useState([
        {
            name: "Owner1"
        },
        {
            name: "Owner2"
        },
        {
            name: "Owner3"
        },
        {
            name: "Owner4"
        },
    ]);
    return (
        <div>
                <Row>
                    <Col>
                        <h1>Mypass Service Provider Home Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Select Owner</h3>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        {spOwners.map(owner => (
                            <Row className="sp-owner-border">
                                <Col>
                                    <i className="fas fa-user-alt fa-3x"></i>
                                </Col>
                                <Col>
                                    <p>{owner.name}</p>
                                </Col>
                                <Col>
                                    <Link to="/service-provider-request"><button className="select-btn" type="button">Select</button></Link>
                                </Col>
                            </Row>
                            ))}
                    </Col>
                </Row>
        </div>
    )
}
