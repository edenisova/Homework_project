import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAllBooks, getFilterName, getFilterStatus } from "../state";
import { BookItem } from "./BookItem";
import { Header } from "./Header";
import { AddBookModal } from "./AddBookModal";

const Wrapper = styled.div`
  background: #ede7e3;
  position: relative;
  height: 100vh;
`;

const AddBookButton = styled.button`
  height: 50px;
  background-color: #82c0cc;
  border: none;
  cursor: pointer;
`;

export const MainPage = () => {
  const BooksArr = useSelector(getAllBooks);
  const filterTitle = useSelector(getFilterName);
  const filterStatus = useSelector(getFilterStatus);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const onMenuClick = () => {
    setModalIsOpen(true);
  };
  let showedBooks = filterTitle
    ? BooksArr.filter((book) => {
        return book.title.toLowerCase().includes(filterTitle);
      })
    : BooksArr;
  showedBooks = filterStatus
    ? showedBooks.filter((book) => {
        return book.status === filterStatus;
      })
    : showedBooks;
  return (
    <Wrapper>
      <Header />
      {showedBooks && showedBooks?.map((item) => (
        <BookItem
          title={item.title}
          author={item.author}
          isLiked={item.isLiked}
          isDisliked={item.isDisliked}
          status={item.status}
          bookId={item.bookId}
        />
      ))}
      <AddBookButton onClick={onMenuClick}>Добавить книгу</AddBookButton>
      {modalIsOpen && (
        <AddBookModal modalIsOpen={modalIsOpen} onClose={setModalIsOpen} />
      )}
    </Wrapper>
  );
};
