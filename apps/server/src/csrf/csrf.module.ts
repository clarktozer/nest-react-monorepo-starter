import { Module } from '@nestjs/common';
import { AntiForgeryGuard } from './csrf.guard';
import { AntiForgeryMiddleware } from './csrf.middleware';

@Module({
  providers: [AntiForgeryGuard, AntiForgeryMiddleware],
  exports: [AntiForgeryGuard, AntiForgeryMiddleware],
})
export class CsrfModule {}
