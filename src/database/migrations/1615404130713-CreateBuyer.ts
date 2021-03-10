import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBuyer1615404130713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Buyer",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        isUnique: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "cpf",
                        type: "numeric",
                        isUnique: true
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
                        name: "cpf",
                        type: "varchar"
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
                        name: "endereço",
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
