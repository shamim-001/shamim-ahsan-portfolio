export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  publishedAt: string
  updatedAt: string
  author: string
  tags: string[]
}

export interface CaseStudy {
  id: string
  title: string
  challenge: string
  solution: string
  results: string
  featuredImage: string
  publishedAt: string
}

