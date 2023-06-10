import axios from "axios";
import React, { FormEvent, useContext } from "react";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { AuthContext } from "../../context/auth";

export default function LoginFormLayout() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { token, setToken } = useContext(AuthContext);
  const { expiredToken, setExpiredToken } = useContext(AuthContext);

  const loginHandler = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!username || !password) {
      return;
    }

    axios
      .post("http://localhost:8080/api/authenticate", {
        login: username,
        password: password,
      })
      .then((res: any) => {
        toast.success("Logado com sucesso!");
        setToken(res.data.token);
        setExpiredToken(res.data.expired_token);
      })
      .catch((err) => {
        toast.error("Usuário ou senha inválido");
      });
  };

  return (
    <div style={{ background: "radial-gradient(rgb(15, 102, 156), rgb(0, 3, 31))" }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
          <Col>
            <Card style={{ backgroundColor: "#e6f0ff" }}>
              <CardBody>
                <Form onSubmit={loginHandler}>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleLogin" className="mr-sm-2">
                      Usuário
                    </Label>
                    <Input
                      type="text"
                      name="login"
                      id="exampleLogin"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(ev) => setUsername(ev.currentTarget.value)}
                    />
                  </FormGroup>
                  <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">
                      Senha
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(ev) => setPassword(ev.currentTarget.value)}
                    />
                  </FormGroup>
                  <Button type="submit" color="primary" block active>
                    Login
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
