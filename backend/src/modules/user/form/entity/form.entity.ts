import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "../../../abstract/entity/abstract.entity";
import { FormFields, FormStatus } from "../model/form.model";
import { SubmissionEntity } from "../submission/entity/submission.entity";
import { UserEntity } from "../../entity/user.entity";
import { FormId } from "../model/form-id";

@Entity("forms")
export class FormEntity extends AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: FormId;

  @Column()
  userId!: string;

  @ManyToOne(() => UserEntity, (user) => user.forms, {
    onDelete: "RESTRICT",
  })
  user!: UserEntity;

  @OneToMany(() => SubmissionEntity, (submission) => submission.form, {
    cascade: ["insert", "update"],
  })
  submissions!: SubmissionEntity[];

  @Column()
  link!: string;

  @Column("json")
  fields!: FormFields;

  @Column()
  status!: FormStatus;
}
