import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from "reactstrap";
import { getTodosByUserId } from "../utils/Api";

const Sidebar = ({ id }) => {
  const [todosCount, setTodosCount] = useState(0);

  const callbackData = todos => {
    setTodosCount(todos.length);
  };
  getTodosByUserId(id, callbackData);

  return (
    <div>
      <div>
        <Link className="link" to={`/users/${id}`}>
          <Button color="primary">{sideMenu.PROFILE}</Button>
        </Link>
      </div>
      <div>
        <Link className="link" to={`/users/${id}/todos`}>
          <Button color="primary">
            {sideMenu.TODO}
            <Badge pill>{todosCount}</Badge>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const sideMenu = {
  PROFILE: "유저 프로필",
  TODO: "투두"
};

export default Sidebar;
