import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
