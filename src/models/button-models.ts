import {ReactNode} from 'react';

export interface IButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
}
