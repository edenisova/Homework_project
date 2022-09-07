import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../actions";
import styled from "styled-components";

const MenuModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcd29f;
  width: 300px;
`;

const ModalPageContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  left: 0;
  top: 0;
  overflow: auto;
  display: flex; 
  align-items: center;
  justify-content: center;
`;

const InputData = styled.input`
border: none;
`;

const InputLabel = styled.label`
align-self: start;
margin-top: 10px;
margin-bottom: 3px;
`;

const InputText = styled.textarea`
  height: 100px;
  border: none;
`;

const CloseButton = styled.button`
  width: 65px;
  align-self: end;
  background-color: #489FB5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InputSelect = styled.select`
background-color: #82C0CC;
margin-bottom: 10px;
`;

const AddButton = styled.button`
  height: 50px;
  background-color: #82c0cc;
  border: 1px solid #16697a;
  border-radius: 5px;
  margin-top: 10px;
`;

type AddBookModalProps = {
  modalIsOpen: boolean;
  onClose: (active: boolean) => void;
};

export const AddBookModal = ({ modalIsOpen, onClose }: AddBookModalProps) => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    bookId: Date.now(),
    description: "",
    isLiked: false,
    isDisliked: false,
    status: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setBookInfo({ ...bookInfo, [event.target.name]: event.target.value });
  };

  const addNewBook = () => {
    dispatch(addBook(bookInfo));
    onClose(false);
  };

  const handleClose = () => {
    onClose(false);
  };
  return (
    <ModalPageContainer>
      <MenuModalContainer>
        <CloseButton onClick={handleClose}>Закрыть</CloseButton>
        <InputLabel>Название книги</InputLabel>
        <InputData
          type="text"
          id="title"
          name="title"
          value={bookInfo.title}
          onChange={handleChange}
          placeholder="Название"
        />
        <InputLabel>Автор книги</InputLabel>
        <InputData
          type="text"
          id="author"
          name="author"
          value={bookInfo.author}
          onChange={handleChange}
          placeholder="Автор"
        />
        <InputLabel>Описание книги</InputLabel>
        <InputText
          name="description"
          value={bookInfo.description}
          onChange={handleChange}
          placeholder="Описание"
        />
        <InputLabel>Статус</InputLabel>
        <InputSelect
          name="status"
          value={bookInfo.status}
          onChange={handleChange}
        >
          <option value="read">Прочитанные</option>
          <option value="reading">В процессе чтения</option>
          <option value="willRead">Хочу прочитать</option>
        </InputSelect>
        <AddButton
          onClick={addNewBook}
          disabled={
            !bookInfo.author && !bookInfo.description && !bookInfo.title
          }
        >
          Добавить книгу
        </AddButton>
      </MenuModalContainer>
    </ModalPageContainer>
  );
};
