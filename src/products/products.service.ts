import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);

    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product with ${JSON.stringify(updateProductDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
