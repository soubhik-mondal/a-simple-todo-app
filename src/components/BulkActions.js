import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function BulkActions() {
  return (
    <ButtonGroup>
      <Button id="bulk-select-btn">Select All</Button>
      <Button id="bulk-done-btn" variant="success">
        Bulk Done
      </Button>
      <Button id="bulk-del-btn" variant="danger">
        Bulk Delete
      </Button>
    </ButtonGroup>
  );
}

export default BulkActions;
