import { EColorScheme } from '@/redux/css';

export interface IRoute {
  name: string;
  path: string;
  exact?: boolean;
  link: boolean | string;
  bgrImg?: {
    [x in EColorScheme]: string;
  };
  icon?: () => JSX.Element;
  main: () => JSX.Element;
}
