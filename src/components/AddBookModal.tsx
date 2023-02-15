import React from "react";
import { Box, Flex } from "reflexbox";
import { connect } from "react-redux";
import { addBooks } from "../reducer";
import { locale } from "../locale";
import { AppState, Comics, ReadComics } from "../types";
import styled from "styled-components";
import { Action, Dispatch } from "redux";

const ModalPageContainer = styled(Flex)`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  overflow: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InputLabel = styled.label`
  align-self: start;
  margin-top: 10px;
  margin-bottom: 3px;
`;

const CloseButton = styled.button`
  width: 65px;
  align-self: end;
  background-color: #489fb5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InputSelect = styled.select`
  background-color: #82c0cc;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  height: 50px;
  background-color: #82c0cc;
  border: 1px solid #16697a;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const ErrorText = styled(Box)`
  color: red;
  font-size: 10px;
`;

type AddBookModalProps = {
  booksArr: Array<Comics>;
  comicsList: Array<ReadComics>;
  addComicsToList: (addedComics: ReadComics) => void;
  modalIsOpen: boolean;
  onClose: (active: boolean) => void;
};


class AddBookModal extends React.Component<AddBookModalProps, any> {
  constructor(props: AddBookModalProps) {
    super(props);
    this.state = {
      bookInfo: {
        comicsId: undefined,
        isLiked: false,
        isDisliked: false,
        status: "willRead",
      },
      comics: [],
      isError: false,
    };
  }

  componentDidMount() {
    this.setState({ comics: this.props.booksArr });
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (
      event.target.name === "comicsId" &&
      this.props.comicsList.find(
        (item) => item.id === Number(event.target.value)
      )
    ) {
      this.setState({ isError: true });
    }
    this.setState({
      bookInfo: {
        ...this.state.bookInfo,
        [event.target.name]: event.target.value,
      },
    });
  }

  handleClose() {
    this.props.onClose(false);
  }

  addNewBook() {
    const addedComics = this.props.booksArr.find(
      (item: Comics) => item.id === Number(this.state.bookInfo.comicsId)
    );
    this.props.addComicsToList({ ...addedComics, ...this.state.bookInfo });
    this.props.onClose(false);
  }

  render() {
    const { addComic, close } = locale.button;
    const { willRead, readingComics, readComics } = locale.comicsStatus;
    const { comicsLabel, statusLabel } = locale.commonLabels;
    const { addedComicText } = locale.errors;
    return (
      <ModalPageContainer>
        <Flex flexDirection="column" width="300px" backgroundColor="#fcd29f">
          <CloseButton onClick={() => this.handleClose()}>{close}</CloseButton>
          <InputLabel>{comicsLabel}</InputLabel>
          <select
            onChange={(event) => this.handleChange(event)}
            name="comicsId"
          >
            {this.state.comics &&
              this.state.comics.map((item: Comics, index: number) => {
                return <option value={item.id}>{item?.title}</option>;
              })}
          </select>
          {this.state.isError && <ErrorText>{addedComicText}</ErrorText>}
          <InputLabel>{statusLabel}</InputLabel>
          <InputSelect
            name="status"
            value={this.state.bookInfo.status}
            onChange={(event) => this.handleChange(event)}
          >
            <option value="read">{readComics}</option>
            <option value="reading">{readingComics}</option>
            <option value="willRead">{willRead}</option>
          </InputSelect>
          <AddButton
            onClick={() => this.addNewBook()}
            disabled={this.state.isError}
          >
            {addComic}
          </AddButton>
        </Flex>
      </ModalPageContainer>
    );
  }
}

function mapStateToProps(state: AppState) {
  return { booksArr: state.books, comicsList: state.readComics };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    addComicsToList: (addedComics: ReadComics) => {
      dispatch(addBooks(addedComics));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookModal);
