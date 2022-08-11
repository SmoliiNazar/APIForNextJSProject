import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDTO } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }
    
    @Post('create')
    async create(@Body() dto: CreateProductDto) {
        return  this.productService.create(dto);
    }

    @Get(':id')
    async name(@Param('id') id: string) {
        
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Patch(':id')
    async Patch(@Param('id') id: string, @Body() dto: ProductModel) {

    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDTO) {

    }
}
