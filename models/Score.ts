import { CreationOptional } from 'sequelize';
import { Column, DataType, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import { Game } from './Game';
import { User } from './User';

@Table
export class Score extends Model {
    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataType.INTEGER.UNSIGNED)
    declare id: CreationOptional<number>;

    @Column(DataType.INTEGER.UNSIGNED)
    declare userId: number;

    @Column(DataType.INTEGER.UNSIGNED)
    declare guesses: number;

    @Column(DataType.INTEGER.UNSIGNED)
    declare duration: number;

    @ForeignKey(() => Game)
    @Column(DataType.INTEGER.UNSIGNED)
    declare gameId: number;

    // createdAt can be undefined during creation
    declare createdAt: CreationOptional<Date>;
}
