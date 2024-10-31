import { DataTypes, Model } from "sequelize";

class Treatment extends Model {
  static association(models) {
    this.belongsTo(models.patients, { foreignKey: "patient_id" });
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        description: DataTypes.STRING,
        notes: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "treatments",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}

export default Treatment;
