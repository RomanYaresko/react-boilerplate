import Home from "@/views/Home";
import LoginView from "@/views/user/LoginView";
import RegisterView from "@/views/user/RegisterView";
import UserUpdateView from "@/views/user/UserUpdateView";

export const routes = {
  userUpdate: { path: "/user/update", element: <UserUpdateView /> },
  login: { path: "/login", element: <LoginView /> },
  register: { path: "/register", element: <RegisterView /> },

  home: { path: "/", element: <Home /> },
};
