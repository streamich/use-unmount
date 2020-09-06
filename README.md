# use-unmount

React hook that returns a single RxJS observable, which emits once 'true` when
the component is unmounted.

Install

```
yarn add use-unmount
```

Use

```js
import {useUnmount$} from 'use-unmount';

const Component = () => {
  const unmount$ = useUnmount$();

  const onClick = () => {
    createUser$({name})
      .pipe(takeUntil(unmount$))
      .subscribe(() => { /* ... */ });
  };
};
```



## License

[Unlicense](LICENSE) &mdash; public domain.
