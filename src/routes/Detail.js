import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    // console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail__info">
            <h3 className="detail__title">{location.state.title_long}</h3>
            <ul className="detail__genres">
              {location.state.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
