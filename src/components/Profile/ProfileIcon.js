import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const avatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1vrEL9ELu5SObfwQd_nYtVQQQY-Py4gh6w&usqp=CAU";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  defaultAvatar =
    "https://tachyons.io/components/avatars/circle-border/screenshot.jpg?version=cb0db27a4c651b43cedc9c1a60548a25";

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src={avatar || defaultAvatar}
              className="br-100 ba h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-5"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>
              View Profile
            </DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange("signout")}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
export default ProfileIcon;
