import { CSSProperties } from 'react';
import { TitleBarProps } from '../title-bar/interface';

export interface PageContainerProps extends TitleBarProps {
  className?: string;
  style?: CSSProperties;
  children?: any;
}
