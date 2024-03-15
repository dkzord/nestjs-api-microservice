import { In, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const productIds = createOrderDto.items.map((item) => item.product_id);
    const uniqueProductIds = [...new Set(productIds)];
    const products = await this.productRepo.findBy({
      id: In(uniqueProductIds), // select * from product where id in (1, 2, 3, 4);
    });

    if (products.length !== uniqueProductIds.length) {
      throw new Error(
        `Some product does not exist. Please check the product id. Past product ${uniqueProductIds}, and product found
          ${products.map((product) => product.id)}
        `,
      );
    }

    const order = Order.create({
      client_id: 1,
      items: createOrderDto.items.map((item) => {
        const product = products.find(
          (product) => product.id === item.product_id,
        );
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          price: product.price,
        };
      }),
    });

    await this.orderRepo.save(order);
    return order;
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
