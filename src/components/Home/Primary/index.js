import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Styled, Background } from './Primary.styled';
import Arm from '../../../img/arm-min3.png';
import OrderButton from './Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Primary() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Styled>
            <Container>
                <Row>
                    <Col lg={6} className="p-1 vh-100 d-flex flex-column align-items-center justify-content-center">
                        <section className="text-center">
                            <h1>The way to better your service</h1>
                            <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
                        </section>
                        <OrderButton onClick={() => setModalShow(true)} />
                        <span className="link-to-login d-flex mt-3">
                            <p>Already registred?</p>
                            <Link to={`/sign-in`}>Sign in</Link>
                        </span>
                    </Col>
                    <Col md={6}>
                        <Background><Image src={Arm} width="100%" /></Background>
                    </Col>
                </Row>
            </Container>
        </Styled>
    );
}



export default Primary;