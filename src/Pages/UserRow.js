import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization:`Bearer ${localStorage.getItem('accessItem')}`
            }
        })
            .then(res => res.json())
            .then(data => {
            console.log(data);
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;