import React from 'react';

import TopNav, { TopNavTitle } from 'calcite-react/TopNav';

function Nav() {
  return (
    <TopNav
      style={{
        paddingLeft: '20px',
        backgroundColor: '#282c34',
        color: 'white',
        borderBottom: '1px solid #4c4c4c'
      }}
    >
      <TopNavTitle style={{ color: 'white' }} href="#">
        eBird Checklist Inspector
      </TopNavTitle>
    </TopNav>
  );
}

export default Nav;
