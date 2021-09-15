import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TenantService {
    private _account: Account | null  = null;

    constructor(@InjectModel(Account) private accountModel: typeof Account){}

    get account() {
        return this._account;
    }

    set account(tenant: Account){
        this._account = tenant;
    }

    async setTenantBy(subdomain: string){
        this.account = await this.accountModel.findOne({
            where: {
                subdomain
            },
            rejectOnEmpty: true
        });
    }
}
