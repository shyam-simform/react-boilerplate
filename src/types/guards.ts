import { FC, ReactNode } from 'react';

export type GuardProps = {
  children: ReactNode;
};

export type GuardComponent = FC<GuardProps>;

export type GuardFunction = (roles?: string[]) => GuardComponent;
