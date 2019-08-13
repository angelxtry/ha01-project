import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Sidebar from "./Sidebar";
import TodoSelectButton, { selection } from "./TodoSelectButton";
import { getTodosByUserId } from "../utils/Api";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filtered: []
    };
  }

  componentDidMount() {
    getTodosByUserId(this.props.match.params.id, this.callbackData);
  }

  callbackData = todos => {
    this.setState({
      todos: todos
    });
  };

  callbackFilteredData = choice => {
    const filtered = choice => {
      switch (choice) {
        case selection.COMPLETED:
          return this.state.todos.filter(todo => todo.completed === true);
        case selection.NOT_COMPLETE:
          return this.state.todos.filter(todo => todo.completed === false);
        default:
          return [];
      }
    };
    this.setState({
      ...this.state,
      filtered: filtered(choice)
    });
  };

  render() {
    console.log(this.state);
    const todos = this.state.filtered.length
      ? this.state.filtered
      : this.state.todos;
    return (
      <div>
        <Container className="main-container">
          <Row>
            <Col xs="6" sm="5">
              <Sidebar id={this.props.match.params.id} />
            </Col>
            <Col xs="6" sm="5">
              <TodoSelectButton callback={this.callbackFilteredData} />
              <ListGroup>
                {todos.map(todo => {
                  return (
                    <ListGroupItem>
                      <div key={todo.id}>
                        <div
                          style={{
                            fontWeight: todo.completed ? "bold" : "none"
                          }}
                        >
                          {todo.title}
                        </div>
                        {/* <div>completed: {`${todo.completed}`}</div> */}
                      </div>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </Col>
            <Col sm="2" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Todos;
