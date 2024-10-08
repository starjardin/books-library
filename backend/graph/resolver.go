package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"books-library/graph/model"

	"go.mongodb.org/mongo-driver/mongo"
)

type Resolver struct {
	todos          []*model.Todo
	UserCollection *mongo.Collection
}
