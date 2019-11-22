import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('foo')
export class Foo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1, type: 'bigint' })
  bar_default_plus_1_is_fine: number;
  
  @Column({ default: -1, type: 'bigint' })
  bar_default_minus_1_is_creating_repeated_migrations: number;
}
