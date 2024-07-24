import React from "react";

import { useParams } from "react-router-dom";

function User() {
  const { nischay } = useParams();
  return <div className="text-center">User:{nischay}</div>;
}

export default User;
