# Daily Mood Tracker

## About the Project
The objective behind this project is to learn about Docker (containers, images) and Vitest (testing).

## How To Use

### Using Visual Studio Code
To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

1. **Clone this repository**
   ```sh
   $ https://github.com/mibanas/DailyMoodTracker.git
   ```

2. **Go into the project folder**
   ```sh
   $ cd DailyMoodTracker
   ```

3. **Install dependencies**
   ```sh
   $ npm install
   ```

4. **Run the dev server**
   ```sh
   $ npm run dev
   ```

5. **Run the tests**
   ```sh
   $ npm run test
   ```

### Using Docker
Using a CLI, run the following commands:

1. **Clone the docker image from Dockerhub**
   ```sh
   $ docker pull ibanas/trackmood:latest
   ```

2. **Create and run container**
   ```sh
   $ docker run --name YOUR_CONTAINER_NAME -p 3000:3000 ibanas/trackmood:latest
   ```

3. **To stop the container, run this command**
   ```sh
   $ docker stop YOUR_CONTAINER_NAME
   ```

## Docker Image
[Docker Hub Repository](https://hub.docker.com/repository/docker/ibanas/trackmood/general)

## What is Docker?
Docker uses Containers to run applications in isolated environments with specific dependencies. Its main purpose is to maintain containers.

### Virtual machines vs Containers
- VM has its own full operating system running on top of your PC operating system and is typically slower.
- Containers share the host operating system and are typically quicker.

### Images
Images are blueprints for containers and contain:
- OS and/or runtime environment
- App source code
- Configuration files (e.g., .env)
- Commands (for the app to run and work)
Images are readonly and cannot be modified once they are generated.

### Containers
Containers are runnable instances of images. They are run in an isolated environment and work independently.

### Making of Images
An image is made of many layers, and the layers order matters!

### Parent Image
Parent image is the OS and sometimes the runtime environment from Dockerhub.

## Commands
- Create images: `docker build -t imagename (dockerfilelocation)`
- Create container from image: `docker run --name containername -p TARGET_PORT:EXPOSED_PORT imagename`
- Run container: `docker start containername`
- Delete all images/containers/images: `docker system prune -a`
