import React, { useState, useEffect } from 'react';
import axios from 'axios'

function AxiosFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const handleClick = () => {
        window.open("https://www.github.com/mvnulman");
    }

    useEffect(() => {
        axios('https://api.github.com/users/mvnulman')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error)
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";


    return (
        <div className="Cards">
            <div className="upper-container">
                <div className="image-container">
                <img src={data.avatar_url} alt="" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
            <h1>username: {data.login}</h1>
            <p>Name: {data.name}</p>
            <p>Bio: {data.bio}</p>
            <p>Location: {data.location}</p>
            <p>Public repos: {data.public_repos}</p>
            <button className="box" onClick={handleClick}>Profile!</button>
            </div>
        </div>
    )
}
export default AxiosFetch;

