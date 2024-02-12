import { initializeApp } from './app';

(async () => {
  const app = await initializeApp();
  app.listen(process.env.SERVER_DEFAULT_PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.SERVER_DEFAULT_PORT}`);
  });
})();
