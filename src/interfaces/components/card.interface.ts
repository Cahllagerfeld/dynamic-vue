export interface CardConfig {
  headline: string;
  color: string;
  fields: CardFieldDefinition[];
}

export interface CardFieldDefinition {
  id: number;
  label: string;
  value: string;
  order: number;
}
