import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ServiceProviderOwnerDoc = ({spOwners}) => {
    const [spDocReq, setSpDocReq] = useState([
        {
            name: "Drivers License"
        },
        {
            name: "Voter Registration"
        },
        {
            name: "Income Verification"
        },
    ]);
    return (
        <div>
            <Row>
                <Col>
                    <h1>Mypass MAP Application</h1>
                </Col>
            </Row>
                <br />
            <Row>
                <Col> 
                    <Row>
                        <Col lg="3" className="icon-mr">
                            <p>Owner 1</p>
                            <i className="fas fa-user-alt fa-5x"></i>
                        </Col>
                        <Col lg="9">
                            <h4>Documents Required</h4>
                            {spDocReq.map(document => (
                            <Row className="sp-doc-border">
                                <Col lg="3">
                                    <i className="fas fa-user-alt fa-3x"></i>
                                </Col>
                                <Col lg="3">
                                    <p>{document.name}</p>
                                </Col>
                                <Col lg="3">
                                    <button className="request-btn" type="button">doc/url/download</button>
                                </Col>
                            </Row>
                            ))}
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </div>
    )
}
