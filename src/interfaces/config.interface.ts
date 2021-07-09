export interface View {
  id: number;
  name: string;
  apiPath: string;
  dataPath: string;
  routerPath: string;
  containers: any[];
}

export interface UIConfig {
  views: View[];
}
