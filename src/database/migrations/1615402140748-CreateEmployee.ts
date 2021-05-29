import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployee1615402140748 implements MigrationInterface {

    //Pessoas contratadas para trabalhar na loja
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Employee",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "id_loja",
                        type: "uuid"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "telefone",
                        type: "numeric",
                        isNullable: true
                    },
                ],
                //id da loja
                foreignKeys: [
                    {
                        name: "FKLoja",
                        referencedTableName: "Store",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_loja"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Employee");
    }

}
