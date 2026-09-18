function Livro({ livro }) {
  return (
    <li className="livro">
      <strong>{livro.titulo}</strong> — {livro.autor} — {livro.anopublicação} —{' '}
      {livro.genero}
    </li>
  )
}

export default Livro
