import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Card, Button, Container, Row, Col } from "reactstrap";

export default function HomeLayout() {
  const { logout } = useContext(AuthContext);
  return (
    <div
      style={{
        background: "linear-gradient(37deg, rgb(26, 150, 19), rgb(4, 13, 95))",
        height: "100vh",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
        className="position-relative"
      >
        <Button
          size="sm"
          onClick={() => logout()}
          className="position-absolute top-0 end-0 m-5"
        >
          Logout
        </Button>
        <Row style={{color:"white", fontWeight: "bold", fontSize: '45px'}}>
          <Col className="text-center">
            <p>Logado com sucesso!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
