import React from "react";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../../util/route_util";
import ReservationsContainer from "../reservations/reservations_container";
import UserContainer from "./user_container";
// import ReviewForm from "../reviews/review_form";

const User = props => {
    const userId = props.match.params.userId;
    // const userInfo = document.getElementById("user-info");
    // const userStays = document.getElementById("user-stays");
    // const userReviews = document.getElementById("user-reviews");
    // const url = window.location.href;

    // console.log("url: " + url);
    // console.log("href: " + userInfo);

    return (
        <section className="user-account-container">
            <div className="user-account-content">
                <div className="user-account-sections-container">
                    <aside className="user-account-navigation">
                        <div>
                            <ul className="user-account-nav-list">
                                <li>
                                    <a href={`/#/user/${userId}/info`} id="user-info">
                                        My Info
                                    </a>
                                </li>
                                <li>
                                    <a href={`/#/user/${userId}/stays`} id="user-stays">
                                        Stays
                                    </a>
                                </li>
                                <li>
                                    <a href={`/#/user/${userId}/reviews`} id="user-reviews">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <main className="user-account-main">
                        <div className="user-aacount-main-content">
                            <Switch>
                                <ProtectedRoute path="/user/:userId/reviews" component={ReviewsContainer} />
                                <ProtectedRoute exact path="/user/:userId/stays" component={ReservationsContainer} />
                                <ProtectedRoute path="/user/:userId" component={UserContainer} />
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default User;


