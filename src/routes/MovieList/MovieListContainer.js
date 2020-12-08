import React from "react";
import { moviesApi } from "../../api";
import MovieListPresenter from "./MovieListPresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      this.setState({ nowPlaying,});
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

  console.log(nowPlaying)
  
  render() {
    const { nowPlaying, error, loading } = this.state;

    return (
      <MovieListPresenter
        nowPlaying={nowPlaying}
        error={error}
        loading={loading}
      />
    );
  }
}
