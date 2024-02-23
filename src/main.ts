import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// commit de test
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333); // 28M
}
bootstrap();
