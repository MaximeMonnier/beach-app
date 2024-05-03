import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create.dto';
import { UpdateArticleDto } from './dto/update.dto';
import { Article } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  public async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(id);
  }

  @Post('/create')
  public async create(@Body() articleDto: CreateArticleDto): Promise<Article> {
    return this.articleService.create(articleDto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() articleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.update(id, articleDto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<Article> {
    return this.articleService.delete(id);
  }
}
