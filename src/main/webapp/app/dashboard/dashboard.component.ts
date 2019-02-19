import Component from 'vue-class-component';
import {Inject, Vue} from 'vue-property-decorator';
import BankAccountService from '@/entities/bank-account/bank-account.service';
import {IBankAccount} from '@/shared/model/bank-account.model';
import {IOperation} from '@/shared/model/operation.model';
import OperationService from '@/entities/operation/operation.service';

@Component
export default class Dashboard extends Vue {
  @Inject('bankAccountService') private bankAccountService: () => BankAccountService;
  @Inject('operationService') private operationService: () => OperationService;
  public bankAccounts: IBankAccount[] = [];
  public operations: IOperation[] = [];

  public mounted(): void {
    this.retrieveEntities();
  }

  public retrieveEntities(): void {
    this.bankAccountService()
      .retrieve()
      .then(res => {
        this.bankAccounts = res.data;
      });
    this.operationService()
      .retrieve()
      .then(res => {
        this.operations = res.data;
      });
  }
}
