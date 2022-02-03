import React from 'react';

const UserList = ({ users }) => {
    return <div>
        <ul>
            {
                users.map((user, index) => <li key={index}>{user.name}</li>)
            }
        </ul>
    </div>;
};

export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}
