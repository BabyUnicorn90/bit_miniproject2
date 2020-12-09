import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 13px;
  text-align: center;
`;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 180px;
  background-size: cover;
  border-radius: 8px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({
  id,
  imageUrl,
  title,
  rating,
  year,
  isMovie = false,
  onClickPoster,
}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer
        onClick={(e) => {
          e.preventDefault();
          onClickPoster(id);
        }}
      >
        <Image
          bgUrl={imageUrl || require("../assets/noPosterSmall.png")}
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
