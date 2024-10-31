import { DataTypes, Model } from "sequelize";

class Owner extends Model {
  static association(models) {
    this.hasMany(models.patients, { foreignKey: "owner_id" });
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "owners",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}

export default Owner;
