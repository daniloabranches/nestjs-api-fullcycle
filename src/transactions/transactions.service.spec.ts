import { getModelToken } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Account } from 'src/accounts/entities/account.entity';
import { TenantService } from 'src/tenant/tenant.service';
import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        TenantService,
        {
          provide: getModelToken(Transaction),
          useValue: {}
        },
        {
          provide: getModelToken(Account),
          useValue: {}
        }
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
