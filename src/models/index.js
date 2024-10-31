import { db } from "../utils/database.js";
import Owner from "./owner.model.js";
import Patient from "./patient.model.js";
import Treatment from "./treatment.model.js";
import User from "./user.model.js";

User.init(db);
Owner.init(db);
Patient.init(db);
Treatment.init(db);

Owner.association(db.models);
Patient.association(db.models);
Treatment.association(db.models);
