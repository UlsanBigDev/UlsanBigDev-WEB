interface portfolioForm {
  title: string,
  content: string,
  startDate: string,
  endDate: string,
  headCount: number,
  list: string[]
}

interface portfolio {
  name: string,
  portfolioForm: portfolioForm[]
}

export type { portfolioForm, portfolio }