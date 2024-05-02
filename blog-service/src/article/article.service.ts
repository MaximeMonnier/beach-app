import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create.dto';
import { UpdateArticleDto } from './dto/update.dto';
import { Article } from '@prisma/client'; 



@Injectable()
export class ArticleService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<Article[]> {
    return this.prismaService.article.findMany();
  }

  public async findOne(id: string): Promise<Article> {
    return this.prismaService.article.findFirst({
      where: { id },
    });
  }

  public async create (ArticleDto: CreateArticleDto): Promise<Article> {
    return this.prismaService.article.create({
      data: {
        ...ArticleDto
      },
    });
  }

  public async update ( id:string, ArticleDto: UpdateArticleDto): Promise<Article> {
    return this.prismaService.article.update ({
        where: {
            id,
        },
        data: {
            ...ArticleDto,
        }
    })
  }


  public async delete(id:string): Promise<Article> {
    return this.prismaService.article.delete ({
        where: {
            id,
        },
    })

  }
}
