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

export type { portfolioForm, portfolio }