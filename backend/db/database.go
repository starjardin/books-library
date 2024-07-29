package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToMongoDB() (*mongo.Client, error) {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Get the MongoDB connection URL from local.env
	mongoURL := os.Getenv("MONGO_URI")
	if mongoURL == "" {
		return nil, fmt.Errorf("MONGO_URI environment variable is not set")
	}

	// Set up the MongoDB client options
	clientOptions := options.Client().ApplyURI(mongoURL)

	// Connect to MongoDB
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		return nil, err // Changed from log.Fatal(err)
	}

	// Ping the MongoDB server to check the connection
	err = client.Ping(context.Background(), nil)
	if err != nil {
		return nil, err // Changed from log.Fatal(err)
	}

	fmt.Println("Successfully connected and pinged MongoDB!")

	return client, nil
}
