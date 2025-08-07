import React from 'react';
import { GuardComponent } from './guards';

export type NestedRoute = {
  element: React.FC;
  path: string;
  index?: boolean;
  children?: NestedRoute[];
  extra?: React.FC<{ children: React.ReactNode }>;
  guards?: GuardComponent[];
  isAuth?: boolean;
};
