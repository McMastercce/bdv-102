# BDV 102: Interactivity and Databases
This is a code repository in the course BVD 102 at McMaster Continuing Education.

## Essential Tools Setup

To embark on this educational journey, you’ll need to set up an online SQL database environment and install some fundamental software that will be the backbone of your learning experience.

### Online SQL Database Setup with Neon

Neon is your go-to platform for accessing a robust, online SQL database service, offering a seamless and user-friendly interface to manage your databases.

1. **Getting Started with Neon:**
   - Begin by navigating to [Neon's official website](https://neon.tech) and sign up for an account using your preferred method, such as Gmail or GitHub. This step is your entry point into the world of database management with Neon, providing you with access to a suite of powerful tools tailored for educational purposes.

2. **Initial Configuration:**
   - Once logged in, take your first step by exploring the comprehensive [Neon documentation](https://neon.tech/docs/introduction), which will serve as a valuable resource throughout your learning journey.
   - Create a new project named `bdv102` in Neon. This project will be the cornerstone of your hands-on exercises, allowing you to apply theoretical knowledge in a practical setting.

3. **Navigating the Neon Dashboard:**
   - Immerse yourself in the Neon dashboard, where you will find various sections like `SQL editor`, `Databases`, and `Tables`. This exploration will familiarize you with the tools and features you'll use to create and manage databases.
   - Proceed to create a new database named `online-store`, which will be used in course exercises to simulate real-world database management scenarios.

4. **Establishing Connections:**
   - In the `dashboard`, under `connections`, you’ll find the connection parameters needed to connect your projects to Neon from JavaScript. These details, typically structured in a `.env` file format, are crucial for establishing a secure and reliable connection to your database.
     ```plaintext
     PGUSER=username
     PGHOST=project-id.region.cloud.neon.tech
     PGDATABASE=database-name
     PGPASSWORD=password
     PGPORT=5432
     ```
   - Carefully record these details, as they are the lifeline connecting your applications to the Neon database service.

### Installing Visual Studio Code (VSCode)

Visual Studio Code (VSCode) is a cutting-edge editor that offers an extensive array of features to support your development in JavaScript, TypeScript, and many other languages and frameworks.

1. **Download and Installation Process:**
   - Embark on your VSCode journey by visiting the [VSCode website](https://code.visualstudio.com) and downloading the installer suited to your operating system. This step marks the beginning of a transformative coding experience, providing you with a robust platform for code development, testing, and deployment.
   - Follow the intuitive installation guide, which will lead you through a straightforward setup process, integrating this powerful tool into your development arsenal.

### Setting Up Docker Desktop

Docker Desktop is a pivotal tool in the modern developer's toolkit, facilitating the creation, testing, and deployment of applications in a containerized environment.

1. **Getting Docker Desktop:**
   - Access Docker Desktop by downloading it from [Docker’s official website](https://www.docker.com/products/docker-desktop/). This application is a gateway to leveraging the power of containerization, ensuring consistency and efficiency in your development workflow.
   - For a deep dive into the capabilities and advantages of using dev containers, especially in conjunction with VSCode, explore the instructional video on [Container-Based Development with VSCode](https://www.youtube.com/watch?v=ftir5Dq7LoA). This resource will provide you with valuable insights and practical knowledge to enhance your development practices.

### DockerHub Account

Sign up for an account on [DockerHub](https://dockerhub.com).
This will be used for managing Docker images and containers as part of the course.

## Project Configuration and Workflow

Now that your environment is set up, you’re ready to commence the practical phase of your course.

1. **Cloning and Setting Up the Repository:**
   - Begin by cloning the course repository to your local machine, a crucial step that brings the course's theoretical and practical elements to your fingertips. Open the repository in VSCode, and select `Open Workspace from File`, opting to reopen it in a container. This action sets the stage for a streamlined and integrated development experience, tailored to your educational needs.

2. **Course Navigation and Learning:**
   - The course is organized into modules, each represented by a git branch. This structure allows you to systematically approach the learning material, starting with the basics and gradually advancing to more complex topics.
   - To initiate your learning in each module, switch to the relevant branch and follow the guidelines in `README.md`. This document is your roadmap through the module, containing step-by-step instructions, exercises, and essential information to guide
