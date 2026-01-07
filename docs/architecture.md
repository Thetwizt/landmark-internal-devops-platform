# Landmark Internal DevOps Platform

## Overview
This repository contains the internal DevOps platform used to deploy and manage client applications on AWS.
The platform standardises CI/CD workflows, infrastructure provisioning, and Kubernetes-based deployments
across multiple environments.

## Environments
- Development (dev): Continuous deployment for rapid feedback
- Staging (staging): Pre-production validation with manual approval
- Production (prod): Controlled releases with rollback capability

## Tooling
- AWS (EKS, ECR, IAM, VPC)
- Jenkins for CI/CD pipelines
- Terraform for infrastructure as code
- Docker and Kubernetes for container orchestration
- Shell scripting for automation and operational tasks

## Responsibility
The platform is maintained by the DevOps team and is designed to support multiple client services
while ensuring reliability, security, and consistency across deployments.
## Application Services

### Web App
- Node.js HTTP service
- Runs on port 3000
- Containerized using Docker
- Built and deployed via CI/CD pipelines
