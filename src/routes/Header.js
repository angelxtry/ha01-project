import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Header = () => {
  return (
    <div>
      <header>
        <Link className="link link-header-home" to="/">
          <Button className="btn btn-header-home" color="success">홈으로</Button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
