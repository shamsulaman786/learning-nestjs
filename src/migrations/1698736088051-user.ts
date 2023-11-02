import { MigrationInterface, QueryRunner } from "typeorm";

export class User1698736088051 implements MigrationInterface {
    name = 'User1698736088051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(14) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    }

}
