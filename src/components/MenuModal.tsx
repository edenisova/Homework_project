import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Flex } from "reflexbox";
import { filterbyStatus } from "../reducer";
import { locale } from "../locale";

const MenuModalContainer = styled(Flex)`
  position: absolute;
  background-color: #f5c27c;
  flex-direction: column;
`;

const MenuButton = styled.button`
  height: 50px;
  background-color: #ffa62b;
  color: white;
  border: 1px solid #16697a;
  border-radius: 5px;
`;

export const MenuModal = () => {
  const dispatch = useDispatch();
  const { willRead, readingComics, readComics } = locale.comicsStatus;
  const { removeFilters } = locale.button;

  const handleClick = (event: any) => {
    dispatch(filterbyStatus(event.target.value));
  };

  const handleClearClick = () => {
    dispatch(filterbyStatus(""));
  };

  return (
    <MenuModalContainer>
      <MenuButton value="read" onClick={handleClick}>
        {readComics}
      </MenuButton>
      <MenuButton value="reading" onClick={handleClick}>
        {readingComics}
      </MenuButton>
      <MenuButton value="willRead" onClick={handleClick}>
        {willRead}
      </MenuButton>
      <MenuButton value="clear" onClick={handleClearClick}>
        {removeFilters}
      </MenuButton>
    </MenuModalContainer>
  );
};
