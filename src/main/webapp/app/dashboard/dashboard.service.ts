import axios from 'axios';

const baseApiUrl = 'api/dashboard';

export default class DashboardService {
  public retrieve(): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function (res) {
        resolve(res);
      });
    });
  }
}
