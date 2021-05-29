import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStore1614970297527 implements MigrationInterface {

    //Tabelo da loja
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Store",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "id_dono",
                        type: "uuid",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "telefone",
                        type: "numeric"
                    },
                    {
                        name: "cep",
                        type: "numeric"
                    },
                    {
                        name: "estado",
                        type: "varchar"
                    },
                    {
                        name: "cidade",
                        type: "varchar"
                    },
                    {
                        name: "bairro",
                        type: "varchar"
                    },
                    {
                        name: "numero",
                        type: "varchar"
                    },
                    {
                        name: "complemento",
                        type: "varchar"
                    },
                    {
                        name: "cnpj",
                        type: "numeric"
                    },
                    {
                        name: "razao_social",
                        type: "varchar"
                    },
                    {
                        name: "nome_fantasia",
                        type: "varchar"
                    },
                ],
                //id do dono
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "User",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_dono"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]

            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Store");
    }

}
