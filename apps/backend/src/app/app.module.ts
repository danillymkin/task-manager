import { Module } from '@nestjs/common';
import { CoreModule } from '@task-manager/core';
import { PrismaModule } from '@task-manager/prisma';
import { UserModule } from '@task-manager/user';

@Module({
  imports: [CoreModule, PrismaModule, UserModule],
})
export class AppModule {}
