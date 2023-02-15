import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Flex } from "reflexbox";
import { filterByName } from "../reducer";
import { locale } from "../locale";
import { MenuModal } from "./MenuModal";

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
  const { menuLabel } = locale.commonLabels;
  const [inputState, setInputState] = useState("");
  const onMenuClick = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const handleInputChange = (event: any) => {
    setInputState(event.target.value);
    dispatch(filterByName(event.target.value));
  };
  return (
    <Flex
      justifyContent="space-between"
      height="50px"
      backgroundColor="#fcd29f"
    >
      <div>
        <MenuButton onClick={onMenuClick}>{menuLabel}</MenuButton>
        {modalIsOpen && <MenuModal />}
        <Input
          type="search"
          placeholder="Поиск по названию"
          value={inputState}
          onChange={handleInputChange}
        />
      </div>
    </Flex>
  );
};
