import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoardScreenWrap from "./Screens/DashboardScreens/DashBoardScreenWrap/DashBoardScreenWrap";
import LoginScreen from "./Screens/FirstScreens/LoginScreen/LoginScreen";
import LandingPage from "./Screens/FirstScreens/LandingPage/LandingPage";
import { useEffect, useState } from "react";
import Routes from "./Routes/Routes";
import Layout from "./Screens/FirstScreens/LandingPage/Layout";
import DashboardRoutes from "./Routes/DashboardRoutes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { login, logout, selectUser } from "./redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Components/Common/LoadingComponent/Loading";
function App() {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
        setLoading(false);
      } else {
        dispatch(logout());
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      {user ? (
        <DashBoardScreenWrap>
          <DashboardRoutes />
        </DashBoardScreenWrap>
      ) : (
        <Layout>
          <Routes />
        </Layout>
      )}
    </div>
  );
}
export default App;
