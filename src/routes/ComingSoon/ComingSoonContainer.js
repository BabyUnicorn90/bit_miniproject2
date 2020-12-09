import React from "react";
import { moviesApi } from "../../api";

import UpcomingMovieList from "./UpcomingMovieList";

export default class extends React.Component {
  state = {
    comingsoon: null,
    error: null,
    loading: true,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const {
        data: { result: comingsoon },
      } = await moviesApi.comingsoon_list();
      
      this.setState({ comingsoon });
    } catch (error) {
      console.log(error);
      this.setState({
        error: "영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    console.log(this.state)
    const { comingsoon, error, loading } = this.state;

    return (
      <UpcomingMovieList
        comingsoon={comingsoon}
        error={error}
        loading={loading}
      />
    );
  }
}
