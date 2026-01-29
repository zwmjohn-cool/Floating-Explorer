#!/bin/bash

# Update version to 1.4.0 in all relevant files

VERSION="1.4.0"

# Update manifest.json
sed -i '' 's/"version": "[^"]*"/"version": "'"$VERSION"'"/' manifest.json

# Update package.json
sed -i '' 's/"version": "[^"]*"/"version": "'"$VERSION"'"/' package.json

echo "✅ Updated version to $VERSION in:"
echo "   - manifest.json"
echo "   - package.json"
