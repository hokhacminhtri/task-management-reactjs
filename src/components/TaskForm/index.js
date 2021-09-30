import React, { useState } from "react";

function TaskForm(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  // const [displayForm, setDisplayForm] = useState(true); // dong mo task form

  // bat su kien cho ten cong viec
  const onChangeName = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    // console.log("valueName", value);

    setName(value);
  };

  // bat su kien cho trang thai cong viec
  const onChangeStatus = (event) => {
    let target = event.target;
    let status = target.status;
    let value = target.value;

    // console.log("valueStatus", value);

    if (value) {
      value = target.value === "true" ? true : false;
    }

    console.log(typeof value);

    setStatus(value);
  };

  // submit form them cong viec
  const onSubmit = (event) => {
    event.preventDefault(); // ngan load lai trang
    let obj = Object.assign({ name: name, status: status });

    props.onSubmit(obj);
  };

  // xoa gia tri cua form "Them cong viec"
  const onClearForm = () => {
    // xoa cac gia tri dang co cua state
    setName("");
    setStatus(false);
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Thêm công việc</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Tên: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={onChangeName}
            ></input>
          </div>
          <label> Trạng thái</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={status}
            onChange={onChangeStatus}
          >
            <option value={true}>Đang thực hiện</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button type="submit" className="btn btn-warning">
              Thêm
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onClearForm}
            >
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
