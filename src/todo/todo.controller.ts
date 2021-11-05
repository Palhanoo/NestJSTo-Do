import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './entities/to-do.entity';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Post()
  async create(@Body('description') description: string) {
    return await this.service.save(description);
  }

  @Get()
  async listAll() {
    return await this.service.findAll();
  }

  @Put()
  async updateTodo(@Body() todo: Todo) {
    return await this.service.update(todo);
  }

  @Delete(':id')
  async RemoveTodo(@Param('id') id: number) {
    return await this.service.remove(id);
  }
}
