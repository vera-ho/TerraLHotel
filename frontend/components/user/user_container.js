import { connect } from "react-redux";
import UserInfo from "./user_info";

const mSTP = (state = {}, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
    }
}

export default connect(mSTP)(UserInfo);