import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TenantGuard } from 'src/tenant/tenant.guard';
import { TenantService } from 'src/tenant/tenant/tenant.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionsService } from './transactions.service';

@UseGuards(JwtAuthGuard, TenantGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private tenantService: TenantService
  ) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }
}
