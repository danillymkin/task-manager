import { Module } from '@nestjs/common';
import { CoreModule } from '@task-manager/core';
import { PrismaModule } from '@task-manager/prisma';
import { UserModule } from '@task-manager/user';

@Module({
  imports: [CoreModule, UserModule, PrismaModule],
})
export class AppModule {}
