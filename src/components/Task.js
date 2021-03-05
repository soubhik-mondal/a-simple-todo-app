import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function Task() {
  return (
    <ListGroup.Item>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Checkbox />
        </InputGroup.Prepend>
        <FormControl placeholder="This is the task you added" disabled />
        <InputGroup.Append>
          <Button id="task-done-btn" variant="success">
            Done
          </Button>
          <Button id="task-del-btn" variant="danger">
            Delete
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </ListGroup.Item>
  );
}

export default Task;
