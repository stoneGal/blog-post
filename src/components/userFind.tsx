import React from "react"



const UserFind:React.FC = () => {
    return (
        <div>
            <div className="input_wrapper"></div>
            <input type="text" placeholder="filter" />
            <button>Search</button>
        </div>
    )
}

export default UserFind;