import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TaskAdder from "./TaskAdder";
import TaskView from "./TaskView";

function App() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">react-todo</Navbar.Brand>
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
}

export default App;
