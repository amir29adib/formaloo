import { DataSource, DeepPartial, Repository } from "typeorm";
import { UserEntity } from "../user/entity/user.entity";
import { CreateUserDTO, UpdateUserDTO } from "../user/dto/user.dto";
import { User } from "./models/user.model";

export class UserRepository extends Repository<UserEntity> {
  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const user = this.create(createUserDTO);
    await this.save(user);
    return user;
  }
  async updateUser(
    id: string,
    updateUserDTO: UpdateUserDTO
  ): Promise<UserEntity | undefined> {
    let user: UserEntity | null;
    try {
      user = await this.findOne({ where: { id } });
      if (!user) {
        return undefined;
      }
      Object.assign(user, updateUserDTO);
      await this.save(user);
      return user;
    } catch (error) {
      throw new Error(`Error updating user: Error`);
    }
  }

  async findById(id: string): Promise<UserEntity | undefined | null> {
    return await this.findOne({ where: { id } });
  }

  async findByUsername(
    username: string
  ): Promise<UserEntity | undefined | null> {
    return await this.findOne({ where: { username } });
  }

  async getAll(): Promise<UserEntity[]> {
    try {
      return await this.find();
    } catch (error) {
      throw new Error(`Error getting all users: Error`);
    }
  }
}


