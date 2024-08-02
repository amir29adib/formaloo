import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "../../../abstract/entity/abstract.entity";
import { FormFields, FormStatus } from "../model/form.model";
import { SubmissionEntity } from "../submission/entity/submission.entity";
import { UserEntity } from "../../entity/user.entity";

@Entity("forms")
export class FormEntity extends AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

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
