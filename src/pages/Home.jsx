import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UseSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
