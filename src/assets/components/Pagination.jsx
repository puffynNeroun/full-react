import React, { useState, useEffect } from "react";
import axios from "axios";

function Kill() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const limit = 10;
        const offset = (currentPage - 1) * limit;

        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`
            )
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [currentPage]);

    function deleteUser(userId) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    }

    function nextPage() {
        setCurrentPage((prevPage) => prevPage + 1);
    }

    function previousPage() {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.title}
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={previousPage}>Previous</button>
                <span>Page {currentPage}</span>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}

export default Kill;
