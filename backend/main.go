package main

import (
    "log"
    "net/http"

    "github.com/graphql-go/graphql"
    "github.com/graphql-go/handler"
)

func main() {
    // Define the GraphQL Schema
    fields := graphql.Fields{
		"hello": &graphql.Field{
			Type: graphql.String,
            Resolve: func(p graphql.ResolveParams) (interface{}, error) {
				return "world", nil
            },
        },
    }
    rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}
    schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}
    schema, err := graphql.NewSchema(schemaConfig)
    if err != nil {
		log.Fatalf("failed to create new schema, error: %v", err)
    }
	
    // Configure the HTTP handler
    h := handler.New(&handler.Config{
		Schema: &schema,
        Pretty: true,
    })
	
    // Serve the API
	http.Handle("/graphql", h)
	log.Fatal(http.ListenAndServe(":8080", nil))
}