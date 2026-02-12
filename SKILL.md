# Development Skills & Guidelines

## 1. Periodic Testing
- **Goal**: Ensure no regressions and high code quality.
- **Action**: Run the full test suite before every commit.
- **Command**: (To be defined based on stack, e.g., `npm test`, `pytest`)

## 2. Clean Code Checks
- **Goal**: Maintain a clean and organized codebase.
- **Action**: Periodically check for:
    - Unused files or artifacts.
    - Temporary files (e.g., `.tmp`, `.log`).
    - Commented-out code blocks that are no longer needed.
    - Consistency in naming conventions.

## 3. README Updates
- **Goal**: Keep documentation in sync with code.
- **Action**: Update `README.md` with every significant commit or feature addition.
    - Document new features.
    - Update installation/run instructions if changed.
    - List new dependencies.

## 4. Docker & Database
- **Goal**: Containerized development environment.
- **Instruction**: When setting up Docker, ensure the database is created and configured WITHIN the container.
- **Action**: Use `docker-compose` to orchestrate app and db services.
