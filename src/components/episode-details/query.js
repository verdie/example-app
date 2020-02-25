import gql from "graphql-tag";

const GET_EPISODE_CHARACTERS = gql`
query Episode($id: ID) {
  episode(id: $id) {
    characters {
      id
      name
      image
    }
  }
}
`;

export { GET_EPISODE_CHARACTERS };