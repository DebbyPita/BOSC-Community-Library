# Contributing to BOSC Community Library

Thank you for your interest in contributing to BOSC Community Library! This document provides guidelines and instructions for contributing to our open-source project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Environment Setup](#development-environment-setup)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Standards](#commit-message-standards)
- [Pull Request Workflow](#pull-request-workflow)
- [Code Review Process](#code-review-process)
- [Bug Reporting](#bug-reporting)
- [Feature Requests](#feature-requests)
- [Development Guidelines](#development-guidelines)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- A GitHub account
- Git installed on your local machine
- Node.js 18+ and npm
- Python 3.9+
- PostgreSQL 14+
- Redis 7+

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bosc-community-library.git
   cd bosc-community-library
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/BOSC-Community-Library/bosc-community-library.git
   ```

## Development Environment Setup

### Initial Setup

```bash
# Install dependencies
npm install
pip install -r requirements.txt

# Copy environment variables
cp .env.example .env

# Edit .env with your local configuration
# Set database credentials, Redis URL, etc.

# Initialize database
npm run db:migrate
npm run db:seed

# Start development servers
npm run dev
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run linting
npm run lint

# Run type checking
npm run type-check
```

### Development Workflow

1. Keep your fork's `main` branch synchronized with upstream:
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

2. Create a new branch for your work (see [Branch Naming Conventions](#branch-naming-conventions))

3. Make your changes and commit them (see [Commit Message Standards](#commit-message-standards))

4. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request following the [Pull Request Workflow](#pull-request-workflow)

## Branch Naming Conventions

We use a structured branch naming convention to maintain organization and clarity:

### Format

```
<type>/<short-description>
```

### Branch Types

- `feature/` - New features or enhancements
  - Example: `feature/multi-language-support`
  - Example: `feature/user-bookmarking-system`

- `bugfix/` - Bug fixes
  - Example: `bugfix/search-functionality`
  - Example: `bugfix/metadata-rendering-error`

- `hotfix/` - Critical production fixes
  - Example: `hotfix/security-vulnerability-patch`

- `refactor/` - Code refactoring without functional changes
  - Example: `refactor/database-cleanup`
  - Example: `refactor/folder-restructuring`

- `docs/` - Documentation updates
  - Example: `docs/api-documentation-update`
  - Example: `docs/contributing-guide-improvement`

- `test/` - Test additions or updates
  - Example: `test/add-unit-tests-for-search`
  - Example: `test/integration-tests-for-auth`

- `chore/` - Maintenance tasks
  - Example: `chore/update-dependencies`
  - Example: `chore/upgrade-build-tools`

### Guidelines

- Use lowercase letters and hyphens
- Keep descriptions concise but descriptive
- Maximum length: 50 characters
- Avoid using issue numbers in branch names (use commit messages instead)

## Commit Message Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear, structured commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, semi-colons, etc.)
- `refactor`: Code refactoring without functional changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD configuration changes

### Examples

**Feature commit:**
```
feat(search): add advanced filtering by category and language

Implement category-based filtering in the search interface with
support for multiple languages. This enhancement improves resource
discovery for users with specific content needs.

Closes #123
```

**Bug fix commit:**
```
fix(metadata): resolve incorrect rendering of resource metadata

Fixed the issue where metadata fields were not displaying correctly
due to incorrect data type handling. Updated the metadata parser
to properly handle string and numeric field types.

Fixes #87
```

**Refactor commit:**
```
refactor(database): optimize resource indexing queries

Refactored the database indexing strategy to improve query performance
for large-scale resource catalogs. Reduced average query time by 40%.
```

### Guidelines

- Use imperative mood ("add" not "added" or "adds")
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the body to explain what and why, not how
- Reference issue numbers in the footer
- Keep commits atomic and focused

## Pull Request Workflow

### Before Creating a Pull Request

1. **Ensure your branch is up to date**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Run tests and linting**
   ```bash
   npm test
   npm run lint
   ```

3. **Update documentation** if your changes affect user-facing features

4. **Add tests** for new functionality or bug fixes

### Creating a Pull Request

1. Navigate to the original repository on GitHub
2. Click "New Pull Request"
3. Select your branch from the fork
4. Fill in the PR template (see below)
5. Link related issues using `Closes #123` or `Fixes #123`
6. Request reviewers from the maintainers team

### Pull Request Template

```markdown
## Description
Brief description of changes made in this pull request.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactor

## Related Issues
Closes #(issue number)

## Changes Made
- List of specific changes
- Include file paths modified
- Note any breaking changes

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] New tests added for this change

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published
```

## Code Review Process

### Reviewer Responsibilities

1. **Timely Review**: Review pull requests within 3-5 business days
2. **Constructive Feedback**: Provide clear, actionable feedback
3. **Test Changes**: Verify that changes work as expected
4. **Check Documentation**: Ensure documentation is updated
5. **Verify Tests**: Confirm tests are adequate and passing

### Author Responsibilities

1. **Address Feedback**: Respond to all review comments
2. **Make Updates**: Implement requested changes or provide justification
3. **Keep PR Updated**: Rebase if conflicts arise
4. **Mark as Ready**: Notify reviewers when changes are complete

### Review Criteria

- **Code Quality**: Clean, readable, maintainable code
- **Functionality**: Changes work as intended
- **Testing**: Adequate test coverage
- **Documentation**: Updated where necessary
- **Performance**: No performance regressions
- **Security**: No security vulnerabilities introduced

### Approval Process

- At least 2 maintainer approvals required for merge
- All CI checks must pass
- No unresolved review comments
- Merge requires successful test suite completion

## Bug Reporting

### Before Reporting

1. Check existing issues to avoid duplicates
2. Search the documentation
3. Verify the bug still exists in the latest version

### Reporting a Bug

Use the [Bug Report Issue Template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- **Clear title**: Brief description of the bug
- **Description**: What happened and what you expected
- **Steps to reproduce**: Detailed reproduction steps
- **Environment**: OS, browser, version numbers
- **Screenshots**: If applicable
- **Additional context**: Logs, error messages, etc.

### Bug Report Template

```markdown
**Bug Title**: [Concise description]

**Description**
[A clear and concise description of what the bug is]

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
[What you expected to happen]

**Screenshots**
[If applicable, add screenshots to help explain your problem]

**Environment**
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 95, Firefox 92]
- Version: [e.g. v1.2.3]

**Additional Context**
[Add any other context about the problem here]
```

## Feature Requests

### Before Requesting

1. Check existing feature requests
2. Review the project roadmap
3. Consider whether the feature aligns with project goals

### Requesting a Feature

Use the [Feature Request Issue Template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- **Clear title**: Brief description of the feature
- **Problem**: What problem does this solve?
- **Solution**: Describe the proposed solution
- **Alternatives**: Alternative solutions considered
- **Use Case**: Example of how this would be used

### Feature Request Template

```markdown
**Feature Title**: [Concise description]

**Problem Statement**
[What problem does this feature solve?]

**Proposed Solution**
[Describe the feature you want in detail]

**Alternatives Considered**
[Describe alternative solutions or features you've considered]

**Additional Context**
[Add any other context, screenshots, or examples]
```

## Development Guidelines

### Code Style

- Follow ESLint configuration
- Use Prettier for code formatting
- Write descriptive variable and function names
- Add JSDoc comments for public functions
- Keep functions focused and small (< 50 lines)

### Testing

- Write unit tests for all new functions
- Aim for 80%+ code coverage
- Test edge cases and error conditions
- Use descriptive test names
- Mock external dependencies

### Documentation

- Update README for user-facing changes
- Add inline comments for complex logic
- Update API documentation for endpoint changes
- Maintain CHANGELOG.md for version updates

### Security

- Never commit sensitive data (API keys, passwords)
- Follow OWASP security guidelines
- Report vulnerabilities privately to security@bosc-library.org
- Use environment variables for configuration

### Performance

- Profile performance for database queries
- Optimize asset loading
- Implement caching where appropriate
- Monitor bundle size for frontend changes

## Getting Help

- **Discord**: Join our community Discord for real-time help
- **GitHub Discussions**: Ask questions in GitHub Discussions
- **Email**: Reach out to maintainers at maintainers@bosc-library.org
- **Documentation**: Check our comprehensive documentation

## Recognition

Contributors are recognized in:
- CONTRIBUTORS.md file
- Release notes
- Annual contributor appreciation posts
- Contributor badges on GitHub

Thank you for contributing to BOSC Community Library! Your contributions help make open-source knowledge accessible to everyone.
