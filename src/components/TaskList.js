import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";

function TaskList() {
  return (
    <ListGroup className="mb-3 mt-3">
      <Task />
      <Task />
      <Task />
    </ListGroup>
  );
}

export default TaskList;
