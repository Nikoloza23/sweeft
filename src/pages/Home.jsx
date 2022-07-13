import { useCallback, useEffect, useState, useRef } from "react";

import { getUsers } from "../api/ApiConfing";
import { Loader } from "../components/loading/Loader";

import { UserCard } from "../components";

//Home Page
const Home = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const observer = useRef();

  useEffect(() => {
    setIsLoading(true);
    getUsers(page).then((res) => {
      setData((prev) => [...prev, ...res]);
      setIsLoading(false);
    });
  }, [page]);

  const lastUserobserver = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((el) => {
      if (el[0].isIntersecting === true) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="list_container">
      {data.map((user, index) => {
        if (data.length === index + 1) {
          return (
            <div key={index} ref={lastUserobserver}>
              <UserCard user={user} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <UserCard user={user} />
            </div>
          );
        }
      })}
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
