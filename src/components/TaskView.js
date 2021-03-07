import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BulkActions from "./BulkActions";
import TaskList from "./TaskList";
import { connect } from "react-redux";

function TaskView() {
  return (
    <>
      <Row>
        <Col />
        <Col style={{ textAlign: "center" }}>
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

export default connect()(TaskView);
