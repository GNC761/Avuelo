import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1615232491174 implements MigrationInterface {

    //Produtos que serão vendidos na loja
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
                    {
                        name: "id_loja",
                        type: "uuid",
                    },
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
                        name: "estoque",
                        type: "numeric",
                        isNullable: true,
                    },
                    {
                        name: "codigo",
                        type: "varchar",
                        isNullable: true
                    },
                ],
                //ID da loja
                foreignKeys: [
                    {
                        name: "FKLoja",
                        referencedTableName: "Store",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_loja"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Product");
    }

}
