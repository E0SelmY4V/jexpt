# Jexpt - JS Export Tool

Through this tool, You can export your project like:

```javascript
require('jexpt')(
  module.exports,
  require('./lib/ooo'),
  require('./lib/xxx'),
);
```

And your .d.ts looks like:

```typescript
export * from './lib/ooo'
export * from './lib/xxx'
```
