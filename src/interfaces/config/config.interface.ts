export interface View {
  id: number;
  name: string;
  apiPath: string;
  dataPath: string;
  routerPath: string;
  containers: Container[];
}

export interface UIConfig {
  views: View[];
}

export interface Container {
  id: number;
  name: string;
  translation: string;
  width: number;
  headline: string;
  components: any[];
}
