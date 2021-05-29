import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBuyer1615404130713 implements MigrationInterface {

    //Pessoa que usará o site para comprar roupas
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
                        type: "numeric"
                    },
                    {
                        name: "cep",
                        type: "numeric",
                        isNullable: true
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "endereço",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "numero",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "complemento",
                        type: "varchar",
                        isNullable: true
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Buyer");
    }

}
