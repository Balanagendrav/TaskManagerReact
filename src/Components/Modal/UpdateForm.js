import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const UpdateForm = ({ modal, toggle, cancel, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [completedOn, setCompletedon] = useState("");
  const [assignedTo, setassignedTo] = useState("");
  const [taskStatus, setTaskstatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "deadline") {
      setDeadline(value);
    } else if (name === "completedOn") {
      setCompletedon(value);
    } else if (name === "assignedTo") {
      setassignedTo(value);
    } else {
      setTaskstatus(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.taskName);
    setDescription(taskObj.description);
    setDeadline(taskObj.deadline);
    setassignedTo(taskObj.setassignedTo);
    setCompletedon(taskObj.completedOn);
    setTaskstatus(taskObj.taskStatus);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["taskName"] = taskName;
    tempObj["description"] = description;
    tempObj["deadline"] = deadline;
    tempObj["assignedTo"] = assignedTo;
    tempObj["completedOn"] = completedOn;
    tempObj["taskStatus"] = taskStatus;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle} cancel={cancel}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <form>
          <div class="form-group">
            <label for="taskName">Task Name</label>
            <input
              type="email"
              class="form-control"
              id="taskName"
              aria-describedby="emailHelp"
              value={taskName}
              name="taskName"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="taskDescription" class="form-label">
              Task Description
            </label>
            <textarea
              class="form-control"
              id="taskDescription"
              rows="2"
              vlaue={description}
              name="description"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="date">Deadline</label>
            <input
              type="date"
              class="date form-control"
              id="date"
              name="deadline"
              vlaue={deadline}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="date">Completed On</label>
            <input
              type="date"
              class="date form-control"
              id="date"
              name="completedOn"
              vlaue={completedOn}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <select
              class="form-select"
              aria-label="Default select example"
              name="assignedTo"
              vlaue={assignedTo}
              onChange={handleChange}
            >
              <option selected>Assign To</option>
              <option value="Nagendra-14409">Nagendra(14409)</option>
              <option value="Alex-14408">Alex(14408)</option>
              <option value="Joe-14407">Joe(14407)</option>
              <option value="Nick-14406">Nick(14406)</option>
              <option value="Tom-14405">Tom(14405)</option>
            </select>
          </div>
          <div class="form-group">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              value={taskStatus}
              name="taskStatus"
            >
              <option selected>Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Postponed">Postponed</option>
            </select>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={cancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UpdateForm;
