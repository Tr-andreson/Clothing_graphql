# Stage 1 - Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy only package.json + lock file first for better caching
COPY package*.json ./

# Install all dependencies (including dev for build)
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build


# Stage 2 - Runtime
FROM node:20-alpine AS runtime
WORKDIR /app

# Copy only package.json + lock file first
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev && npm cache clean --force

# Copy built app from builder
COPY --from=builder /app/dist ./dist

# Copy any runtime config (if needed, e.g., prisma schema, migrations)
# COPY --from=builder /app/prisma ./prisma

# Start the app
CMD ["npm", "run", "start"]
