import React from "react";
import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <ClipLoader
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    </>
  );
}

export default UserResults;
