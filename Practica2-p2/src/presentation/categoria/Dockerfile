FROM node:lts
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY your specific files for the 'categoria' entity
COPY ./src/presentation/categoria /app/src/presentation/categoria

RUN npm install

# Add any additional commands needed for your 'categoria' entity
