import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "reflexbox";
import {
  getAllBooks,
  getFilterName,
  getFilterStatus,
  getComicsList,
} from "../state";
import { BookItem } from "./BookItem";
import { Header } from "./Header";
import { getBooks } from "../reducer";
import { locale } from "../locale";
import AddBookModal from "./AddBookModal";

const Wrapper = styled(Box)`
  position: relative;
  height: 100%;
`;

const AddBookButton = styled.button`
  height: 50px;
  border-radius: 5px;
  background-color: #82c0cc;
  border: none;
  cursor: pointer;
`;

export const MainPage = () => {
  const BooksArr = useSelector(getAllBooks);
  const comicsArr = useSelector(getComicsList);
  const filterTitle = useSelector(getFilterName);
  const filterStatus = useSelector(getFilterStatus);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { addComic } = locale.button;

  useEffect(() => {
    if (!BooksArr.length) {
      dispatch(getBooks());
    }
  }, []);

  const onMenuClick = () => {
    setModalIsOpen(true);
  };
  let showedBooks = filterTitle
    ? comicsArr.filter((book) => {
        return book.title?.toLowerCase().includes(filterTitle);
      })
    : comicsArr;
  showedBooks = filterStatus
    ? showedBooks.filter((book) => {
        return book.status === filterStatus;
      })
    : showedBooks;
  return (
    <Wrapper>
      <Header />
      {showedBooks &&
        showedBooks?.map((item) => (
          <BookItem
            title={item.title}
            isLiked={item.isLiked}
            isDisliked={item.isDisliked}
            status={item.status}
            bookId={item.id}
          />
        ))}
      <AddBookButton onClick={onMenuClick}>{addComic}</AddBookButton>
      {modalIsOpen && (
        <AddBookModal modalIsOpen={modalIsOpen} onClose={setModalIsOpen} />
      )}
    </Wrapper>
  );
};
