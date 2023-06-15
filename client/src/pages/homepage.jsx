import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [usersData, setUsersData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_BACKEND_URI}/get-all-users`)
            .then(response => response.json())
            .then(json => setUsersData(json))
            .finally(() => {
                setLoading(false)
            })
    }, []);
    return (
        <div className=''>
            <h1>Hello from home page</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Users Data</h1>
                    <table border={1}>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Profession</th>
                        </tr>
                        {usersData.data?.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.age}</td>
                                <td>{user.profession}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    );
}

export default HomePage;