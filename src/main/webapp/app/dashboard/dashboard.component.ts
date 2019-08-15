import Component from 'vue-class-component';
import {Inject, Vue} from 'vue-property-decorator';
import {IOperation} from '@/shared/model/operation.model';
import {IBankAccount} from '@/shared/model/bank-account.model';
import DashboardService from '@/dashboard/dashboard.service';

@Component
export default class Dashboard extends Vue {
  @Inject('dashboardService') private dashboardService: () => DashboardService;
  public bankAccounts: IBankAccount[] = [];
  public operations: IOperation[] = [];

  public mounted(): void {
    this.retrieveDashboard();
  }

  public retrieveDashboard(): void {
    this.dashboardService()
      .retrieve()
      .then(res => {
        this.bankAccounts = res.data.bankAccounts;
        this.operations = res.data.operations;
      });
  }
}
