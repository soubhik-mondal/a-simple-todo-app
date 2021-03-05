import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulkActions from "./BulkActions";
import TaskList from "./TaskList";

function TaskView() {
  return (
    <>
      <Row>
        <Col />
        <Col>
          <BulkActions />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </>
  );
}

export default TaskView;
