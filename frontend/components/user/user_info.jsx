import React from "react"

const UserInfo = props => {
    const { user } = props;

    return (
        <div className="user-account-info">
            <div className="user-info-header">
                <h1>Profile</h1>
                <p>Your photo & bio are used alongside your reviews, staylists and hotels you love.</p>
            </div>
            <div className="user-info-body">
                <div className="user-info-icon"></div>
                <div className="user-details">
                    <p>Name: {user.fname} {user.lname}</p>
                    <p>Email: {user.email}</p>
                    <p>Your name will be displayed on Terra l'Hotels as:</p>
                    <p>{user.fname} {user.lname}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;