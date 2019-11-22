import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1574442111340 implements MigrationInterface {
    name = 'InitialMigration1574442111340';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "foo" ("id" SERIAL NOT NULL, "bar_default_plus_1_is_fine" bigint NOT NULL DEFAULT 1, "bar_default_minus_1_is_creating_repeated_migrations" bigint NOT NULL DEFAULT -1, CONSTRAINT "PK_3955faa3e62aba1963fccbe0708" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "foo"`, undefined);
    }

}
