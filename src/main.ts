import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // This line applies validation globally and removes any properties not defined in the DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // I enabled CORS to allow requests from any origin.
  // This is useful for development, but in production, you should restrict it to specific origins to enhance security.
  app.enableCors({
    origin: 'https://example.com' // This should be replaced with your actual frontend URL in production
  })

  // The application listens on the port specified in the environment variable PORT or defaults to 3000.
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
