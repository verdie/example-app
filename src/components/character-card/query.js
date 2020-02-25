import gql from "graphql-tag";

const GET_CHARACTER = gql`
  query Character($id: ID) {
    character (id: $id) {
      name
      species
      image
      status
      gender
      location {
        name
      }
    }
  }
`;

export { GET_CHARACTER };