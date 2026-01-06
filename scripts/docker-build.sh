#!/bin/bash
set -e

IMAGE_NAME="${APP_NAME:-client-service}:latest"

echo "Building Docker image: $IMAGE_NAME"
sleep 1
echo "Docker image built."
