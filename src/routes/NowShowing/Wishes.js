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

const Wishes = ({ user_favorite, error, loading, wishData, onClickItem }) => {
  console.log({ wishData })
  return (
    <>
      <Helmet>
        <title>Wishes | 비트미니프로젝트2</title>
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
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
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
