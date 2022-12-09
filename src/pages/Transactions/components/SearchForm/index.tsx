import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SeachFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data)
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}