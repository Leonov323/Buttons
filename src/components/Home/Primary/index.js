import { Container, Row, Col, Image } from 'react-bootstrap';
import { Styled, Background } from './Primary.styled'
import Arm from '../../../img/arm-min3.png'
import OrderButton from './Button'
import { Link } from 'react-router-dom'

function Primary() {
    return (
        <Styled>
            <Container>
                <Row>
                    <Col lg={6} className="vh-100 d-flex flex-column align-items-center justify-content-center pt-5">
                        <section className="text-center">
                            <h1>The way to better your service</h1>
                            <p>Just scan QR code to call a waiter, no more angry waiting clients.</p>
                        </section>
                        <OrderButton />
                        <span className="link-to-login d-flex mt-3">
                            <p>Already registred?</p>
                            <Link to={`/sign-in`}>Login</Link>
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