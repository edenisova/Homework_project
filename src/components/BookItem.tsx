import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Flex } from "reflexbox";
import { Link } from "react-router-dom";
import { changeLikes, changeDislikes } from "../reducer";
import { locale } from "../locale";

type BookItemProps = {
  title?: string;
  isLiked: boolean;
  isDisliked: boolean;
  status: string;
  bookId: number;
};

type LikeButtonProps = {
  isLiked: boolean;
};

type DislikeButtonProps = {
  isDisliked: boolean;
};

const BookItemContainer = styled(Flex)`
  border-bottom: 1px solid #16697a;
  justify-content: space-between;
  height: 50px;
`;

const LikeButton = styled.button<LikeButtonProps>`
  background-color: ${({ isLiked }) => (isLiked ? "green" : "#82C0CC")};
  cursor: pointer;
  height: 100%;
  border: none;
  width: 70px;
  border-radius: 5px;
`;

const DislikeButton = styled.button<DislikeButtonProps>`
  background-color: ${({ isDisliked }) => (isDisliked ? "red" : "#82C0CC")};
  cursor: pointer;
  height: 100%;
  border: none;
  width: 70px;
  border-radius: 5px;
`;

export const BookItem = ({
  title,
  isLiked,
  isDisliked,
  bookId,
  status,
}: BookItemProps) => {
  const dispatch = useDispatch();
  const { likeButton, dislikeButton } = locale.button;
  const handleLikeClick = () => {
    dispatch(changeLikes(bookId));
  };
  const handleDislikeClick = () => {
    dispatch(changeDislikes(bookId));
  };
  return (
    <BookItemContainer>
      <div>
        {" "}
        <Link to={`/${bookId}`} key={bookId}>
          {title}
        </Link>{" "}
      </div>
      <div>
        <LikeButton
          isLiked={isLiked}
          onClick={handleLikeClick}
          disabled={isDisliked}
        >
          {likeButton}
        </LikeButton>
        <DislikeButton
          isDisliked={isDisliked}
          onClick={handleDislikeClick}
          disabled={isLiked}
        >
          {dislikeButton}
        </DislikeButton>
      </div>
    </BookItemContainer>
  );
};
