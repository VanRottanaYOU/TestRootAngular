export class Hero {
    id = 0; 
    name = '';
    addresses: Address[];
   }
   
   export class Address {
    street = '';
    city   = '';
    state  = '';
    zip    = '';

    constructor(street: string, city : string, state :string, zip: string){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
   }

   
   export const name="Hero";   