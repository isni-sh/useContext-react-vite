import * as React from "react";
import { UserContext } from "./UserContext";

function Username() {
  const user = React.useContext(UserContext);
  return (
    <p>
      Logged in as{" "}
      <strong>
        {user.name} {user.surname}
      </strong>
    </p>
  );
}

export function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Username />
    </>
  );
}

export function About() {
  return (
    <>
      <h1>About Page</h1>
      <Username />
    </>
  );
}

export function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <Username />
    </>
  );
}
