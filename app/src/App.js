import React, { useState } from 'react'

const carros = [
  {categoria: "Esporte", preco: "95000", modelo: "Golf GTI"},
  {categoria: "Esporte", preco: "99000", modelo: "Camaro"},
  {categoria: "SUV", preco: "120000", modelo: "Jeep Compas"},
  {categoria: "SUV", preco: "83000", modelo: "T-Cross"},
  {categoria: "Outro", preco: "95500", modelo: "Hilux"},
  {categoria: "Outro", preco: "95700", modelo: "Toro"}
]

const linhas = (cat) => {
  const li = []
  carros.forEach(
    (carro) => {
      if(carro.categoria.toUpperCase() == cat.toUpperCase() || cat == '') {
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  
  return li

}

const tabelaCarros = (cat) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Preço</th>
          <th>Modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
}

const pesquisaCategoria = (categoria, setCat) => {
  
  return (
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={categoria} onChange={(e) => setCat(e.target.value)}/>
    </div>
  )
}

function App() {

  const [categoria, setCategoria] = useState('')

  return (
    <>
      {pesquisaCategoria(categoria, setCategoria)}
      <br />
      {tabelaCarros(categoria)}
    </>
  );
}

export default App;