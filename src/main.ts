import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, //quita o niega todos atributos que no esten en el DTO
    forbidNonWhitelisted: true, //genera una alerta informando que el atriuto no es valido
  }));
  await app.listen(3000);
}
bootstrap();
