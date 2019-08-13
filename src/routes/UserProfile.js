import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";

import Sidebar from "./Sidebar";
import { getUser } from "../utils/Api";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    getUser(this.props.match.params.id, this.callbackData);
  }

  callbackData = user => {
    this.setState({
      user: user
    });
  };
  render() {
    const { id, name, email, phone } = this.state.user;
    return (
      <div>
        <Container className="main-container">
          <Row>
            <Col xs="6" sm="5">
              <Sidebar id={id} />
            </Col>
            <Col xs="6" sm="5">
              <div>
                <img
                  className="img-user-profile"
                  src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                  alt=""
                />
              </div>
              <div id="bootstrap-override" className="div-user-profile">
                <Table className="table-user-profile">
                  <tbody>
                    <tr>
                      <th scope="row">이름</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th scope="row">이메일</th>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <th scope="row">모바일</th>
                      <td>{phone}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col sm="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
