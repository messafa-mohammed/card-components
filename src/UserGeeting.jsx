import PropTypes from 'prop-types'
function UserGeeting(props){
    const welcomeMessage = <h2>
                            welcome {props.name}
                            </h2>
    
    
    const loginPrompt = <h2>
                        Please log in first
                        </h2>
    return(
        props.isLoggedIn ?  welcomeMessage: loginPrompt
    )
}
UserGeeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string,
}
UserGeeting.defaultProps = {
    isLoggedIn : false,
    name: "Guest"
}
export default UserGeeting