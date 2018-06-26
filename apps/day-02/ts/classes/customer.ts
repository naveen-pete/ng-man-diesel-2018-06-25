class Customer {
  // id: number = 2;
  // name: string = 'krish';
  // phone: string = '12345';

  // id = 2;
  // name = 'krish';
  // phone = '12345';

  // constructor(id: number, name: string, phone: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.phone = phone;
  // }

  constructor(
    private id: number,
    private name: string,
    private phone: string
  ) {}

  get Id() {
    return this.id;
  }

  set Id(val: number) {
    this.id = val;
  }

  showDetails(): void {
    console.log('Customer details:');
    console.log('  id:', this.id);
    console.log('  name:', this.name);
    console.log('  phone:', this.phone);
  }
}

const c = new Customer(1, 'hari', '12345');
c.showDetails();

c.Id = 100;
console.log(c.Id);
