import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { selectAll, bulkDelete, bulkDone } from "./../store/actions";
import { connect } from "react-redux";

const BulkActions = ({ isSelectAll, selectAll, bulkDone, bulkDelete }) => {
  return (
    <ButtonGroup>
      <Button id="bulk-select-btn" onClick={(e) => selectAll()}>
        {isSelectAll ? "Deselect All" : "Select All"}
      </Button>
      <Button id="bulk-done-btn" variant="success" onClick={(e) => bulkDone()}>
        Bulk Done
      </Button>
      <Button id="bulk-del-btn" variant="danger" onClick={(e) => bulkDelete()}>
        Bulk Delete
      </Button>
    </ButtonGroup>
  );
};

const mapStateToProps = (state) => {
  return {
    isSelectAll: state.todos.isSelectAll,
  };
};

export default connect(mapStateToProps, { selectAll, bulkDelete, bulkDone })(
  BulkActions
);
