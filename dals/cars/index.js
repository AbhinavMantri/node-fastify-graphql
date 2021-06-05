const  { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
   
`);

const  root = {
    getProducts: () => {
        return 'Hello products';
    }
}

graphql(schema, '{ Product }', root).then((response) => {
    console.log(response);
})
