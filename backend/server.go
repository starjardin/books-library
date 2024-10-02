package main

import (
	database "books-library/db"
	"books-library/graph"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/mongo"
)

const defaultPort = "8080"

var userCollection *mongo.Collection

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	client, err := database.ConnectToMongoDB()

	if err != nil {
		fmt.Errorf("failed to connect to MongoDB: %w", err)
	}

	userCollection = client.Database("onja-library").Collection("users")

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{
		UserCollection: userCollection,
	}}))

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
		Debug:            true,
	})

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", c.Handler(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
