import React from 'react';
import './nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-content">
        <div className="nav__header">
          <div className="nav__userInfo">
            <span>欢迎您， admin</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;