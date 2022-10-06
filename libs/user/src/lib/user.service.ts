import { Injectable } from '@nestjs/common';
import { PrismaService } from '@task-manager/prisma';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  public async findOneById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  public async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  public async findOneByNickName(nickName: string) {
    return this.prisma.user.findUnique({
      where: { nickName },
    });
  }

  public async create(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await this.hashPassword(createUserInput.password);
    const defaultNickName = createUserInput.email.split('@')[0];

    const user = await this.prisma.user.create({
      data: {
        email: createUserInput.email,
        password: hashedPassword,
      },
    });

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        nickName: `${defaultNickName}_${user.id}`,
      },
    });
  }

  public async existByEmail(email: string): Promise<boolean> {
    const candidate = await this.prisma.user.findUnique({
      where: { email },
    });

    return !!candidate;
  }

  private async hashPassword(password: string): Promise<string> {
    const hashSalt = await bcrypt.genSalt();
    return await bcrypt.hash(password, hashSalt);
  }
}
