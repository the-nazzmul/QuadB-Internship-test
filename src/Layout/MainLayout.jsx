import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;