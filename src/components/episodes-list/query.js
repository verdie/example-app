import gql from "graphql-tag";

const GET_EPISODES = gql`
  query Episodes($page: Int){
    episodes(page: $page) {
      results {
        id
        name
        episode
        air_date
      }
      info {
        pages
      }
    }
  }
`;

export { GET_EPISODES };