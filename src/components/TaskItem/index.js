import React from "react";

function TaskItem(tasks) {
  let { task, index } = tasks;

  // ---------- cap nhat trang thai cua task ----------
  // --------------------------------------------------
  const onUpdateStatus = () => {
    tasks.onUpdateStatus(tasks.task.id);
  };

  // ---------- xoa task khoi danh sach TaskList ----------
  // --------------------------------------------------
  const onRemoveTask = () => {
    tasks.onRemoveTask(tasks.task.id);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{task.name}</td>
      <td className="text-center">
        <span
          className={
            task.status === true ? "label label-danger" : "label label-success"
          }
          onClick={onUpdateStatus}
        >
          {task.status === true ? "Đang thực hiện" : "Ẩn"}
        </span>
      </td>
      <td className="text-center">
        <button type="button" className="btn btn-warning">
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button type="button" className="btn btn-danger" onClick={onRemoveTask}>
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
