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