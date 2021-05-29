import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1615228782597 implements MigrationInterface {

    //Dono Da loja
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
                        type: "varchar",
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
                    }                                       
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
