import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterBookByName } from "../actions";
import { MenuModal } from "./MenuModal";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fcd29f;
  height: 50px;
`;

const MenuButton = styled.button`
  width: 50px;
  height: 20px;
  background-color: #489fb5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 250px;
  border-radius: 10px;
  margin-left: 10px;
  border: none;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputState, setInputState] = useState("");
  const onMenuClick = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleInputChange = (event: any) => {
    setInputState(event.target.value);
    dispatch(filterBookByName(event.target.value));
  };
  return (
    <HeaderContainer>
      <div>
        <MenuButton onClick={onMenuClick}>Меню</MenuButton>
        {modalIsOpen && <MenuModal />}
        <Input
          type="search"
          placeholder="Поиск по названию"
          value={inputState}
          onChange={handleInputChange}
        />
      </div>
    </HeaderContainer>
  );
};
