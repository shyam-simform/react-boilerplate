import React from 'react';

export type NestedRoute = {
  element: React.FC;
  path: string;
  index?: boolean;
  children?: NestedRoute[];
  extra?: React.FC<{ children: React.ReactNode }>;
  guards?: React.FC<{ children: React.ReactNode }>[];
  isAuth?: boolean;
};
