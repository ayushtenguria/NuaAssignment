import Main from "./components/main";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";


const frontendApi =
  "pk_test_c29jaWFsLW1lZXJrYXQtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA";

function App() {
  return (
    <ClerkProvider publishableKey={frontendApi}>
      <Router>
      <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <SignedIn>
                <Main />
              </SignedIn>
            }
          />
          <Route
            path="*"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
