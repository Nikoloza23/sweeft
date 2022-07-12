import "./details.scss";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getDetails } from "../../api/apiConfing";
import { UserDetail } from "../../components";
const Details = () => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getDetails(id).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <h1>...Loadingh</h1>;
  }

  return <UserDetail data={data} />;
};

export default Details;
