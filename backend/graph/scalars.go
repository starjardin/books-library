package graph

import (
	"fmt"
	"io"
	"strconv"

	"github.com/99designs/gqlgen/graphql"
)

func MarshalObjectID(id string) graphql.Marshaler {
	return graphql.WriterFunc(func(w io.Writer) {
		io.WriteString(w, strconv.Quote(id))
	})
}

func UnmarshalObjectID(v interface{}) (string, error) {
	switch v := v.(type) {
	case string:
		return v, nil
	case *string:
		return *v, nil
	default:
		return "", fmt.Errorf("%T is not a string", v)
	}
}
