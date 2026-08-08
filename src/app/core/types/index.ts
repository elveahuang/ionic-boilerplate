import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface Environment {
    production: boolean;
}

export interface R {
    code: number;
    message: string;
    data: any;
}

export type Headers =
    | HttpHeaders
    | {
          [header: string]: string | string[];
      };

export type Params =
    | HttpParams
    | {
          [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
