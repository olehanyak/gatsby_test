import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';

const PersonPage = (props) => {
  const personInfo = props.data.allStarWarsPersons.edges
  console.log(props);
  return (
    <Layout>
      <Seo title='Person of Star Wars' />
      <div>
        {personInfo.map((person, i) => {
          const personData = person.node
          return (
            <div key={i}>
              <p>{personData.name}</p>
              <p>{personData.gender}</p>
              <p>{personData.homeworld}</p>
              <hr/>
            </div>
          )
        })}
      </div>

    </Layout>
  );
}

export default PersonPage

export const query = graphql`
query StarWarsPerson {
  allStarWarsPersons {
    edges {
      node {
        birth_year
        eye_color
        gender
        height
        hair_color
        homeworld
        mass
        name
        skin_color
      }
    }
  }
}
`;
