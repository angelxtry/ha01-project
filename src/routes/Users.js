import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { getUsers } from "../utils/Api";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUsers(this.callbackData);
  }

  callbackData = users => {
    this.setState({
      users: users
    });
  };

  render() {
    return (
      <div>
        <Container className="main-container">
          <Row>
            <Col xs="6" sm="3" />
            <Col xs="6" sm="6">
              <div>
                <h3 className="user-list-title">유저 리스트</h3>
              </div>
              <div className="user-list-item">
                {this.state.users.map(user => {
                  return (
                    <div key={user.id}>
                      <Link to={`${this.props.match.path}${user.id}`}>
                        {user.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col sm="3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Users;
