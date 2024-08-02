import { v4 } from "uuid";
import { FormId } from "./model/form-id";
import { CreateForm, Form, UpdateForm } from "./model/form.model";
import { DataSource, Repository } from "typeorm";
import { FormEntity } from "./entity/form.entity";

export interface IFormRepository {
  create(form: CreateForm): boolean;
  update(form: UpdateForm): Form;
  findById(formId: FormId): Form | undefined;
  delete(formId: FormId): boolean;
}

export class FormRepository implements IFormRepository {
  private formRepo: Repository<FormEntity>;

  constructor(appDataSource: DataSource) {
    this.formRepo = appDataSource.getRepository(FormEntity);
  }

    public create(form: CreateForm) {
        return false;
    // return this.formRepo.save(form);
  }

  update(form: UpdateForm): Form {
    const formUpdated: Form = {
      id: v4() as FormId,
      userId: "",
      link: "",
      fields: form.fields,
      status: form.status,
    };
    return formUpdated;
  }

  findById(formId: FormId): Form | undefined {
    const formFounded: Form = {
      id: formId,
      userId: "",
      link: "",
      fields: {
        tag: "Select",
        attributes: [{}],
        validation: {},
        values: [],
        order: 1,
      },
      status: "Hidden",
    };
    return formFounded;
  }

  delete(formId: FormId): boolean {
    return true;
  }
}
