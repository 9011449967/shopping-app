import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProducts() {
    return this.httpClient.get(
      "http://angular.pureecosoft.com/api/product/list"
    );
  }
  deleteProduct(id) {
    return this.httpClient.post(
      `http://angular.pureecosoft.com/api/product/Delete?id=${id}`,
      ""
    );
  }
}
