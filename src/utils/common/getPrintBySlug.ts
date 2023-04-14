import prints from 'data/prints'

const getPrintBySlug = (slug: string) =>
  prints.find((print) => print.slug === slug)

export default getPrintBySlug
