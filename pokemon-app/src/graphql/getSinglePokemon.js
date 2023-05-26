import { gql } from '@apollo/client';

export const singlePoke = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      image
    }
  }
`;