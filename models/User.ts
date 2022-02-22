import {
    CreationOptional,
    HasManyCreateAssociationMixin,
    NonAttribute
} from 'sequelize';
import { Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Score } from './Score';

@Table
export class User extends Model {
    // 'CreationOptional' is a special type that marks the field as optional
    // when creating an instance of the model (such as using Model.create()).
    @PrimaryKey
    @Column(DataType.INTEGER.UNSIGNED)
    declare id: CreationOptional<number>;

    @Column(DataType.STRING(128))
    declare name: string;

    @Column(DataType.STRING(128))
    declare email: string;

    // createdAt can be undefined during creation
    @Column(DataType.DATE)
    declare createdAt: CreationOptional<Date>;
    // updatedAt can be undefined during creation
    @Column(DataType.DATE)
    declare updatedAt: CreationOptional<Date>;

    declare createScore: HasManyCreateAssociationMixin<Score, 'userId'>;

    // You can also pre-declare possible inclusions, these will only be populated if you
    // actively include a relation.
    @HasMany(() => Score)
    declare scores?: NonAttribute<Score[]>; // Note this is optional since it's only populated when explicitly requested in code
}
