import { catchAsync } from "../utils/controller.js"; // ESModule

export default class OwnerController {
  /**
   *
   * @param {import('../services/owner.service.js').default} ownerService
   */
  constructor(ownerService) {
    this.ownerService = ownerService;
  }

  listOwners = catchAsync(async (req, res) => {
    const owners = await this.ownerService.listOwners();

    return res.status(200).json({
      status: "sucess",
      requestedAt: req.requestTime,
      data: {
        owners,
      },
    });
  });

  createOwner = catchAsync(async (req, res) => {
    const { body } = req;

    const owner = await this.ownerService.createOwner(body);

    res.status(201).json({
      status: "success",
      data: {
        owner,
      },
    });
  });

  getOwner = catchAsync(async (req, res) => {
    const { id } = req.params;

    const owner = await this.ownerService.getOwner(id);

    return res.status(200).json({
      status: "success",
      data: {
        owner,
      },
    });
  });

  updateOwner = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const owner = await this.ownerService.updateOwner(id, body);

    res.status(200).json({
      status: "success",
      data: {
        owner,
      },
    });
  });

  deleteOwner = catchAsync(async (req, res) => {
    const { id } = req.params;

    await this.ownerService.deleteOwner(id);

    res.status(204).end();
  });
}
