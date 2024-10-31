import { DataTypes, Model } from "sequelize";

class Patient extends Model {
  static association(models) {
    this.belongsTo(models.owners, { foreignKey: "owner_id" });
    this.hasMany(models.treatments, { foreignKey: "patient_id" });
  }

  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        date_of_birth: DataTypes.DATE,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: "patients",
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}

export default Patient;
