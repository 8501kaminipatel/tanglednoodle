import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../SERVICES/Firebase";
import { toast } from "react-toastify";

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [flag, setFlag] = useState(false);

  // Change icon flag
  const changeicon = () => {
    setFlag(!flag);
  };

  // Load user from localStorage or Firebase auth on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Optionally store the user in localStorage
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);

  // Sign out handler
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");  // Remove user from localStorage on logout
        toast.success("Logout successful ✅", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Logout failed ❌", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  return (
    <Usercontext.Provider value={{ user, setUser, handleSignOut, flag, changeicon }}>
      {children}
    </Usercontext.Provider>
  );
};
