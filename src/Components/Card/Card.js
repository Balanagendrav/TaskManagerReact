import React, { useState } from "react";
import "./Card.css";
import UpdateForm from "../Modal/UpdateForm";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const handleDelete = () => {
    deleteTask(index);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (taskObj) => {
    updateListArray(taskObj, index);
  };

  return (
    <div
      className="card text-white bg-secondary m-2"
      style={{ minWidth: "21rem" }}
    >
      <div className="card-header bg-transparent border-grey d-flex justify-content-between">
        <p>Assigned to {taskObj.assignedTo}</p>
        <p class="card-text d-flex flex-column p-0 m-0 text-center">
          <small class="staus-block">
            <span>Status</span>
            <p className="p-0 m-0">{taskObj.taskStatus}</p>
          </small>
        </p>
      </div>
      <div className="card-body text-white">
        <h5 className="card-title">{taskObj.taskName}</h5>
        <p className="card-text">
          <small>{taskObj.description}</small>
        </p>
      </div>
      <div className="card-footer bg-transparent border-grey d-flex flex-row justify-content-between">
        <div>
          <i
            className="bi bi-pencil-square btn btn-transparent btn-lg p-0 mr-1 edit-delete-btn"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Update"
            onClick={() => setModal(true)}
          ></i>
          <i
            className="bi bi-trash btn btn-transparent btn-lg p-0 m-0 edit-delete-btn"
            type="button"
            data-toggle="tooltip"
            data-placement="top"
            title="Delete"
            onClick={handleDelete}
          ></i>
        </div>
        <div>
          <p class="card-text  m-0">
            <small class="text-grey">
              <span className="mr-5">Deadline</span>: {taskObj.deadline}
            </small>
          </p>
          <p class="card-text m-0">
            <small class="text-grey">
              <span className="mr-3">Completed On</span>: {taskObj.completedOn}
            </small>
          </p>
        </div>
      </div>
      <UpdateForm
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
