import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="p-32 text-center bg-rose-100 text-5xl font-semibold">
            Home Sweet Home
            {user?.displayName}
        </div>
    );
};

export default Home;