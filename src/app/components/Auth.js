const Auth = ({ children }) => {

    const {isAuthenticated} = true;

    if (!isAuthenticated) {
        return <div>Veuillez vous connecter pour accéder à cette page.</div>
    }

    return children

}
export default Auth;