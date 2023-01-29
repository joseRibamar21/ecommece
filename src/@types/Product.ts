export type Product = {
  id: number,
  category: string,
  subCategories: {
    id: number,
    name: string
  }[],
  name: string,
  subtitle: string,
  price: number,
  descont: number,
  banner: string,
  description: string,
  reputation: number
};
