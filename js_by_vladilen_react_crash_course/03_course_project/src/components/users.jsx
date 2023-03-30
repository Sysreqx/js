import React, {useState} from "react";
import User from "./user";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";
import GroupList from "./groupList";
import api from "../api";

const Users = ({users: allUsers, ...rest}) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState(api.profession.fetchAll());

    const handleProfessionsSelect = (params) => {
        console.log(params)
    }

    const handlePageChange = (pageIndex) => {
        console.log("page", pageIndex);
        setCurrentPage(pageIndex);
    }

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <GroupList items={professions} onItemSelect = {} />
            {count > 0 && (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Проффессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {userCrop.map((user) => (
                        <User key={user._id} {...rest} {...user} />
                    ))}
                    </tbody>
                </table>
            )}
            <Pagination itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}></Pagination>

        </>
    );
};

export default Users;
