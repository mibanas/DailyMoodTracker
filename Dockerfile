# specify the parent image
FROM node:18-alpine

# specify the working directory of the image
WORKDIR /DAILYMOODTRACKER

# copy package.json and package-lock.json to root directory (which is now /DAILYMOODTRACKER)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy the rest of the project files to /DAILYMOODTRACKER
COPY . .

# build the project
RUN npm run build

# expose the port that the Next.js application will run on
EXPOSE 3000

# start the Next.js application
CMD [ "npm", "start" ]
