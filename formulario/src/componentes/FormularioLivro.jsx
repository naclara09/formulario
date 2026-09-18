import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
  const [titulo, settitulo] = useState('')
  const [autor, setautor] = useState('')
  const [anopublicação, setanopublicação] = useState('')
  const [genero, setgenero] = useState('')

  const [livros, setLivros] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    const novoLivro = { titulo, autor, anopublicação, genero }
    setLivros([...livros, novoLivro])

    settitulo('')
    setautor('')
    setanopublicação('')
    setgenero('')
  }

  return (
    <section className="formulario-livro">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Titulo"
          name="titulo"
          value={titulo}
          onChange={(evento) => settitulo(evento.target.value)}
          placeholder="Ex: Senhor dos Aneis"
        />

        <CampoTexto
          label="autor"
          name="autor"
          value={autor}
          onChange={(evento) => setautor(evento.target.value)}
          placeholder="Ex:  J. R. R. Tolkien"
        />

        <CampoTexto
          label="ano de publicação"
          name="anopublicação"
          value={anopublicação}
          onChange={(evento) => setanopublicação(evento.target.value)}
          placeholder="Ex: 2005"
        />

        <CampoTexto
          label="genero"
          name="genero"
          value={genero}
          onChange={(evento) => setgenero(evento.target.value)}
          placeholder="Ex: ficcão cientifica"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro key={livro.anopublicação} livro={livro} />
          ))}
        </ul>

      </div>
    </section>
  )
}

export default FormularioLivro
