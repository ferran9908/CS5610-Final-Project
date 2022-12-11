import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GenericProtectedRoute = ({ redirectPath = "/" }) => {
    const authData = useSelector(state => state.auth)
    if (!authData.jwt) {
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet />
}

export default GenericProtectedRoute

