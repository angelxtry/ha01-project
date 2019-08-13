import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class TodoSelectButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      dropdownText: "선택하세요."
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  select = (e, choice) => {
    // console.log(e.target);
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownText: e.target.innerText
    });
    this.props.callback(choice);
  };

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.state.dropdownText}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={e => this.select(e, selection.ALL)}>
            {selection.ALL}
          </DropdownItem>
          <DropdownItem onClick={e => this.select(e, selection.NOT_COMPLETE)}>
            {selection.NOT_COMPLETE}
          </DropdownItem>
          <DropdownItem onClick={e => this.select(e, selection.COMPLETED)}>
            {selection.COMPLETED}
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export const selection = {
  ALL: "모든 투두",
  NOT_COMPLETE: "투두",
  COMPLETED: "완료한 투두"
};

export default TodoSelectButton;
