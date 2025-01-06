import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class Initial1714763496791 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
