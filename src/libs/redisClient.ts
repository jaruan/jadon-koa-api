import { Redis } from 'ioredis';

let redisClient: Redis;

export default () => {
  return (
    redisClient ||
    (redisClient = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD,
    }))
  );
};
