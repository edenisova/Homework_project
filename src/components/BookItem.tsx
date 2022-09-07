import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { likeBook, dislikeBook } from "../actions";

type BookItemProps = {
  title: string;
  author: string;
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

const BookItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #16697a;
  height: 50px;
`;

const LikeButton = styled.button<LikeButtonProps>`
  background-color: ${({ isLiked }) => (isLiked ? "green" : "#82C0CC")};
  cursor: pointer;
  height: 100%;
  border: none;
  width: 70px;
`;

const DislikeButton = styled.button<DislikeButtonProps>`
  background-color: ${({ isDisliked }) => (isDisliked ? "red" : "#82C0CC")};
  cursor: pointer;
  height: 100%;
  border: none;
  width: 70px;
`;

export const BookItem = ({
  title,
  author,
  isLiked,
  isDisliked,
  bookId,
  status,
}: BookItemProps) => {
  const dispatch = useDispatch();
  const handleLikeClick = () => {
    dispatch(likeBook(bookId));
  };
  const handleDislikeClick = () => {
    dispatch(dislikeBook(bookId));
  };
  return (
    <BookItemContainer>
      <div>
        {" "}
        <Link to={`/${bookId}`} key={bookId}>
          {title}
        </Link>{" "}
        {author}
      </div>
      <div>
        <LikeButton
          isLiked={isLiked}
          onClick={handleLikeClick}
          disabled={isDisliked}
        >
          Liked
        </LikeButton>
        <DislikeButton
          isDisliked={isDisliked}
          onClick={handleDislikeClick}
          disabled={isLiked}
        >
          Disliked
        </DislikeButton>
      </div>
      
    </BookItemContainer>
  );
};
