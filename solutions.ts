//Problem 1:
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

//Problem 2:
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

//Problem 3:
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

//Problem 4:
const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

//Problem 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
interface BookWithReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithReadStatus => {
  return {
    ...book,
    isRead: true,
  };
};

//Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`;
  }
}

//Problem 7:
type NumberOfArr = number[];
const getIntersection = (arr1: NumberOfArr, arr2: NumberOfArr): NumberOfArr => {
  return arr1.filter((item) => arr2.includes(item));
};
