import React from "react";

import Route from "./Routes";
import { AuthProvider } from "./AuthProvider";

const Providers = () => {
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>
  );
};

export default Providers;
