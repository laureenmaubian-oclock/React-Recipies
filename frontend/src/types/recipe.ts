export type Ingredient = {
  id: number;
  quantity: number | string;
  unit: string;
  name: string;
};

export type Recipe = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author: string;
  difficulty: string;
  preparationTime?: number;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
};