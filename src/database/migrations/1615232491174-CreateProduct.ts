import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1615232491174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Product",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },

                    //ID_Loja

                    {
                        name: "categoria",
                        type: "varchar"
                    },
                    {
                        name: "genero",
                        type: "varchar",
                    },
                    {
                        name: "descrição",
                        type: "varchar",
                    },
                    {
                        name: "cor",
                        type: "varchar",
                    },
                    {
                        name: "tamanho",
                        type: "varchar",
                    },
                    {
                        name: "largura",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "altura",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "material",
                        type: "varchar",
                    },
                    {
                        name: "preço_custo",
                        type: "numeric",
                    },
                    {
                        name: "preço_venda",
                        type: "numeric",
                    },
                    {
                        name: "codigo",
                        type: "varchar",
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Product");
    }

}
