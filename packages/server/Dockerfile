# Stage 1 - Builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine AS runtime
WORKDIR /app

COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Copy built app from builder
COPY --from=builder /app/dist ./dist

CMD ["npm", "run", "start"]
