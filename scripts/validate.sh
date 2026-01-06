#!/bin/bash
set -e

echo "Running validation checks..."

if [ ! -f "ci-cd/Jenkinsfile" ]; then
  echo "Jenkinsfile missing!"
  exit 1
fi

echo "Validation successful."
