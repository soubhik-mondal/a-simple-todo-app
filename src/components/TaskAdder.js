import { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { addTodo } from "./../store/actions";
import { connect } from "react-redux";

class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  setText(text) {
    this.setState({ text });
  }

  buttonClickHandler() {
    if (!this.state.text) return;
    this.props.addTodo(this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="What d'you wanna get done today?"
          onChange={(e) => this.setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && this.buttonClickHandler()}
          value={this.state.text}
        />
        <InputGroup.Append>
          <Button id="task-add-btn" onClick={() => this.buttonClickHandler()}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default connect(null, { addTodo })(TaskAdder);
