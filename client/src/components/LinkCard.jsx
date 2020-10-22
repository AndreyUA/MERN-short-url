import React from "react";

const LinkCadr = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        Your short link:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>

      <p>
        Your full link:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>

      <p>
        Click counter: <strong>{link.clicks}</strong>
      </p>

      <p>
        Date creation:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

export default LinkCadr;


//2-46
//https://www.youtube.com/watch?v=ivDjWYcKDZI&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
//https://cloud.mongodb.com/v2/5f8d93f37075e25309e4075e#metrics/replicaSet/5f8d9681ac1125709b4bf534/explorer/app/users/find
