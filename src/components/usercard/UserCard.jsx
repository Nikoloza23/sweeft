import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getLastUser } from "../../redux/action";

import "./usercard.scss";

//Style for every user
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handlerClick = (id, name, prefix, lastName) => {
    dispatch(getLastUser(id, name, prefix, lastName));
  };

  return (
    <div className="list">
      <div
        className="list_item_content"
        onClick={() =>
          handlerClick(user.id, user.name, user.prefix, user.lastName)
        }
      >
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
            <strong>{`${user.name} ${user.lastName}`}</strong>
          </div>

          <div className="list_item_content_description">
            <div>{`${user.title}`}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
