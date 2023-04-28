// import { ReactNode, ReactFragment } from "react"
import { Navigate } from "react-router-dom"

// Get Token from local storage
const token = localStorage.getItem("token")

// type ProtectedRouteProps = {
//     redirectPath?: string,
//     children: ReactNode
// }

const ProtectedRoute = ({ 
    redirectPath ="/",
    children
}: any) => {
    if (!token) {
        return <Navigate to={redirectPath} />
    }
    return children
}

export default ProtectedRoute