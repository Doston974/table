import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ReadOnlyRow = ({
  contact,
  index,
  handleEditClick,
  handleDeleteClick,
}) => {
  const [yes, setYes] = useState(false);
  const handley = () => {
    if (yes == true) {
      setYes(false);
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td className="td-jobs">
      
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={contact.id}
          />
          <label className="form-check-label" for="flexRadioDefault1">
          &nbsp;Ha
          </label>
          &nbsp;
          &nbsp;
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={contact.id}
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
          &nbsp; Yo'q
          </label>
       
      </td>
      <td>
        <Button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        &nbsp;
        <Button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
