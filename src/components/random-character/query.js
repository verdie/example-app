import gql from "graphql-tag";

const GET_CHARACTERS_COUNT = gql`
query Characters {
  characters {
    info {
      count
    }
  }
}
`;

export { GET_CHARACTERS_COUNT };