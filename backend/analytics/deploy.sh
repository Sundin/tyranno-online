#!/bin/bash

set -euo pipefail

sam build --template-file template.yml

sam deploy \
    --template-file .aws-sam/build/template.yaml \
    --stack-name armory-analytics \
    --capabilities CAPABILITY_IAM \
    --region eu-west-1 \
    --s3-bucket armory-online \
    --no-fail-on-empty-changeset

echo "Deployment successful. Your base URL is:"

aws cloudformation describe-stacks \
        --stack-name armory-analytics \
        --region eu-west-1 \
        --query 'Stacks[].Outputs' | cat
