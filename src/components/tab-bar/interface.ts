import { CSSProperties } from 'react';

export type TCurrentData = {
  title: string;
  path?: string;
  dotText?: string | number;
};

export type TTab = {
  title: string;
  icon: string;
  path?: string;
  dot?: boolean;
  dotText?: string | number;
  dotBg?: string;
  dotColor?: string;
};

export interface TabBarProps {
  current: number;
  tabList: TTab[];
  backgroundColor?: string;
  iconSize?: number;
  fontSize?: number;
  color?: string;
  selectedColor?: string;
  style?: CSSProperties;
  classname?: string;
  onClick?(current: number, currentData: TCurrentData): void;
}
