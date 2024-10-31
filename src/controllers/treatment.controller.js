import { catchAsync } from "../utils/controller.js"; // ESModule

export default class TreatmentController {
  /**
   *
   * @param {import('../services/treatment.service.js').default} treatmentService
   */
  constructor(treatmentService) {
    this.treatmentService = treatmentService;
  }

  listTreatments = catchAsync(async (req, res) => {
    const treatments = await this.treatmentService.listTreatments();

    return res.status(200).json({
      status: "sucess",
      requestedAt: req.requestTime,
      data: {
        treatments,
      },
    });
  });

  createTreatment = catchAsync(async (req, res) => {
    const { body } = req;

    const treatment = await this.treatmentService.createTreatment(body);

    res.status(201).json({
      status: "success",
      data: {
        treatment,
      },
    });
  });

  getTreatment = catchAsync(async (req, res) => {
    const { id } = req.params;

    const treatment = await this.treatmentService.getTreatment(id);

    return res.status(200).json({
      status: "success",
      data: {
        treatment,
      },
    });
  });

  updateTreatment = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const treatment = await this.treatmentService.updateTreatment(id, body);

    res.status(200).json({
      status: "success",
      data: {
        treatment,
      },
    });
  });

  deleteTreatment = catchAsync(async (req, res) => {
    const { id } = req.params;

    await this.treatmentService.deleteTreatment(id);

    res.status(204).end();
  });
}
