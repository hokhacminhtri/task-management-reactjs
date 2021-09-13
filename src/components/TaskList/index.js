import React from "react";
import TaskItem from "../TaskItem";

function TaskList(myTasks) {
  return (
    <div className="row mt-5">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <select className="form-control">
                  <option value="-1">Tất Cả</option>
                  <option value="0">Chưa thưc hiên</option>
                  <option value="1">Đang thực hiện</option>
                </select>
              </td>
              <td></td>
            </tr>
            <TaskItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
