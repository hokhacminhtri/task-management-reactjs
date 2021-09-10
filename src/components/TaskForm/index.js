import React from "react";

function TaskForm() {
  console.log("TaskForm");
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm công việc</h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên: </label>
            <input type="text" className="form-control"></input>
          </div>
          <label> Trạng thái</label>
          <select className="form-control" required="required">
            <option value="1">Đang thực hiện</option>
            <option value="0">Chưa thực hiện</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Thêm
            </button>
            <button type="submit" className="btn btn-danger">
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
