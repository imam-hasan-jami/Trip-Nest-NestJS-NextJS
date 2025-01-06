import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  hotelName: string;
  @Column()
  location: string;
  @Column()
  roomType: string;
  @Column({ unique: true })
  roomNumber: string;
  @Column()
  pricePerNight: number;
  @Column()
  description: string;
}
