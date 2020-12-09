import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../components/Section";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Poster from "../components/Poster";

const Container = styled.div`
  padding: 20px;
  background-color: #E2C458;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: scroll;
  height: 30vh;
  width: 100%;
  text-color: #232E22;

  overflow: scroll;
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

const Wishes = ({ user_favorite, error, loading, wishData, onClickItem }) => {
  console.log({ wishData });
  return (
    <>
      <Helmet>
        <title>BIT_Miniproject2</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container className="container">
          <Section title="나의 찜">
            {wishData.map((movie) => (
              <Poster
                key={movie._id}
                id={movie._id}
                title={movie.title}
                imageUrl={movie.poster}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
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
