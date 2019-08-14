import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const Home = () => {
  return (
    <div className="div-main">
      <Container className="main-container">
        <Row>
          <Col xs="6" sm="3" />
          <Col xs="6" sm="6" className="col-center">
            <div>
              <h3 className="home-title">어플리케이션을 골라 주세요.</h3>
            </div>
            <div className="div-btn-main-container">
              <Link className="link link-main-container" to="/users">
                <Button className="btn-main-container" color="primary">
                  투두
                </Button>
              </Link>
              <Link className="link link-main-container" to="/boards">
                <Button className="btn-main-container" color="success">
                  게시판
                </Button>
              </Link>
            </div>
          </Col>
          <Col sm="3" />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
