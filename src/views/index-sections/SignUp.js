import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

// core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
       
          minHeight: "700px",
          marginTop: 300
        }}
      >
        <Container className="justify-content-center" style={{}}>
      
          {/* <Row className="justify-content-center">
            <Col>
              <img style={{width:200, height: 200}} src={require("assets/img/csharp.png")}/>
            </Col>
            
            <Col>
              <img style={{width:200, height: 200}} src={require("assets/img/csharp.png")}/>
            </Col>

            <Col>
              <img style={{width:200, height: 200}} src={require("assets/img/csharp.png")}/>
            </Col>
          </Row>

          <Row style={{alignContent: "center"}} className="justify-content-center">
            <Col>
              <img style={{width:200, height: 200}} src={require("assets/img/csharp.png")}/>
            </Col>
            
            <Col>
              <img style={{width:200, height: 200}} src={require("assets/img/csharp.png")}/>
            </Col>
          </Row>
           */}
        </Container>
      </div>
    </>
  );
}

export default SignUp;
