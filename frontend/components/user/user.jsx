import React from "react";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";
import ReservationsContainer from "../reservations/reservations_container";

const User = props => {
    // debugger

    return (
        <section className="user-account-container">
            <div className="user-account-content">
                <div className="user-account-sections-container">
                    <aside className="user-account-navigation">
                        <div>
                            <ul>
                                <li>My Info</li>
                                <li>Stays</li>
                                <li>Reviews</li>
                            </ul>
                        </div>
                    </aside>
                    <main className="user-account-main">
                        <div className="user-aacount-main-content">
                            <Switch>
                                {/* <ProtectedRoute path="/user/:userId/reviews" component={ReviewsContainer} /> */}
                                <ProtectedRoute path="/user/:userId/stays" component={ReservationsContainer} />
                                <ProtectedRoute path="/user/:userId" component={UserInfo} />
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

const UserInfo = props => {

    return (
        <div>
            HELLO USER
        </div>
    )
}

export default User;