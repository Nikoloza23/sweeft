import { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../../api/ApiConfing";

import Loading from "../../components/loading/Loading";

import "./home.scss";

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
              {user.name}
            </div>
          );
        } else {
          return (
            <div className="list" key={index}>
              <div className="list_item_content">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${user.id}`}
                >
                  <img
                    className="home_images"
                    alt=""
                    src={`${user.imageUrl + "?q=" + user.id} `}
                  />
                  <div className="list_item_content_description">
                    <strong
                      key={index}
                    >{`${user.name} ${user.lastName}`}</strong>
                  </div>

                  <div className="list_item_content_description">
                    <div>{`${user.title}`}</div>
                  </div>
                </Link>
              </div>
            </div>
          );
        }
      })}
      {isLoading && <Loading />}
    </div>
  );
};

export default Home;
