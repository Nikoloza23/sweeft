export const getUsers = async (page) => {
  const users = await (
    await fetch(
      "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20?q=${id}"
    )
  ).json();
  return users.list;
};
