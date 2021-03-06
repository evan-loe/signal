import React from "react";
import "./Genres.css";

const client_id = "81aba320a1ad4c94b67b09675dec5622";

function Genres() {
  return (
    <div className="wrapper">
      <Box
        img={require("./images/jazz.jpg")}
        title="Jazz"
        button="Select"
        selectedGenre="jazz"
      ></Box>

      <Box
        img={require("./images/classical.jpg")}
        title="Classical"
        button="Select"
        selectedGenre="classical"
      ></Box>

      <Box
        img={require("./images/indie-pop.jpg")}
        title="Indie-pop"
        button="Select"
        selectedGenre="indie-pop"
      ></Box>

      <Box
        img={require("./images/hip-hop.jpg")}
        title="Hip-hop"
        button="Select"
        selectedGenre="hip-hop"
      ></Box>
    </div>
  );
}

function Box(props) {
  function spotify() {
    console.log(props.selectedGenre);
    localStorage.setItem("selectedGenre", props.selectedGenre);

    const redirect_uri =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001/api/callback"
        : "https://bpmingle.herokuapp.com/api/callback";
    let url = "https://accounts.spotify.com/authorize?";
    url += "client_id=" + client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=streaming user-modify-playback-state";
    window.location.href = url; // redirect user
  }

  return (
    <div className="box">
      <img className="cardImg" src={props.img} alt="card"></img>
      <h2 className="title">{props.title}</h2>
      <button className="boxButton" onClick={spotify}>
        {props.button}
      </button>
    </div>
  );
}
export default Genres;
