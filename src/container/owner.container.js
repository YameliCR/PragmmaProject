import OwnerController from "../controllers/owner.controller.js";
import OwnerRepository from "../repositories/owner.repository.js";
import OwnerService from "../services/owner.service.js";
import CustomContainer from "../utils/customContainer.js";

const container = CustomContainer.getInstance();

// Owner
container.addClass(OwnerRepository.name, OwnerRepository, []);
container.addClass(OwnerService.name, OwnerService, [OwnerRepository.name]);
container.addClass(OwnerController.name, OwnerController, [OwnerService.name]);
