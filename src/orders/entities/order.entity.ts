import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total: number;

  @Column()
  client_id: number; // usuário autenticado

  @Column()
  status: OrderStatus = OrderStatus.PENDING;

  @CreateDateColumn()
  created_at: Date;
}
