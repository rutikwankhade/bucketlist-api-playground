## 🤖 Bucket List API Playground
This API was built for one of my side broject called [bucket app](https://bucket.vercel.app) which helps to create and track your bucket list.

<img src="https://user-images.githubusercontent.com/47467468/161211822-c35d145f-e43b-463c-b042-111a32c7f7cb.png"/>



A sample query that returns bucket list ideas with category creative

```
query MyQuery {
  ideas(where: {category: {_eq: "creative"}}) {
    id,
    idea
  }
}
```

- Built with [graphql-playground-react](https://www.npmjs.com/package/graphql-playground-react)

- Read my blog here [Building a bucket list ideas API with Hasura and GraphQL](https://blog.rutikwankhade.dev/building-a-bucket-list-ideas-api-with-hasura-and-graphql)