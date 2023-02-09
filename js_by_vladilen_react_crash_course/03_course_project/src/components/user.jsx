import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  // console.log(users);

  const handleDelete = (userId) => {
    setUsers(users.filter((u) => u._id !== userId));
    // console.log(userId);
  };

  const renderPhrase = (number) => {
    if (users.length === 0) return "No users";
    return users.length;
  };

  const renderTableBody = () => {
    // let s = "";
    return (
      <tbody>
        {users.map((u) => (
          <tr key={u._id}>
            <td>{u.name}</td>
            <td>
              {u.qualities.map((q) => (
                <span key={u._id} className={"badge bg-" + q.color}>
                  {q.name}
                </span>
              ))}
            </td>
            <td>{u.profession.name}</td>
            <td>{u.completedMeetings}</td>
            <td>{u.rate}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(u._id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <>
      <span className="badge bg-info text-dark">{renderPhrase()}</span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>

        {renderTableBody()}
      </table>
    </>
  );
};

export default Users;
