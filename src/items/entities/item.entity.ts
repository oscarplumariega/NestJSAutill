import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Items {
    @PrimaryGeneratedColumn() 
    Id: number;
  
    @Column('text')
    IdBusiness: string;
  
    @Column()
    Name: string;

    @Column()
    Price: number;
}
