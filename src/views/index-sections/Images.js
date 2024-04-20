import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import CarouselSection from "./Carousel";

// core components

function Images() {
  return (
    <>
      <div id="backshots_declared" className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="">
                <div style={{ justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                  <h1 class="home-title">
                    <span>Esta ha sido mi experiencia</span>
                    <span>en unas pocas imagenes:</span>
                  </h1>
                </div>
                {/* <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img> */}
                <CarouselSection/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
