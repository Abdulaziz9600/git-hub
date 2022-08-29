import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import "./App.css";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Api } from "../src/Components/URL/API";
import { context } from "./context";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const users = {
    username: "abdulaziz",
    password: "125618",
  };

  const uselogin = (params) => {
    return users.username === params.username &&
      users.password === params.password
      ? navigate("/home")
      : navigate("/");
  };

  const { getUser, getRepo, getFollowers,getFollowing,getUsers } = Api;

  const [user, setUser] = useState("Abdulaziz9600");

  const [userInfo, setUserInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [staticRepos, setstaticRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);

  const [searchRepo, setSearchRepo] = useState("");
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    getUser(user).then((res) => setUserInfo(res.data));
    getRepo(user).then((res) => {
      return setRepos(res.data), setstaticRepos(res.data);
    });
    getFollowers(user).then((res) => setFollowers(res.data));
    getFollowing(user).then((res) => setFollowing(res.data));
  }, [user]);

  const getInfo = useCallback(() => {
    searchUser
      ? getUsers(searchUser).then((res) => setFoundUsers(res.data.items))
      : setFoundUsers([]);
  }, [searchUser]);

  useEffect(() => {
    const regex = new RegExp(searchRepo, "gi");
    searchRepo
      ? setRepos(
          staticRepos.filter((item) => {
            return item.name.match(regex);
          })
        )
      : setRepos(staticRepos);
  }, [searchRepo]);

  const values = {
    userInfo,
    repos,
    followers,
    foundUsers,
    following,
    searchRepo,
    searchUser,
    setSearchUser,
    setSearchRepo,
    setFoundUsers,
    setUser,
    getInfo,
  };

  return (
    <>
      <context.Provider value={{ values }}>
        {/* <Routes>
          <Route path="/log" element={}/>
          <Route path="/" element={} />
        </Routes> */}
        {pathname === "/" ? (
          <Login uselogin={uselogin} />
           
          ) : (
            <Home />
          )}
          {/* {pathname === "/" ? (
            ""
          ) : (
          )} */}
      </context.Provider>
    </>
  );
}

export default App;
