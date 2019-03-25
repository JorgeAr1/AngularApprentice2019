import { NgbPaginationFirst } from '@ng-bootstrap/ng-bootstrap';

export class User {
    name: {first: string,
        last: string
    };
    email: string;
    address: string;
    picture: {large: string};
  }