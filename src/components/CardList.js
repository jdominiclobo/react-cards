import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(users);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div style={{ display: "flex" }}>
            <Card user={user} />
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
