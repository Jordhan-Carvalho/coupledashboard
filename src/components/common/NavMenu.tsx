import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

import { VscSettingsGear } from "react-icons/vsc";
import { BsCalendar } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";

export default function NavMenu() {
  const [activePage, setActivePage] = useState("");
  let history = useHistory();

  const changePage = (pageName: string) => {
    setActivePage(pageName);
    history.push(`/${pageName}`);
  };

  return (
    <NavMenuContainer>
      <NavLinksContainer>
        <LinkContainer active={activePage === ""}>
          <IconHome onClick={() => changePage("")} />
        </LinkContainer>
        <LinkContainer active={activePage === "monthly"}>
          <IconCalendar onClick={() => changePage("monthly")} />
        </LinkContainer>
        <LinkContainer active={activePage === "analysis"}>
          <IconGraph onClick={() => changePage("analysis")} />
        </LinkContainer>
        <LinkContainer active={activePage === "settings"}>
          <IconSetting onClick={() => changePage("settings")} />
        </LinkContainer>
        <LinkContainer active={activePage === "logout"}>
          <IconLogout onClick={() => alert("logout")} />
        </LinkContainer>
      </NavLinksContainer>
      <DivisorLine />
    </NavMenuContainer>
  );
}

const NavMenuContainer = styled.aside`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinksContainer = styled.menu`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 30%;
`;

const DivisorLine = styled.div`
  height: 100%;
  width: 1px;
  background: #3c096c;
`;

type myProps = {
  active: boolean;
};

const LinkContainer = styled.div`
  width: 90px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px 0 0 20px;
  box-shadow: ${(props: myProps) =>
    props.active ? "inset 0px 4px 4px rgba(0, 0, 0, 0.25)" : ""};
  background: ${(props: myProps) =>
    props.active
      ? "linear-gradient(90deg, rgba(255, 255, 255, 0.71) 5.26%, rgba(237, 226, 249, 0) 90.79%)"
      : "transparent"};
`;

const sharedIconStyle = css`
  color: var(--mainPurple);
  cursor: pointer;
  font-size: 32px;
  margin-right: 5px;
`;

const IconHome = styled(AiOutlineHome)`
  ${sharedIconStyle}
`;

const IconCalendar = styled(BsCalendar)`
  ${sharedIconStyle}
`;

const IconGraph = styled(GoGraph)`
  ${sharedIconStyle}
`;

const IconSetting = styled(VscSettingsGear)`
  ${sharedIconStyle}
`;

const IconLogout = styled(AiOutlineLogout)`
  ${sharedIconStyle}
`;
