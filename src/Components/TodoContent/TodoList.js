import React, { useEffect, useState } from "react";
import "./TodoList.css";
import TaskForm from "../Modal/TaskForm";
import Card from "../Card/Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("taskList"));
    if (data) {
      setTaskList(data);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    window.location.reload();
  };

  const updateListArray = (taskObj, index) => {
    let tempList = taskList;
    tempList[index] = taskObj;
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    window.location.reload();
  };

  const toggle = () => {
    setModal(modal);
  };

  const cancel = () => {
    setModal(false);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <div className="task-content-container">
      <div className="text-header shadow-sm">
        <h4 className="fw-bold mb-4">Task Manager</h4>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((task, index) => (
          <Card
            taskObj={task}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <TaskForm toggle={toggle} modal={modal} cancel={cancel} save={saveTask} />
    </div>
  );
};

export default TodoList;
