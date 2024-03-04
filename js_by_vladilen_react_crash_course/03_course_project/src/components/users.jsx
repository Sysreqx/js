import React, { useState } from 'react';
import api from "../api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    // const handleDelete = (userId) => {
    //
    // };
    //
    // const renderPhrase = (number) => {
    //
    // };

    console.log(users);

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"> </th>
            </tr>
            </thead>
            <tbody>

            {use}


            </tbody>
        </table>
    );
}

export default Users;