import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cat.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { RoleGuard } from 'src/guards/role.guard';

@Controller('cats')
@UseGuards(RoleGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  @UseFilters(HttpExceptionFilter)
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
