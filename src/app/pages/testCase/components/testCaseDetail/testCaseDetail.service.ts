import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TestCaseDetailService {
  private url = 'http://127.0.0.1:9090/testcase/';
  constructor(private http: Http){}
  getTestCaseDetail(uid: string): Promise<any> {
    return this.http.get(this.url + uid).toPromise().then(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
