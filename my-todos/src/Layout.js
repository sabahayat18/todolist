import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Layout = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col className="mt-5">
                        <div className="bg-light">
                            <nav>
                                <ul>
                                    <div style={{padding:'20px'}}>
                                        <li>
                                            <Link to="/" style={{textDecoration:'none'}}>
                                                <h3 style={{fontFamily:'sans-serif', fontWeight:300, fontSize:'30px'}}>log-In</h3>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/todolistpage" style={{textDecoration:'none'}}>
                                                <h3 style={{fontFamily:'sans-serif', fontWeight:300, fontSize:'30px'}}>To-Do List</h3>
                                            </Link >
                                        </li>

                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </>
    )
};

export default Layout;