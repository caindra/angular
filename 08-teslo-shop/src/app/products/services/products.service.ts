import { ProductsResponse, Gender, Product } from './../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  getProducts(options: Options): Observable<ProductsResponse> {
    const { limit = 10, offset = 0, gender = '' } = options;

    return this.http
      .get<ProductsResponse>(`${baseUrl}/products`, {
        params: {
          limit,
          offset,
          gender,
          // limit: limit,
          // offset: offset,
          // gender: gender,
        },
      })
      .pipe(tap((resp) => console.info(resp)));
  }

  getProductByIdSlug(idSlug: string): Observable<Product>{
    return this.http.get<Product>(`${baseUrl}/products/${idSlug}`);
  }

}
