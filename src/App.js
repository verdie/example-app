import React, { Component } from "react";
import { render } from "react-dom";
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import EpisodesList from "./components/episodes-list";
import Menu from "./components/menu"
import EpisodeDetails from "./components/episode-details";
import CharacterCard from "./components/character-card";
import RandomCharacter from "./components/random-character";

import "./App.css"

const client = new ApolloClient({
  uri: `https://rickandmortyapi.com/graphql/`,
  // fetchOptions: {
  //   mode: "no-cors",
  // },
});

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Menu />
          <main className="main">
            <Switch>
              <Route path='/categories' exact component={EpisodesList}/>
              <Route path='/categories/:id' exact component={EpisodeDetails} />
              <Route path='/characters/:id' exact component={CharacterCard} />
              <Route path='/random-character' exact component={RandomCharacter} />
              <Redirect from='/' to='/categories' />
            </Switch>
          </main>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
