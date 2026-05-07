# TypeScript প্রজেক্টে OOP-এর ৪টি Pillar কীভাবে Complexity কমায়?

বড় ধরনের TypeScript project তৈরি করার সময় code maintain করা, reusable রাখা এবং logic organize করা অনেক গুরুত্বপূর্ণ হয়ে যায়। এই সমস্যাগুলো সমাধানের জন্য Object-Oriented Programming (OOP)-এর চারটি মূল pillar অনেক সাহায্য করে:

- Inheritance [Code reuse বাড়ায়]
- Polymorphism [Flexible behavior দেয়]
- Abstraction [Complexity hide করে]
- Encapsulation [Data নিরাপদ রাখে]

এগুলো ব্যবহার করলে code আরও scalable, reusable এবং manageable হয়।

## ১. Inheritance

Inheritance এর মাধ্যমে একটি class অন্য class-এর property এবং method reuse করতে পারে। এতে করে একই প্রোপার্টি ও ম্যাথট বারবার লিখতে হয় না। এতে করে কোড অনেক কমে যায় এবং মেইনটেন্স এবং কোডে bug দেখা দিলে তা সহজেই খুজে বের করে solve করা সম্ভব হয়।

```typescript
class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(sleepingHour: number) {
    console.log(`${this.name} is sleeping ${sleepingHour} hours.`);
  }
}

class Student extends Parent {}

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getClass(classHour: number) {
    console.log(`${this.name} is taking ${classHour} hours class a day.`);
  }
}
```

এখানে **Parent** ক্লাশটিতে **Student** এবং **Teacher** ক্লাশের কমন প্রোপার্টি এবং ম্যাথড গুলো রাখা হয়েছে। **Student** class এবং **Teacher** class টি সহজেই Inheritance এর মাধ্যমে **Parent** class এর সবগুলো প্রোপ্রার্টি এবং ম্যাথডগুলো এক্কেস করতে পারছে। এতে করে কোর্ডের complexcity অনে কমে যাচ্ছে এবং কোডও কমে যাচ্ছে।

## ২. Polymorphism

এর সহজ নাম হলো বহুরূপী। আমাদের যদি কোন একটা ক্লাশের সেম নামের কোন একটি ম্যাথর্ড যদি ক্লাশ ভেদে ভিন্ন ভিন্ন আচরণ করে সেটাই **Polymorphism**। এর মানে আমার Method এর নাম সেম থাকবে class different হতে পারে এবং সেই ক্লাশ থেকে যদি আমরা instance তৈরি করি এবং ঐ instance কে যখন আমরা call করবো সেম Method দ্বারা তখন যদি same নামের Method আমাকে different different রেজাল্ট বা আচরণ করে করে সেই হচ্ছে **Polymorphism**। নিচে একটি উদারণ দেয়া হলো:

```typescript
class Person {
  getSleep() {
    console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student. I sleep  7 hours`);
  }
}

class Teacher extends Person {
  getSleep() {
    console.log(`I am a Teacher . I sleep for 6 hours`);
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Teacher();

console.log(person1.getSleep());
// I am a Normal Happy Person.I sleep for 8 hours

console.log(person2.getSleep());
// I am a student. I sleep  7 hours

console.log(person2.getSleep());
// I am a Teacher . I sleep for 6 hours
```

এখানে একই getSleep() method different output দিচ্ছে।

#### সুবিধা

- Flexible architecture তৈরি হয়
- Future feature add করা সহজ হয়
- Conditional logic কমে যায়
- Code extensible হয়

## ৩. Abstraction

Abstraction এর কাজ হলো শুধুমাত্র প্রয়োজনীয় feature expose করা এবং internal implementation hide করা।

TypeScript এ abstract class বা interface দিয়ে abstraction করা হয়।

```typescript
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} by Bkash`);
  }
}

class CardPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} by Card`);
  }
}
```

এখানে user শুধু pay() method জানবে, ভিতরে payment কীভাবে হচ্ছে সেটা জানার দরকার নেই।

### সুবিধা

- Complex logic hide করা যায়
- System flexible হয়
- Team collaboration সহজ হয়
- Large system modular হয়

## ৪. Encapsulation

‍‌‌Encapsulation হলো data এবং related method একসাথে class-এর ভিতরে রাখা এবং বাইরের unwanted access বন্ধ করা।

TypeScript এ private, public, protected ব্যবহার করে এটা করা হয়। যেমন:

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

### সুবিধা

- বাইরের code সরাসরি balance পরিবর্তন করতে পারবে না
- Sensitive data নিরাপদ থাকে
- Bug কম হয়
- Large project-এ logic control করা সহজ হয়

যদি encapsulation না থাকে তাহলে project-এর যেকোনো জায়গা থেকে data modify হতে পারে, যা future bug তৈরি করে।

## উপসংহার

OOP-এর চারটি pillar বড় TypeScript project-এ logic organize করতে এবং complexity কমাতে বিশাল ভূমিকা রাখে। মূলত এগুলো ব্যবহার করলে code reusable হয়, bug কমে, maintain করা সহজ হয়, project scalable হয় এবং team collaboration improve হয়। বিশেষ করে বড় Enterprise Level TypeScript project -এ OOP architecture long-term development অনেক সহজ করে দেয়।
