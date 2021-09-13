import React, { useState, useEffect } from "react";
import "./App.css";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    console.log("effect");
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasks);
    }
  }, []);

  // generate data
  const onGenerateData = () => {
    console.log("generate data");
    let tasks = [
      {
        id: onGenerateId(),
        name: "Ăn",
        status: true,
      },
      {
        id: onGenerateId(),
        name: "Ngủ",
        status: false,
      },
      {
        id: onGenerateId(),
        name: "Code",
        status: true,
      },
    ];
    // console.log(tasks);

    setTasks(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // key tao unique id
  const key = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  // ham tao unique id
  const onGenerateId = () => {
    return key() + key() + key() + key() + key() + key() + key() + key();
  };

  const { myTasks } = tasks;
  // console.log(tasks, "ahihi");

  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản lý công việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* From them cong viec */}
          <TaskForm />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            <span className="fa fa-plus mr-5"></span> Thêm công việc
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onGenerateData}
          >
            Generate Data
          </button>
          {/* Tim kiem va Sap xep */}
          <Control />
          {/* Danh sách các task */}
          <TaskList tasks={myTasks} />
          {/* <TaskList /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
