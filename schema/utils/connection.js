const {
    fromGlobalId,
    nodeDefinitions,
} = require('graphql-relay');

const { nodeInterface, nodeField } = nodeDefinitions(
  globalID => {
    const { type, id } = fromGlobalId(globalID);
    
    // Log to NodeJS console the mapping from globalId/Node ID  
    // to actual object type and id
    console.log('NodeDefinitions (globalId), id:', id);
    console.log('NodeDefinitions (globalId), type:', type);
  },
  obj => {
    console.log(obj);
    return null;
  }
);

module.exports = { nodeInterface, nodeField };