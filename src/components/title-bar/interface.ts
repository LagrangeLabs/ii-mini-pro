export interface TitleBarProps {
  title: string;
  path: string;
  classname?: string;
  type?: 'homePage' | 'subPage';
  hasBack?: boolean;
  bgColor?: string;
  fontColor?: string;
}
