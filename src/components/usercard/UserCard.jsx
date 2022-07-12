import React from 'react'
import {Link} from "react-router-dom"
import "./usercard.scss"

const UserCard = ({user}) => {
  return (
    <div className="list" >
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
          
          >{`${user.name} ${user.lastName}`}</strong>
        </div>

        <div className="list_item_content_description">
          <div>{`${user.title}`}</div>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default UserCard