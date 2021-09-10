import React from "react";
import "./App.css";
import Control from "./components/Control";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
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
          {/* Tim kiem va Sap xep */}
          <Control />
          {/* Danh sách các task */}
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
