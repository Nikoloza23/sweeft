import { useCallback, useEffect, useState, useRef } from "react";
import { fetchUser } from "../api/ApiConfing";

import Loading from "../components/loading/Loading";

import "./home.scss";

const Home = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const observer = useRef();

  useEffect(() => {
    setIsLoading(true);
    fetchUser(page).then((res) => {
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
    <div className="App">
      {data.map((user, index) => {
        if (data.length === index + 1) {
          return (
            <div key={index} ref={lastUserobserver}>
              {user.name}
            </div>
          );
        } else {
          return <div key={index}>{user.name}</div>;
        }
      })}
      {isLoading && <Loading />}
    </div>
  );
};

export default Home;
