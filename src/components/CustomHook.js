import useFetch from "react-fetch-hook";

function CustomHook() {
    const { isLoading, error, data } = useFetch('https://api.github.com/users/mvnulman');
    if(isLoading) return "Loading...";
    if(error) return "Error!"

    const handleClick = () => {
        window.open("https://www.github.com/mvnulman");
    }

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
export default CustomHook;

