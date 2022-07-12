import { UserFriends } from "../../components";
import "./userdetail.scss";

const UserDetail = ({ data }) => {
  return (
    <div className="details_container">
      <div className="header_wrapper">
        <div className="header">
          <img src={data.imageUrl} alt="" />
          <fieldset className="left_info">
            <legend>Info</legend>
            <div>
              <strong>
                {data.prefix}
                {data.name}

                {data.lastName}
              </strong>
            </div>
            <div>
              <i>{data.title}</i>
            </div>
            <br />
            <div>
              <span>Email :</span>
              {data.email}
            </div>
            <div>
              <span>Ip Address :</span>
              {data.ip}
            </div>
            <div>
              <span>Ip Address :</span>
              {data.ip}
            </div>
            <div>
              <span>Job Area:</span>
              {data.jobArea}
            </div>
            <div>
              <span>Job Type:</span>
              {data.jobType}
            </div>
          </fieldset>
          <fieldset className="right_info">
            <legend>Address</legend>
            <div>
              <strong>
                {data.company?.name}
                {data.company?.sufix}
              </strong>
            </div>
            <div>
              <span>City :</span>
              {data.address?.city}
            </div>
            <div>
              <span>Country :</span>
              {data.address?.country}
            </div>
            <div>
              <span>State :</span>
              {data.address?.state}
            </div>
            <div>
              <span>Street Address :</span>
              {data.address?.streetAddress}
            </div>
            <div>
              <span>ZIP :</span>
              {data.address?.zipCode}
            </div>
          </fieldset>
        </div>
        <div>
          <div style={{ padding: "20px" }} className="breadcrubms">
            Niko
          </div>
          <h2 style={{ marginLeft: "10px" }}>Frineds:</h2>
          <UserFriends />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
