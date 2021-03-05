import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function TaskAdder() {
  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="What do you wanna get done today?" />
      <InputGroup.Append>
        <Button id="task-add-btn">Add</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default TaskAdder;
