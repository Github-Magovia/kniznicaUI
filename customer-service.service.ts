import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer, CustomerZoznamComponent} from "./src/app/models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<CustomerZoznamComponent[]> {
    return this.http.get<CustomerZoznamComponent[]>(`${this.apiUrl}`);
  }

  getCustomer(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, customer);
  }

}

