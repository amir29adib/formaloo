import { v4 } from "uuid";
import { FormId } from "./model/form-id";
import { CreateForm, Form, UpdateForm } from "./model/form.model";

export interface IFormRepository {
  create(form: CreateForm): Form;
  update(form: UpdateForm): Form;
  findById(formId: FormId): Form | undefined;
  delete(formId: FormId): boolean;
}

export class FormRepository implements IFormRepository {
  create(form: CreateForm) {
    const formCreated: Form = {
      id: v4() as FormId,
      userId: form.userId,
      link: form.link,
      fields: form.fields,
      status: form.status,
    };
    return formCreated;
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
