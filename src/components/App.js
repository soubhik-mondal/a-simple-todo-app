import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskAdder from "./TaskAdder";
import TaskView from "./TaskView";
import { connect } from "react-redux";

const App = () => {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#home" className="m-auto">
          react-todo
        </Navbar.Brand>
      </Navbar>
      <Container className="mt-4">
        <Row>
          <Col>
            <TaskAdder />
          </Col>
        </Row>
        <Row>
          <Col>
            <TaskView />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect()(App);
