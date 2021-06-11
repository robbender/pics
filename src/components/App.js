import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 9XvhPxp1mKzFZa1VG7uSbj1gWgdBRr1PyK7kf9-0Nz0",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Pics</h1>
        {/* Doesn't have to be 'onSubmit'; could be anything...when used on a unique component. */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
