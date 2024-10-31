import Treatment from "../models/treatment.model.js";
import BaseRepository from "./repository.js";

class TreatmentRepository extends BaseRepository {
  constructor() {
    super(Treatment);
  }
}

export default TreatmentRepository;
