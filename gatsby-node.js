const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({
  actions
}) => {
  const {
    createNode
  } = actions;

  // fetch raw data from the randomuser api
  const fetchPersonsOfSW = () => axios.get("https://swapi.dev/api/people/")
    .then(response => response.data)
  // await for results
  const res = await fetchPersonsOfSW();

  // map into these results and create nodes
  res.results.map((person, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `StarWarsPersons`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      // league: user.gender,

      birth_year: person.birth_year,
      eye_color: person.eye_color,
      gender: person.gender,
      hair_color: person.hair_color,
      height: person.height,
      homeworld: person.homeworld,
      mass: person.mass,
      name: person.name,
      skin_color: person.skin_color,

      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });

  return;
}




exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
