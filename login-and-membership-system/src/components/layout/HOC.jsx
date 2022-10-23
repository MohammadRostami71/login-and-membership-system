import {useSelector} from "react-redux";
import DashboardLayout from "./dashboard/DashboardLayout";
import AuthLayout from "./auth/AuthLayout";

const HOC = (Component) => {
    // const userEmail = useSelector(state => state.userData.email);
    const isAuth = !!localStorage.getItem('email');
    return (props) => {
        return (
            <>
                {
                    isAuth ?
                        <DashboardLayout>
                            <Component {...props}/>
                        </DashboardLayout> :
                        <AuthLayout>
                            <Component {...props}/>
                        </AuthLayout>
                }
            </>
        )
    }
};

export default HOC;