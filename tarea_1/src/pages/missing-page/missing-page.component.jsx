import React from "react";
import { Link } from "react-router-dom";

const MissingPage = () => (
  <div>
    Sorry, this page does not exist.
    <br />
    <Link to="/">Home</Link>
  </div>
);

export default MissingPage;
