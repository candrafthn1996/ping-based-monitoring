# Prepare nodejs image
FROM node
# Set workdir
WORKDIR /usr/src/app
# To ensure config files is copied
COPY package*.json /usr/src/app/
COPY ip_config.json /usr/src/app/
# Install nodejs dependencies
RUN npm i -g npm \
   && npm i
# Copy app to docker
COPY . /usr/src/app/
# Open port
EXPOSE 80
EXPOSE 3306
# RUN
CMD ["npm", "start"]
