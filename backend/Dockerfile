# Start by using the Go image for the build stage
FROM golang:1.23 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Go mod and sum files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go application with static linking
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o books-library

# Use a minimal base image to run the application (Alpine)
FROM alpine:3.18

# Set up working directory
WORKDIR /root/

# Copy the built Go binary from the builder stage
COPY --from=builder /app/books-library .

# Expose the port your Go server is using
EXPOSE 8080

# Command to run the Go application
CMD ["./books-library"]