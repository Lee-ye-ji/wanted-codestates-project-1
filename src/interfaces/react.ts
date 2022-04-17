import { ReactChildren, ReactChild } from 'react';

export interface ReactChildType {
  children: ReactChild | ReactChildren;
}

export interface ReactMultipleChildType {
  children: React.ReactNode;
}
