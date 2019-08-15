import React from 'react';
import styled from "styled-components";
import logoImage from '../../../assets/image/airtel.png';
import SubHeader from "../sub-header";
import {Icon, Menu} from "semantic-ui-react";


const AppHeader = ({toggleSideBar,showMenuOption=false}) => {
    const Wrapper = styled.div`
  display: flex;
  height: 45px;
  border-bottom: 1px solid gray;
`;
    const MenuContainer = styled.div`
 width: 50px;
 border: none;
 height: 100%;
 &&& .attached.menu.menu-icon {
   border: none;
   
 }
`;
    const Image = styled.img`
  width: 100px;
  padding-left: 10px;
`;

    return (
        <Wrapper>
            {!showMenuOption ?     <MenuContainer >
                <Menu secondary attached="top" className="menu-icon">
                    <Menu.Item onClick={toggleSideBar}>
                        <Icon name="sidebar"/>
                    </Menu.Item>
                </Menu>
            </MenuContainer> :null}
            <Image id="titleLogo" src={logoImage}/>
        </Wrapper>
    );
};

export default AppHeader;
