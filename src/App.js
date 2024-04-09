import { Route, Routes } from "react-router-dom";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthRedirection from "./utils/AuthRedirection";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center fond-bold text-2xl text-gray-700">CRUD App with Redux</h1>
      <Routes>
        <Route 
          path="/" 
          element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            } 
          />
        <Route 
          path="/add-user" 
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          } 
        />
        <Route 
          path={"/edit-user/:id"} 
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/login" 
          element={
            <AuthRedirection>
              <Login />
            </AuthRedirection>
          } 
        />
        <Route 
          path="/sign-up" 
          element={
            <AuthRedirection>
              <SignUp />
            </AuthRedirection>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
