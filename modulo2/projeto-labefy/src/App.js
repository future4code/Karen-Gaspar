import React from "react";
import axios from "axios";
import PlaylistsCreation from "./Components.js/PlaylistsCreation";
import PlaylistsLibrary from "./Components.js/PlaylistsLibrary";
import PlaylistsInfo from "./Components.js/PlaylistsInfo";

class App extends React.Component {
  render() {
    return (
      <div>
        <PlaylistsCreation/>
        <PlaylistsLibrary/>
        <PlaylistsInfo/>
      </div>
    );
  }

}

export default App;
