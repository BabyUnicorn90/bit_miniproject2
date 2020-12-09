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

const UpcomingMovieList = ({ comingsoon: comingsoon_list, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>MyList | 비트미니프로젝트2</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          서비스 준비중
          {comingsoon_list && comingsoon_list.length > 0 && (
            <Section title="상영예정작: 보고싶은 영화를 클릭하세요">
              {comingsoon_list.map((movie) => (
                <Poster
                  key={movie._id}
                  id={movie._id}
                  title={movie.title}
                  imageUrl={movie.poster}
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

export default UpcomingMovieList;
