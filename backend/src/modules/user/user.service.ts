import { UserRepository } from "./user.repository";
import { CreateUserDTO, UpdateUserDTO } from "../user/dto/user.dto";
import { UserEntity } from "../user/entity/user.entity";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const user = await this.userRepository.createUser(createUserDTO);
    return user;
  }

  async updateUser(
    id: string,
    updateUserDTO: UpdateUserDTO
  ): Promise<UserEntity | undefined> {
    const user = await this.userRepository.updateUser(id, updateUserDTO);
    return user;
  }

  async findById(id: string): Promise<UserEntity | null | undefined> {
    const user = await this.userRepository.findById(id);
    return user;
  }

  async findByUsername(
    username: string
  ): Promise<UserEntity | null | undefined> {
    const user = await this.userRepository.findByUsername(username);
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}