import { User } from "../models/user.model";
import { FormRepository, IFormRepository } from "./form.repository";
import { CreateForm } from "./model/form.model";

class FormService {
    constructor(private formRepo: IFormRepository) { }
    
    createForm(dto: CreateForm) {
        
    }
}
