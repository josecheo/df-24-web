import React, { useState } from "react";
import Menu from "../menu";
import { Wrapper, Span, Arrow } from "./styles";

const NavLink = (props) => {
  const { text, menu, data } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [animateHidden, setAnimateHidden] = useState(false);
  const handleShowMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    }
  };
  const handleHiddenMenu = () => {
    if (showMenu) {
      setAnimateHidden(true);

      setTimeout(() => {
        setAnimateHidden(false);
        setShowMenu(false);
      }, 300);
    }
  };

  return (
    <>
      <Wrapper {...props} onMouseLeave={handleHiddenMenu}>
        <Span showMenu={showMenu} onMouseOver={handleShowMenu}>
          {text}
        </Span>
        {menu && <Arrow showMenu={showMenu}></Arrow>}
        {menu && showMenu && <Menu data={data} animateHidden={animateHidden} />}
      </Wrapper>
    </>
  );
};

export default NavLink;
