import React, { useState } from "react"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Row, Col, Form, Input } from 'reactstrap'
import "./index.css"
import logo from "../images/logo.png"
import Image from "../images/Image.png"
import Philippe from "../images/Philippe.jpg"

const Example = (props) => {

    const [modal, setModal] = useState(true);
    return (
        <div>
            <Row>
                <Col className="d-flex justify-content-start pl-5 pr-1 mr-4" xm="12" sm={{ size: 6, offset: 2 }}>
                    <img height="70px" src={logo} />
                </Col>
            </Row>
            <Row>
                <div className="App-body">
                    <Row>
                        <Col className="d-flex justify-content-center pt-3" sm={{ size: 4, order:2, offset: 3 }}>
                            <p><h4>Accelerating Application Refactoring <br></br>A Practical Guide</h4></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center pr-0" xm="6" sm={{ size: 6, offset: 2 }}>
                            <img src={Image} alt="Image" />
                        </Col>
                    </Row>
                </div>
                <div className="form">
                    <Form>
                        <Row>
                            <Col xm={12}> 
                                <h4>Get Your Free Guide</h4>
                            </Col>
                        </Row>
                        <Row form>
                            <Col className="mt-3" xm={12} md={6}>
                                <Input type="text" name="firstName" placeholder="First Name" />
                            </Col>
                            <Col className="mt-3" xm={12} md={6}>
                                <Input type="text" name="lastName" placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-3 pr-0" xm={12} md={12}>
                                <Input type="email" name="email" placeholder="Email" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-3 pr-0" md={12}>
                                <Input type="text" name="companyName" placeholder="Company Name" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-3 pr-0" md={12}>
                                <Input type="text" name="jobTitle" placeholder="Job Title" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-3 pr-0" md={12}>
                                <Input type="select" name="select" placeholder="- Please Select Country -">
                                    <option>- Please Select Country -</option>
                                    <option>United States</option>
                                    <option>Belgium</option>
                                    <option>Canada</option>
                                    <option>China</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>India</option>
                                </Input>
                            </Col>
                        </Row>  
                        <Row>
                            <Col className="mt-3 pr-0">
                                <h7>
                                    CAST needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.
                               </h7>
                             </Col>
                        </Row>
                        <Row>
                            <Col className="mt-4 ml-4 pl-5 pr-0"><Button color="primary">Download Practical Guide</Button></Col>
                        </Row>
                    </Form>
                </div>

            </Row>
            <Row>
                <Col className="px-5 mb-4 mt-5" sm="12" md={{ size: 6, offset: 2 }}>
                    <span><h5>This practical guide details how the essential activities of application refactoring can be significantly accelerated by applying software intelligence.
                     </h5></span>
                    <p>Learn about:</p>
                    <p><li><span>The five approaches to application modernization</span></li></p>
                    <p><li>The most common Analysis and Action motions used during application refactoring</li></p>
                    <p><li>Accelerating the common refactoring motions by applying software intelligence</li></p>
                    <p>This guide is the result of distilling the experience of helping businesses, governments, consultancies, and integrators modernize complex, 
                        custom-build software applications.</p>
                </Col>
            </Row>
            <Row>
                <Col className="pl-5" xs={{ size: 12, offset: 2}} sm={{ size: 6, offset: 4 }}> 
                  <h5>About the author:</h5>
                </Col>
               
            </Row>
            <Row>
                <Col xm={12} sm={{ size: 3 }}>
                    <Row>

                        <Col xs={3} sm={10} md={10}></Col>
                        <Col className="" xs={{ size: 7, offset:3}} sm={{size:2, offset:0}} md={2}>
                            <Row>
                                <img height="110px" src={Philippe} alt="Philippe" /> 
                            </Row>
                            <Row>
                                <img width="110px" src={logo} alt="Logo" />
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </Col>
                <Col className="d-flex justify-content-start mb-4 ml-4" sm={{ size: 4}}>
                Philippe Guerin is a Senior Software Architect at CAST and leads the team of CAST Solutions Architects. He is an expert in application modernization, 
                    architectural design, and software intelligence. Over the last 10 years Philippe has been helping businesses, government agencies, 
                    management consultancies, cloud vendors and systems integrators assess large IT organizations application landscapes and accelerate transformation efforts. 
                    You can contact Philippe directly at p.guerin@castsoftware.com.
                </Col>
            </Row>
            <Row className="App-footer">
                <Col className="d-flex justify-content-center" sm="5"><p>Copyright 2021 - CAST | All Rights Reserved</p></Col>
                
            </Row>
        </div>
    )
}

export default Example