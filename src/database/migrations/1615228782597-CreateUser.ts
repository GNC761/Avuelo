import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1615228782597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "numeric",
                        isUnique: true,
                    },
                    {
                        name: "cep",
                        type: "numric"
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
                    {
                        name: "email_pessoal",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "telefone_pessoal",
                        type: "numeric",
                        isUnique: true,
                    }                                       
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
