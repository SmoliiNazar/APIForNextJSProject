import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductModel } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductModel) 
        private readonly productModel: ModelType<ProductModel>
    ) { }
    
    async create(dto: CreateProductDto) {
        return this.productModel.create(dto);
    }

    async findById(id: string) {
        this.productModel.findById(id).exec();
    }    
}