import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex } from "reflexbox";
import { useNavigate } from "react-router-dom";
import { getComicsList } from "../state";
import { useParams } from "react-router-dom";
import { useComicsCharacters } from "../useComicsCharacters";
import {
  deleteBooks,
  changeStatus,
  resetChosenComic,
} from "../reducer";
import { locale } from "../locale";
import { IMAGE_SIZES } from "../constants";

const BookItemContainer = styled(Flex)`
  font: "Verdana" sans-serif;
  justify-content: space-between;
  flex-direction: column;
  color: #0b132b;
  padding: 10px;
`;

const ComicsInfo = styled(Flex)`
  padding: 20px 20px 20px 0;
`;

const ComicsCover = styled.img`
  margin-right: 30px;
`;

const BookPageButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #489fb5;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const BookTitle = styled(Box)`
  font-size: 40px;
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
`;

const InputSelect = styled.select`
  margin-top: 20px;
  background-color: #82c0cc;
  width: 50%;
`;

const {
  comicsStatus: { willRead, readingComics, readComics },
  button: { back, deleteComic },
} = locale;

export const BookPage = () => {
  const { bookId } = useParams();
  const readComicsList = useSelector(getComicsList);
  const comicsItem = readComicsList.find((item) => item.id === Number(bookId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(comicsItem?.status);

  useEffect(() => {
    if (bookId) {
      //comicsItem = readComics.find(item => item.id === Number(bookId))
    }
    return () => {
      //dispatch(resetChosenComic());
    };
  }, [bookId]);

  const handleBackButtonClick = () => {
    navigate("/");
  };
  const handleDeleteButtonClick = () => {
    dispatch(deleteBooks(Number(bookId)));
    navigate("/");
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    dispatch(changeStatus({ id: Number(bookId), status: event.target.value }));
  };
  return (
    <BookItemContainer>
      <Flex justifyContent="space-between">
        <BookPageButton onClick={handleBackButtonClick}>{back}</BookPageButton>
        <BookPageButton onClick={handleDeleteButtonClick}>
          {deleteComic}
        </BookPageButton>
      </Flex>
      <ComicsInfo>
        <ComicsCover
          src={`${comicsItem?.thumbnail?.path}/${IMAGE_SIZES.INCREDIBLE}.${comicsItem?.thumbnail?.extension}`}
        />
        <Flex flexDirection="column">
          <BookTitle>{comicsItem?.title}</BookTitle>
          {comicsItem?.creators?.items?.map((author) => {
            return (
              <Box textAlign="left" fontSize="20px">
                {author.name} - {author.role}
              </Box>
            );
          })}
          <Box mt={20} width="50%" textAlign="left" fontSize="20px">
            {comicsItem?.description}
          </Box>
        </Flex>
      </ComicsInfo>
      <InputSelect name="status" value={inputValue} onChange={handleChange}>
        <option value="read">{readComics}</option>
        <option value="reading">{readingComics}</option>
        <option value="willRead">{willRead}</option>
      </InputSelect>
    </BookItemContainer>
  );
};
