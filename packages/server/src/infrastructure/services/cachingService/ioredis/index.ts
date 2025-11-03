import { ICacheService } from "@/domain/services/ICacheService";
import Redis from "ioredis";

export class RedisService implements ICacheService {
  private readonly cache: Redis;

  constructor() {
    this.cache = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
    this.cache.on("connect", () => {
      console.log("✅ Redis connected successfully");
    });

    this.cache.on("error", (err) => {
      console.error("❌ Redis connection failed:", err);
      process.exit(1);
    });
  }

  async set<T>({ key, value }: { key: string; value: T }): Promise<string> {
    await this.cache.set(key, JSON.stringify(value));
    return "Cache added successfully";
  }

  async get<T>(key: string): Promise<T | null> {
    const cachedData = await this.cache.get(key);
    if (!cachedData) return null;

    try {
      return JSON.parse(cachedData) as T;
    } catch (err) {
      console.error(`Error parsing cache for key "${key}":`, err);
      return null;
    }
  }

  async delete(key: string): Promise<string> {
    await this.cache.del(key);
    return `Cache deleted for key: ${key}`;
  }

  async deleteAll(): Promise<string> {
    await this.cache.flushall();
    return "All cache cleared";
  }
}
