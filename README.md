# Jexpt - JS Export Tool

Through this tool, You can export your project like:

```javascript
// index.js
require('jexpt')(exports, require).merge(
  'lib/ooo',
  'xxx',
).pack(
  { bar: 'lib/bar' },
  'foo',
);
```

```typescript
// index.d.ts
export * from './lib/ooo'
export * from './xxx'
export * as bar from './lib/bar'
export * as foo from './foo'
```

Besides, there is another way to export, which packaging tools understand:

```javascript
// index.js
require('jexpt')(
  exports,
  require('./lib/ooo'),
  require('./xxx'),
  {
    bar: require('./lib/bar'),
    foo: require('./foo'),
  }
);
```
