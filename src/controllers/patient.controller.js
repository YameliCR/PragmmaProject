import { catchAsync } from "../utils/controller.js"; // ESModule

export default class PatientController {
  /**
   *
   * @param {import('../services/patient.service.js').default} patientService
   */
  constructor(patientService) {
    this.patientService = patientService;
  }

  listPatients = catchAsync(async (req, res) => {
    const patients = await this.patientService.listPatients();

    return res.status(200).json({
      status: "sucess",
      requestedAt: req.requestTime,
      data: {
        patients,
      },
    });
  });

  createPatient = catchAsync(async (req, res) => {
    const { body } = req;

    const patient = await this.patientService.createPatient(body);

    res.status(201).json({
      status: "success",
      data: {
        patient,
      },
    });
  });

  getPatient = catchAsync(async (req, res) => {
    const { id } = req.params;

    const patient = await this.patientService.getPatient(id);

    return res.status(200).json({
      status: "success",
      data: {
        patient,
      },
    });
  });

  updatePatient = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const patient = await this.patientService.updatePatient(id, body);

    res.status(200).json({
      status: "success",
      data: {
        patient,
      },
    });
  });

  deletePatient = catchAsync(async (req, res) => {
    const { id } = req.params;

    await this.patientService.deletePatient(id);

    res.status(204).end();
  });
}
