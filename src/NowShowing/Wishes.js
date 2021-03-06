import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../components/Section";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Poster from "../components/Poster";

const Container = styled.div`
  padding: 15px;
  background-color: #E2C458;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 30vh;
  width: 100%;
  color: #232E22;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: #96ABB5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #353F42;
    border-radius: 6px;
  }
`;

const Wishes = ({error, loading, wishData, onClickItem }) => {
  console.log({ wishData });
  return (
    <>
      <Helmet>
        <title>BIT_Miniproject2</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container className="WishesContainer">
          <Section title="나의 찜: 클릭하면 나의 찜에서 제거됩니다.">
            {wishData.map((movie) => (
              <Poster
                key={movie._id}
                id={movie._id}
                title={movie.title}
                imageUrl={movie.poster}
                rating={movie.vote_average}
                onClickPoster={onClickItem}
              />
            ))}
          </Section>
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};

export default Wishes;
