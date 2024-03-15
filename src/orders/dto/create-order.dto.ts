import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @ArrayNotEmpty()
  @Type(() => OrderItemDto)
  @ValidateNested({ each: true })
  items: OrderItemDto[];

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  card_hash: string;
}

export class OrderItemDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;

  @MaxLength(36)
  @IsString()
  @IsNotEmpty()
  product_id: string;
}
