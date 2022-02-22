import { CreationOptional } from 'sequelize';
import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Game extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER.UNSIGNED)
    declare id: CreationOptional<number>;

    @Column(DataType.STRING(5))
    declare answer: string;

    @Column(DataType.DATE)
    declare date: CreationOptional<Date>;
}
