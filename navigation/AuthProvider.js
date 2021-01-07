import React, { createContext, useState } from "react";

import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk";

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
            await auth().createUserWithEmailAndPassword(email, password).then(() => {
              console.log("User account created & signed in");
            }).catch(error => {
              if (error.code === "auth/email-already-in-use") {
                console.log("That email address is already in use!");
              }

              if (error.code === "auth/invalid-email") {
                console.log("That email address is invalid");
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

        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);

            if (result.isCancelled) {
              throw "User cancelled the login process";
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw "Something went wrong obtaining access token";
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log(e);
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
