import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";

const TaskList = ({ tasks }) => {
  return tasks.length ? (
    <ListGroup className="mb-3 mt-3">
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ListGroup>
  ) : (
    <Alert variant="light" style={{ textAlign: "center", fontSize: 48 }}>
      Add something!
    </Alert>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: [
      ...state.todos.todosList.map((e) => {
        return {
          ...e,
        };
      }),
    ],
  };
};

export default connect(mapStateToProps)(TaskList);
