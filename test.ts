type Foo = { bar: string; };
const a: Foo = { bar: 'foobar' } as unknown as Foo;

console.log(a);
