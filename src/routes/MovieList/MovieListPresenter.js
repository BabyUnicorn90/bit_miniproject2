import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>MovieList | 비트미니프로젝트2</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="현재 상영작">
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie._id}
                  id={movie._id}
                  title={movie.title}
                  imageUrl={movie.poster}
                  rating={movie.star}
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

export default HomePresenter;
