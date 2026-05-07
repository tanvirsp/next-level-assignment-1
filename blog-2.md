# TypeScript-এ Reusable এবং Strictly Typed Code তৈরি করতে Generics এর গুরুত্ব

TypeScript-এর সবচেয়ে powerful feature গুলোর মধ্যে একটি হলো Generics। সহজভাবে বলতে গেলে ডাটা টাইপগুলোকে dynamically ভাবে generalize করা।

ধরো তুমি এমন একটি function তৈরি করেছো যেটা type হিসেবে number নিবে এবং একটি number array তৈরি করে দিবে। Example:

```typescript
const createArrayWithNumber = (value: number) => [value];
```

এখন আরো একটি function তৈরি করেছো যেটা type হিসেবে string নিবে এবং একটি string array তৈরি করে দিবে। Example:

```typescript
const createArrayWithString = (value: string) => [value];
```

এভাবে এখন যদি array of object এবং array of boolean লাগে তাহলে প্রতিটি type এর জন্য ভিন্ন ভিন্ন ফাংশন তৈরি করতে হবে। ফাংশনের কাজ কিন্তু একই। শুধু পার্থক্য হলো type।

এখন সবগুলোর জন্য যদি একটিমাত্র ফাংশন ব্যবহার করা যেত তাহলে কোড অনেকটা কমে যেত এবং কাজও দ্রুত হতো। সেই জন্যই generics এর ব্যবহার। যে কাজটি আমরা দুটি আলাদা আলাদা ফাংশনের সাহায্যে করতে হচ্ছে সেটা চাইলে আমরা Generics এর সাহায্যে একটি মাত্র ফাংশন দিয়েই re-use করতে পারি। Example:

```typescript
const createArrrayWithGeneric = <T>(value: T) => [value];
```

এই ফাংশনের সাহায্যে আমি সহজেই array of string, array of number, array of object, array of boolean তৈরি করতে পারবো। এটিই হলো Generics এর সবথেকে বড় সুবিধে।

উপরের ফাংশনগুলোতে আমরা একটি generics ব্যবহার করেছি। আমরা চাইলে একাধিক generics type ব্যবহার করতে পারি।

### Generic React Component Example

React + TypeScript project-এ Generics খুব useful।

#### Example

```typescript
type Props<T> = {
  items: T[];
};

function List<T>({ items }: Props<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}
```

#### Usage

```typescript

<List items={[1, 2, 3]} />

<List items={["A", "B", "C"]} />

```

একই component different data structure handle করছে।

### Strict Typing কীভাবে বজায় থাকে?

Generics data-এর type dynamically গ্রহণ করলেও type safety নষ্ট হতে দেয় না।

#### Example

```typescript
function printLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}
```

এখানে constraint ব্যবহার করা হয়েছে।

### Valid

```typescript
printLength("Hello");
printLength([1, 2, 3]);
```

### Invalid

```typescript
printLength(100);
```

কারণ number-এর length property নেই।

### Generics ব্যবহারের মূল সুবিধা

- একই code বিভিন্ন type-এর জন্য ব্যবহার করা যায়
- ভুল type detect করা যায়
- বড় project maintain সহজ হয়
- Dynamic data structure handle করা যায়
- Auto-suggestion এবং IntelliSense ভালো কাজ করে

## উপসংহার

Generics TypeScript-এর এমন একটি feature যা reusable এবং scalable code তৈরি করতে সাহায্য করে, কিন্তু type safety কখনও হারাতে দেয় না।

এর মাধ্যমে আমরা:

- reusable function
- reusable component
- reusable interface
- reusable service
