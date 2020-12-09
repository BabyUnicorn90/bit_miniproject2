import React from "react";
import { moviesApi } from "../../api";
import styled from "styled-components";

import MovieList from "./MovieList";
import Wishes from "./Wishes";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true,
    wishArr: [],
  };

  constructor(props) {
    super(props);

    this.handleAddWish = this.handleAddWish.bind(this);
    this.handleRemoveWish = this.handleRemoveWish.bind(this);
  }

  async componentDidMount() {
    try {
      const {
        data: { result: nowPlaying },
      } = await moviesApi.nowshowing_list();
      console.log(nowPlaying);
      this.setState({ nowPlaying });
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  handleAddWish(id) {
    console.log(this.state);
    const target = this.state.nowPlaying.find((i) => i._id === id);
    console.log(target);

    this.setState(
      {
        wishArr: [...this.state.wishArr, target],
      },
      () => {
        console.log(this.state);
      }
    );
  }
  handleRemoveWish(id) {
    this.setState((prevState) => ({
      wishArr: prevState.wishArr.filter((i) => i._id !== id),
    }));
  }

  render() {
    const { nowPlaying, error, loading } = this.state;

    return (
      <>
        <Wrapper>
          <MovieList
            nowPlaying={nowPlaying}
            error={error}
            loading={loading}
            onClickItem={this.handleAddWish}
          />
          <Wishes
            wishData={this.state.wishArr}
            onClickItem={this.handleRemoveWish}
          />
        </Wrapper>
      </>
    );
  }
}
