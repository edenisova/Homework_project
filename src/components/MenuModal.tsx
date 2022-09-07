import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { filterBookByStatus } from "../actions";

const MenuModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #f5c27c;
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
  const handleClick = (event: any) => {
    dispatch(filterBookByStatus(event.target.value));
  };

  const handleClearClick = () => {
    dispatch(filterBookByStatus(""));
  };

  return (
    <MenuModalContainer>
      <MenuButton value="read" onClick={handleClick}>
        Прочитанные книги
      </MenuButton>
      <MenuButton value="reading" onClick={handleClick}>
        В процессе чтения
      </MenuButton>
      <MenuButton value="willRead" onClick={handleClick}>
        Хочу прочитать
      </MenuButton>
      <MenuButton value="clear" onClick={handleClearClick}>
        Сбросить фильтры
      </MenuButton>
    </MenuModalContainer>
  );
};
