import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBooks } from "../state";
import { useParams } from "react-router-dom";
import { deleteBook, changeBookStatus } from "../actions";

const BookItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font: "Verdana" sans-serif;
  padding: 10px;
  color: #0b132b;
`;

const BookPageButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #489fb5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const BookTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
`;

const BookAuthor = styled.div`
  font-size: 30px;
  text-align: left;
`;
const InputSelect = styled.select`
  margin-top: 20px;
  background-color: #82c0cc;
  width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookDescription = styled.div`
  font-size: 20px;
  margin-top: 20px;
  width: 50%;
  text-align: left;
`;

export const BookPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BooksArr = useSelector(getAllBooks);
  const bookById = BooksArr.find(
    (book) => book.bookId === Number(params.bookId)
  );
  const [inputValue, setInputValue] = useState(bookById?.status);
  const handleBackButtonClick = () => {
    navigate("/");
  };
  const handleDeleteButtonClick = () => {
    dispatch(deleteBook(params.bookId));
    navigate("/");
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    dispatch(
      changeBookStatus({ id: params.bookId, status: event.target.value })
    );
  };
  return (
    <BookItemContainer>
      <ButtonContainer>
        <BookPageButton onClick={handleBackButtonClick}>Назад</BookPageButton>
        <BookPageButton onClick={handleDeleteButtonClick}>
          Удалить
        </BookPageButton>
      </ButtonContainer>
      <BookTitle>{bookById?.title}</BookTitle>
      <BookAuthor>{bookById?.author}</BookAuthor>
      <BookDescription>{bookById?.description}</BookDescription>
      <InputSelect name="status" value={inputValue} onChange={handleChange}>
        <option value="read">Прочитанные</option>
        <option value="reading">В процессе чтения</option>
        <option value="willRead">Хочу прочитать</option>
      </InputSelect>
    </BookItemContainer>
  );
};
