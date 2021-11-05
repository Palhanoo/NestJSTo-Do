import {MigrationInterface, QueryRunner} from "typeorm";

export class toDo1635711464924 implements MigrationInterface {
    name = 'toDo1635711464924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "author"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "author" character varying NOT NULL`);
    }

}
