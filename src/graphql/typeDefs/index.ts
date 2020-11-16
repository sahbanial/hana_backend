import * as fs from 'fs';
const userType = fs.readFileSync('./src/graphql/typeDefs/user.graphql', 'utf-8');
const userWall = fs.readFileSync('./src/graphql/typeDefs/userWall.graphql', 'utf-8');
const posts = fs.readFileSync('./src/graphql/typeDefs/posts.graphql', 'utf-8');
const schema = fs.readFileSync('./src/graphql/typeDefs/schema.graphql', 'utf-8');
const notification = fs.readFileSync('./src/graphql/typeDefs/notification.graphql', 'utf-8');
const graphql = ''.concat(userType,posts,userWall, notification,schema);
export default graphql;
