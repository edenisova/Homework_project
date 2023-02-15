import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Flex } from "reflexbox";
import { filterByName } from "../reducer";
import { MenuModal } from "./MenuModal";
import { Character } from "../types";

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

type ComicsCharatersListProps = {
  characetersList: Array<Character>;
};

export const ComicsCharatersList = ({
  characetersList,
}: ComicsCharatersListProps) => {
  return (
    <Flex justifyContent="space-between">
      <Flex flexDirection="column"></Flex>
    </Flex>
  );
};
