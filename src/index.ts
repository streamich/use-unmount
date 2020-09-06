import { useMemo, useEffect } from 'react';
import { Observable, Subject } from 'rxjs';

export const useUnmount$ = (): Observable<true> => {
  const observable = useMemo(() => new Subject<true>(), []);

  useEffect(() => {
    return () => {
      observable.next(true);
      observable.complete();
    };
  });

  return observable;
};
