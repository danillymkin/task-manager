import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaModule } from '@task-manager/prisma';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
