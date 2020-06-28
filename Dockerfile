# # pull official base image
# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# #ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# #COPY package-lock.json ./
# RUN npm install 
# #RUN npm install react-scripts@3.4.1 -g 

# # add app
# COPY . ./
# # build
# RUN npm run build
# # start app
# #CMD ["npm", "start"]



# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:12.8.0-alpine

RUN npm install -g serve
CMD serve -s build
EXPOSE 5000

# Install all dependencies of the current project.
COPY package.json package.json
#COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build