# Contributing to AlphaGrid

Welcome and thank you for considering contributing to AlphaGrid! The following
are guidelines for contributing to this project.

## Branch Naming Conventions

We use specific naming conventions for our branches to keep our repository
organized and to understand the purpose of each branch at a glance. Use
`<issue-number>-description` or create a branch from the issue on GitHub.

Include a brief description after the issue number, separated by hyphens, for more
clarity.

## Commit Message Guidelines

To maintain a clear and consistent history, we follow these commit message guidelines:

    Format: [#<issue-number>] <Commit Message>
    Start the commit message with an issue number enclosed in square brackets.
    Write a concise summary in the imperative mood, as if completing the sentence
    "If applied, this commit will..." 

Example Commit Message

```bash
git commit -m "[#42] Add user authentication logic"
-m "Implemented a basic authentication system including login and logout functionality. Added necessary unit tests."
```

### Optional

To simplify the

```bash
git config --global alias.cm '!f() {
  branch=$(git symbolic-ref --short HEAD);
  if echo "$branch" | grep -qE "(^[0-9]+)"; then
    prefix=$(echo "$branch" | grep -oE "^[0-9]+");
    message="[#$prefix] $*";
    git commit -m "$message";
  else
    git commit -m "$*"; fi
}; f'
```

## Pull Requests

## Reporting Bugs/Feature Requests

## Questions or Concerns

Feel free to reach out if you have any questions or concerns regarding the contribution process.
