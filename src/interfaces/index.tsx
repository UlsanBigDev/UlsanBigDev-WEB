interface portfolioForm {
  title: string,
  content: string,
  startDate: Date,
  endDate: Date,
  headCount: number,
  list: string[]
}

interface portfolio {
  name: string,
  portfolioForm: portfolioForm[]
}

type sort = 'update' | 'add';

export type { portfolioForm, portfolio, sort }