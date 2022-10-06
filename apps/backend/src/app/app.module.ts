import { Module } from '@nestjs/common';
import { CoreModule } from '@task-manager/core';

@Module({
  imports: [CoreModule],
})
export class AppModule {}
