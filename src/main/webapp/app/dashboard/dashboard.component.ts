import Component from 'vue-class-component';
import {Inject, Vue} from 'vue-property-decorator';
import DashboardService from '@/dashboard/dashboard.service';
import {IBankAccount} from '@/shared/model/bank-account.model';
import {IOperation} from '@/shared/model/operation.model';
import AlertService from '@/shared/alert/alert.service';

@Component
export default class Dashboard extends Vue {
  @Inject('dashboardService') private dashboardService: () => DashboardService;
  @Inject('alertService') private alertService: () => AlertService;
  public bankAccounts: IBankAccount[] = [];
  public operations: IOperation[] = [];

  public dismissCountDown: number = this.$store.getters.dismissCountDown;
  public dismissSecs: number = this.$store.getters.dismissSecs;
  public alertType: string = this.$store.getters.alertType;
  public alertMessage: any = this.$store.getters.alertMessage;

  public getAlertFromStore() {
    this.dismissCountDown = this.$store.getters.dismissCountDown;
    this.dismissSecs = this.$store.getters.dismissSecs;
    this.alertType = this.$store.getters.alertType;
    this.alertMessage = this.$store.getters.alertMessage;
  }

  public countDownChanged(dismissCountDown: number) {
    this.alertService().countDownChanged(dismissCountDown);
    this.getAlertFromStore();
  }

  public mounted(): void {
    this.retrieveDashboard();
    this.alertService().showAlert('This is an error message', 'danger');
    this.getAlertFromStore();
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
