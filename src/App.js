import React, { useState, useEffect } from "react";
import "./App.css";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [displayForm, setDisplayForm] = useState(false); // dong mo task form

  useEffect(() => {
    console.log("effect");
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
  }, []);

  // ---------- generate data ----------
  // --------------------------------------------------
  const onGenerateData = () => {
    console.log("generate data");
    let tasks = [
      {
        id: onGenerateId(),
        name: "Ăn",
        status: true, // thuc hien
      },
      {
        id: onGenerateId(),
        name: "Ngủ",
        status: false, // ẩn
      },
      {
        id: onGenerateId(),
        name: "Code",
        status: true, // thuc hien
      },
    ];
    // console.log(tasks);

    setTasks(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // ---------- key tao unique id ----------
  // --------------------------------------------------
  const key = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  // ---------- ham tao unique id ----------
  // --------------------------------------------------
  const onGenerateId = () => {
    return key() + key() + key() + key() + key() + key() + key() + key();
  };

  let myTasks = tasks;
  // console.log(myTasks, "my-tasks");

  // ---------- submit them cong viec ----------
  // --------------------------------------------------
  const onSubmitForm = (data) => {
    let task = {
      id: onGenerateId(),
      name: data.name,
      status: data.status,
    };

    // them task moi vao mang tasks
    let addNewTask = (tasks) => [...tasks, task];

    // them task moi vao state
    setTasks(addNewTask(tasks));

    // luu vao localStorage
    localStorage.setItem("tasks", JSON.stringify(addNewTask(tasks)));
  };

  const onToggleForm = () => {
    setDisplayForm(!displayForm);
  };

  // ---------- hien thi form va them task ----------
  // --------------------------------------------------
  let elementTaskForm = displayForm ? <TaskForm onSubmit={onSubmitForm} /> : "";

  // ---------- tim id cua cong viec ----------
  // --------------------------------------------------
  const findIndex = (id) => {
    let result = -1; // index tim duoc
    myTasks.forEach((task, index) => {
      if (task.id === id) {
        console.log(index, "indexxx");
        result = index;
      }
    });
    return result;
  };

  // ---------- cap nhat trang thai cua cong viec ----------
  // ---------- lay id TaskItem --> TaskList --> App.js ----------
  // --------------------------------------------------
  const onUpdateStatus = (id) => {
    console.log("id lay duoc", id);
    let index = findIndex(id);
    console.log(index, "index");
    if (index !== -1) {
      myTasks[index].status = !myTasks[index].status;
      console.log(myTasks[index].status, "indexx");

      setTasks(myTasks);
      localStorage.setItem("tasks", JSON.stringify(myTasks));
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTasks(myTasks);
  //   }, 3000);
  // }, [myTasks]);

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
        <hr />
      </div>
      <div className="row">
        <div
          className={displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {/* From them cong viec */}
          {/* <TaskForm /> */}
          {elementTaskForm}
        </div>
        <div
          className={
            displayForm
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className={!displayForm ? "btn btn-primary" : "btn btn-danger"}
            onClick={onToggleForm}
          >
            <span
              className={!displayForm ? "fa fa-plus mr-5" : "fa fa-times mr-5"}
            ></span>{" "}
            {!displayForm ? "Thêm công việc" : "Đóng form"}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={onGenerateData}
          >
            Generate Data
          </button>
          {/* Tim kiem va Sap xep */}
          <Control />
          {/* Danh sách các task */}
          <TaskList tasks={myTasks} onUpdateStatus={onUpdateStatus} />
          {/* <TaskList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
