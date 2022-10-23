import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  contact
}) => {
  return (
    <tr className="tr-edit">
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
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
        <Button type="submit">Save</Button>&nbsp;
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
