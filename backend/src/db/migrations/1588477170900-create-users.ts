import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1588477170900 implements MigrationInterface {
    private table = new Table({
        name: 'users',
        columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true, //Auto-increment
              generationStrategy: 'increment'
            },
            {
              name: 'username',
              type: 'string',
              length: '20',
              isUnique: false,
              isNullable: false
            },
            {
              name: 'email',
              type: 'varchar',
              length: '255',
              isUnique: true,
              isNullable: false
            },
            {
              name: 'password',
              type: 'varchar',
              length: '15',
              isUnique: false,
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamptz',
              isNullable: false,
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamptz',
              isNullable: false,
              default: 'now()',
          }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable(this.table);
    }

}
