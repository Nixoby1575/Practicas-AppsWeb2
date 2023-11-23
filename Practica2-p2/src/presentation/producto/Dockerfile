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

# COPY your specific files for the 'producto' entity
COPY ./src/presentation/producto /app/src/presentation/producto

RUN npm install

# Add any additional commands needed for your 'producto' entity
