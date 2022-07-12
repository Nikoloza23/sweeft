import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetails } from "../../api/ApiConfing";
import { UserDetail } from "../../components";
import { Loader } from "../../components/loading/Loader";

import "./details.scss";

//Here is details about animal wich you clicked
const Details = () => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getDetails(id).then((res) => {
      setData(res);
      setIsLoading(false);
      console.log(res);
    });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return <UserDetail data={data} />;
};

export default Details;
