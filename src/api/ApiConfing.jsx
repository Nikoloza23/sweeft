export const getUsers = async (page) => {
  const users = await (
    await fetch(
      "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/10"
    )
  ).json();
  return users.list;
};

export const getDetails = async (id) => {
  const users = await (
    await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
  ).json();
  return users;
};

export const getUserFriends = async (id) => {
  const friends = await (
    await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/16`
    )
  ).json();
  return friends;
};
