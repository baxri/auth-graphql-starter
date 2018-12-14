const graphql = require('graphql');
const UserType = require('./schema/user_type');

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: 'UserType',
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parentValue, args, request) {

            }
        }
    }
});

module.exports = mutation;


