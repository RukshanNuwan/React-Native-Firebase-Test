import React, { createContext, useState } from "react";

import auth from "@react-native-firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        // Sign Up Function
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password).then((rest) => {
              console.log(rest);
              console.log("User account created & signed in!");
            }).catch(error => {
              if (error.code === "auth/email-already-in-use") {
                console.log("That email address is already in use!");
              }

              if (error.code === "auth/invalid-email") {
                console.log("That email address is invalid!");
              }

              console.error(error);
            });
          } catch (e) {
            console.log("failed to register");
            console.log(e);
          }
        },

        // Logging Function
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log("successfully logging");
          } catch (e) {
            console.log(e);
            console.log("failed to login");
          }
        },

        // Log out Function
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
