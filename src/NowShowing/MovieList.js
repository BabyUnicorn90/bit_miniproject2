import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../components/Section";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Poster from "../components/Poster";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 70vh;
  width: 100%;
  

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

const MovieList = ({ nowPlaying, error, loading, onClickItem }) => {
  return (
    <>
      <Helmet>
        <title>BIT_Miniproject2</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="현재상영작: 보고싶은 영화를 클릭하세요">
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie._id}
                  id={movie._id}
                  title={movie.title}
                  imageUrl={movie.poster}
                  rating={movie.star}
                  onClickPoster={onClickItem}
                />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};
export default MovieList;
