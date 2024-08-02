import { v4 } from "uuid";
import { FormId } from "./model/form-id";
import { CreateForm, Form, UpdateForm } from "./model/form.model";
import { DataSource, DeleteResult, Repository, UpdateResult } from "typeorm";
import { FormEntity } from "./entity/form.entity";

export interface IFormRepository {
  create(form: CreateForm): Promise<Form>;
  update(id: FormId, form: UpdateForm): Promise<UpdateResult>;
  findById(id: FormId): Promise<Form | null>;
  delete(id: FormId): Promise<DeleteResult>;
}

export class FormRepository implements IFormRepository {
  private formRepo: Repository<FormEntity>;

  constructor(appDataSource: DataSource) {
    this.formRepo = appDataSource.getRepository(FormEntity);
  }

  async create(form: CreateForm) {
    return await this.formRepo.save(form);
  }

  async update(id: FormId, form: UpdateForm): Promise<UpdateResult> {
    return await this.formRepo.update(id, {
      fields: form.fields,
      status: form.status,
    });
  }

  async findById(id: FormId): Promise<Form | null> {
    return this.formRepo.findOne({ where: { id } });
  }

  async delete(id: FormId): Promise<DeleteResult> {
    return await this.formRepo.delete({ id });
  }
}
