import { MigrationInterface, QueryRunner } from "typeorm"

export class Todo1698733108851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("create table todo");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("drop table todo");
    }

}
