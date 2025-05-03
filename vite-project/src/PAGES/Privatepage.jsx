

import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Usercontext } from '../CONTEXT/Authcontext';


const Privatepage = ({ children }) => {
  const {user} = useContext( Usercontext)

    if (!user) {
        return <Navigate to={"/login"} />;
    }
    
    return children;
};

export default Privatepage;



