export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Zomato & Swiggy handle their Carts differently: An Engineering Deep Dive into User Friction',
    excerpt:
      "An engineering deep dive into how database schema constraints (Singleton vs. Composite Keys) dictate user friction, frontend state complexity, and product strategy for Swiggy and Zomato.",
    date: 'Mar 2026',
    readTime: '5 min read',
    url: 'https://medium.com/@gauravnetes/zomato-swiggy-handle-their-carts-differently-an-engineering-deep-dive-into-user-friction-6ea795fba828',
  },
];
