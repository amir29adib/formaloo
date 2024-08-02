import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "../../abstract/entity/abstract.entity";
import { FormEntity } from "../form/entity/form.entity";

@Entity("users")
export class UserEntity extends AbstractEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  username!: string;

  @OneToMany(() => FormEntity, (form) => form.user, {
    cascade: ["insert", "update"],
  })
  forms!: FormEntity[];
}
