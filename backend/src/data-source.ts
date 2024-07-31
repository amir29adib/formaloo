import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "./modules/user/entity/user.entity";
import { FormEntity } from "./modules/user/form/entity/form.entity";
import { SubmissionEntity } from "./modules/user/form/submission/entity/submission.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "formaloo",
    password: "formdtlexp",
    database: "formaloodb",
    synchronize: true,
    logging: false,
    entities: [UserEntity, FormEntity, SubmissionEntity],
    migrations: [],
    subscribers: [],
});
