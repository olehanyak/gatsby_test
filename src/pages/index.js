import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PersonSW from "../components/personSW"
import PersonPage from "./subject"
import { node } from "prop-types"

const IndexPage = (props) => {
  const persons = props.data.allStarWarsPersons.edges
  console.log(props);

  const showInfo = () => {
    return console.log(persons[1].node.name)
  }

  return (
    <div className="bg-main-theme h-screen flex flex-col text-center m-auto">
      <Layout>
        <Seo title="Home" />
        <section className="text-white">
          <h1 className='text-orange-600'>Persons of Star Wars</h1>

          <div className="flex justify-center">
            {persons.map((person, i) => {
              const personData = person.node
              return (
                <div key={i} className="w-34 h-34 border-solid bg-sky-500 m-1 rounded-md p-1">
                  <p>Name: {personData.name}</p>
                  <PersonSW personData={personData} />
                  <button onClick={() => showInfo()}>tr</button>
                </div>
              )
            })}
          </div>

        </section>
      </Layout>
    </div>
  )
}

export default IndexPage

export const query = graphql`
query AllStarWarsPersons {
  allStarWarsPersons {
    edges {
      node {      
        name      
      }
    }
  }
}
`;
