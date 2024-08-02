import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AbstractEntity } from "../../../../abstract/entity/abstract.entity";
import { FormEntity } from "../../entity/form.entity";

@Entity("submissions")
export class SubmissionEntity extends AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  formId!: string;

  @ManyToOne(() => FormEntity, (form) => form.submissions, {
    onDelete: "RESTRICT",
  })
  form!: FormEntity;

  @Column("json")
  content!: object;
}
