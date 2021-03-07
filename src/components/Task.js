import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { deleteTodo, doneTodo, selectTodo } from "./../store/actions";
import { connect } from "react-redux";

const Task = ({ task, deleteTodo, doneTodo, selectTodo }) => {
  return (
    <ListGroup.Item>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Checkbox
            checked={task.isSelected}
            onChange={() => selectTodo(task.id)}
          />
        </InputGroup.Prepend>
        <FormControl
          placeholder={task.value}
          style={{
            textDecoration: task.isDone ? "line-through" : "inherit",
            fontStyle: task.isDone ? "italic" : "inherit",
          }}
          disabled
        />
        <InputGroup.Append>
          <Button
            id="task-done-btn"
            variant="success"
            onClick={() => doneTodo(task.id)}
          >
            {task.isDone ? "Not Done" : "Done"}
          </Button>
          <Button
            id="task-del-btn"
            variant="danger"
            onClick={() => deleteTodo(task.id)}
          >
            Delete
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </ListGroup.Item>
  );
};

export default connect(null, {
  deleteTodo,
  doneTodo,
  selectTodo,
})(Task);
