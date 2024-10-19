# Project Overview

> A full-stack template built with Laravel and React (via Inertia.js), using Typescript for enhanced security and maintainability. This project provides a ready-to-use implementation of authentication screens and a dashboard, with a monolithic architecture that facilitates quick prototyping and development. For styling and visual components, we are using ShadcnUI, ensuring a modern and responsive interface. Additionally, the project includes Laravel Pint and Prettier for code formatting and standardization, with extensive automated testing coverage supported by PHPUnit. The setup is managed by Laravel Sail, allowing for easy development in Docker containers.

#### This repo is functionality complete — PRs and issues welcome! Feel free to contact me in discord: pea_gah
## Features

This project is a powerful and flexible template for authentication and dashboards using Laravel and React. Below are the current and planned features:

### Implemented Features

- [x]  **Complete Authentication**: Ready-to-use authentication flows, including login, registration, password recovery, and password reset.
- [x]  **Dashboard**: Provides a basic dashboard template, ready for customization and expansion as needed.
- [x]  **React + Inertia.js**: Seamless communication between the Laravel backend and the React frontend, offering a smooth SPA (Single Page Application) experience.
- [x]  **ShadcnUI**: Integrated with ShadcnUI for modern interface components, ensuring an appealing and efficient user experience.
- [x]  **Automatic Formatting**: Utilizes tools like **Laravel Pint** and **Prettier** to ensure consistent code formatting and unified style standards.
- [x]  **Makefile**: Simplifies common setup and development tasks (such as installation, migrations, and testing) with easy-to-use commands, all encapsulated in a single `Makefile`.
- [x]  **Automated Tests**: Automated testing using **PHPUnit**, including code coverage reports to ensure quality and stability in ongoing development.
- [x]  **Laravel Sail**: Easily configured Docker environment, allowing for fast and efficient execution on any machine.

### Planned Features

- [ ]  **OAuth Authentication**: We plan to add OAuth login support, making it easy to log in with third-party services like Google, Facebook, and GitHub.
- [ ]  **API Integration**: Support for integrating with external APIs, enabling the dashboard to display data and interact with other systems.
- [ ]  **Dark Mode**: Implement a dark theme for improved accessibility and visual comfort.
- [ ]  **User Role Management**: Add a robust role and permission management system for granular access control.
- [ ]  **Multi-language Support**: Multi-language support to make the template accessible globally.
- [ ]  **Modular UI Components**: Expand the UI components to allow easy customization and reuse, offering even more flexibility for interface creation.
## Installation

### Prerequisites
- **Docker**: Ensure you have Docker installed on your machine, as it is required for **Laravel Sail** to run smoothly.


### Steps

#### 1. Clone the repository:
    git clone https://github.com/your-username/your-repo.git
    cd your-repo

#### 2. Install PHP dependencies:
    composer install

#### 3. Run the installation script:
##### After running composer install, initialize the project with a single command using the Makefile:
    make install

##### This command will:
- Start the containers with **Laravel Sail**.
- Install Composer dependencies.
- Install npm dependencies.
- Run database migrations with seeders.
- Start the development server.

You can now access the server at http://localhost

### Additional Makefile Commands
#### Start the containers:
    make up

#### Stop the containers:
    make stop

#### Rebuild the containers:
    make build

#### Run database migrations with seeders:
    make migrate-seed

#### Run npm development server:
    make npm-dev

#### Run tests with coverage:
    make test

#### Run code formatters (Pint and Prettier):
    make pre-commit
## Contributing

We warmly welcome contributions to this project! Whether you're fixing a bug, adding a new feature, or improving documentation, your help is greatly appreciated. To get started, follow these steps:

#### 1. Fork the repository

Click the "Fork" button at the top of the repository page to create your own copy.

#### 2. Create a new feature branch

In your forked repository, create a new branch for your feature or bug fix:
```
git checkout -b feature/your-feature-name
```

#### 3. Make your changes
Implement your changes or improvements. Be sure to follow the coding standards enforced by Laravel Pint and Prettier for clean and consistent code.

#### 4. Commit your changes
When you're satisfied with your changes, commit them with a clear and descriptive message:
   ```
   git commit -m 'Add feature: [brief description of your feature]'
   ```

#### 5. Run the tests
Ensure all tests pass before submitting your contribution. You can run tests with:
   ```
   make pre-commit
   ```

#### 6. Push to your branch
Push your changes to your forked repository:
   ```
   git push origin feature/your-feature-name
   ```

#### 7. Open a pull request (PR)
Go to the original repository on GitHub and open a new pull request. In your PR description, provide as much context as possible, explaining what problem you're solving or what feature you're adding.
## FAQ

#### 1. Can I use this project for my own portfolio?

Absolutely! You are welcome to use this template as the foundation for your personal portfolio projects. If you do, we'd love to hear about it! Feel free to share your projects or improvements with the community.

#### 2. How can I report bugs or request new features?

To report bugs or suggest new features, simply open an issue in the GitHub repository. Be as detailed as possible when describing the bug or feature request to help us address it quickly. Contributions in the form of pull requests are also highly encouraged!

#### 3. Can I contribute to the project?

Yes! We welcome contributions from the community. If you’d like to contribute, please check the [contribution guidelines](#contributing) and submit a pull request. Whether it’s a new feature, bug fix, or documentation improvement, your input is highly valued.

#### 4. Is this project production-ready?

This project is designed as a template for quick prototyping and educational purposes. While it includes many useful features, we recommend thoroughly reviewing and testing the code before using it in a production environment.

#### 5. What technologies does this project use?

This template combines **Laravel** with **React** and **Inertia.js**, using **Typescript** for type safety and maintainability. It includes **ShadcnUI** for UI components, **PHPUnit** for testing, and Docker support via **Laravel Sail**.

#### 6. How do I set up the project locally?

To set up the project locally, clone the repository and follow the instructions in the [README](#setup). You can also use the provided `Makefile` to simplify the setup process by running `make install` after running `composer install`.

#### 7. How can I suggest improvements to the project?

We encourage you to share your ideas! Whether it's a new feature, performance enhancement, or even a UI suggestion, feel free to open an issue to start a discussion. We're always open to feedback and new ideas to improve the project.
