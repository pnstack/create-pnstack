#!/bin/bash

# Function to display usage
show_usage() {
    echo "Usage: $0 [patch|minor|major] [--publish]"
    echo "Example: $0 patch --publish"
    exit 1
}

# Function to increment version
increment_version() {
    local version=$1
    local release=$2
    
    IFS='.' read -ra ver <<< "$version"
    major=${ver[0]}
    minor=${ver[1]}
    patch=${ver[2]}
    
    case $release in
        major)
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        minor)
            minor=$((minor + 1))
            patch=0
            ;;
        patch)
            patch=$((patch + 1))
            ;;
        *)
            echo "Invalid release type. Use: patch, minor, or major"
            exit 1
            ;;
    esac
    
    echo "$major.$minor.$patch"
}

# Check arguments
if [ $# -lt 1 ]; then
    show_usage
fi

# Get current version from package.json
current_version=$(node -p "require('./package.json').version")
release_type=$1
should_publish=false

# Check for publish flag
if [ "$2" == "--publish" ]; then
    should_publish=true
fi

# Calculate new version
new_version=$(increment_version "$current_version" "$release_type")

# Update package.json version
tmp=$(mktemp)
jq ".version = \"$new_version\"" package.json > "$tmp" && mv "$tmp" package.json

echo "Version updated from $current_version to $new_version"

# Git operations
git add package.json
git commit -m "chore: bump version to $new_version"
git tag "v$new_version"

# Publish if flag is set
if [ "$should_publish" = true ]; then
    npm run build
    npm publish
    git push origin main
    git push origin "v$new_version"
    echo "Published version $new_version to npm"
else
    echo "Run with --publish flag to publish to npm"
fi