import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    
    if(prevState.tarefas === this.state.tarefas) {

    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))}

  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas")
    const tarefasObjeto = JSON.parse(tarefasString)

    this.setState({tarefas: tarefasObjeto})
  };

  onChangeInput = (event) => {this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novoItemTarefa = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novoItemTarefa, inputValue: '' });

  }

  selectTarefa = (id) => {
    const ListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const alteraTarefa = {...tarefa, completa: !tarefa.completa}
        return alteraTarefa
      }
      return tarefa
    })
    this.setState({tarefas: ListaDeTarefas})

  }

  onChangeFilter = (event) => {this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
