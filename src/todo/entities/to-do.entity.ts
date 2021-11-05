import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  constructor(desc: string) {
    this.description = desc;
  }
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  description: string;

  @Column({ default: false })
  done: boolean;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;
}
