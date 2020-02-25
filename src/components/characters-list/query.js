import gql from "graphql-tag";

const GET_CHARACTERS = gql`
query Characters($species: String){
  characters(filter : {
    species: $species
  }) {
    results {
      id
      name
      image
    }
  }
}
`;

export { GET_CHARACTERS };