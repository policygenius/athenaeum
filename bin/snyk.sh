#!/bin/sh

snyk auth $SNYK_AUTH_TOKEN
snyk monitor --all-projects --org=cicd-6lp --prune-repeated-subdependencies
