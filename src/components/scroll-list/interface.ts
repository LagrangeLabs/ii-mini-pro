import { ScrollViewProps } from '@tarojs/components/types/ScrollView';

export interface ScrollListProps extends ScrollViewProps {
  distance?: number;
  loading?: boolean;
  hasRefresh?: boolean;
  hasMore?: boolean;
  nodataText?: string;
  list?: any[];
  children?: any;
  onRefresh?(): void;
}
