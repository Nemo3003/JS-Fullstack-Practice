import {gql} from "apollo-server"

const persons = [
    {
        name: "John",
        phone: "123",
        street: "av fakestreet",
        city: "Mountain",
        id: "122jh3j2b"
    },
    {
        name: "Juan",
        phone: "1233",
        street: "av fakestreet",
        city: "Mountain",
        id: "122jh3j2b"
    },
    {
        name: "Hans",
        phone: "1233",
        street: "av fakestreet",
        city: "Mountain",
        id: "122jh3j2b"
    }
]
const typeDefs = gql`
    type Person{
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
}
    type Query{
        personCount: Int!
        allPersons: [Person]!
    }
`
//DEFINICION DE DATOS Y DE DONDE SACAMOS LOS DATOS. ESENCIAL EN GRAPHQL