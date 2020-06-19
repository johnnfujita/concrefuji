import React, { Component } from 'react';

import styled from "styled-components"
import { DeleteForever } from "@styled-icons/material/DeleteForever"
import PropTypes from 'prop-types';
import Layout from './Layout';

const obras = [ "ASL", "CA", "CE", "EDC","FEA", "GM", "LU", "ODF", "POP", "SI", "FC"]
const tipos = ["Concreto", "Graute", "Argamassa"]
export class FormEvent extends Component {
   state =  {
    obra: "",
    tipo:"Concreto",
    serieGrupo: "",
    notaFiscal: "",
    horaDaUsina: "",
    horaDaMoldagem: "",
    traco: "",
    abatimento: "",
    dataDaMoldagem: "",
    observacoes: "",
    localDeAplicacao: "",
    pecas: [7, 7, 28, 28],
    observacao: "",
    ultimaEntrada: ""
    }
 

static propTypes = {
  addEvent: PropTypes.func.isRequired
};

  onChange = e => this.setState({ [e.target.name]: e.target.value});
  

  handleInsert = () => {

    const copyArray = Object.assign([], this.state.pecas)
    copyArray.push(Number(this.state.ultimaEntrada))
    
    this.setState({
        ...this.state,
        pecas: copyArray
    })
    
  }
  handleRemoveItem = (idx) => {
      
      this.setState({
          ...this.state,
          pecas: this.state.pecas.filter((peca, index)=> index !== idx )
      })
      console.log(this.state.pecas)
  }
  onSubmit = e => {
    e.preventDefault();
    const {
        obra, 
        tipo, 
        serieGrupo,
        notaFiscal,
        horaDaUsina,
        horaDaMoldagem,
        traco,
        abatimento,
        dataDaMoldagem,
      
        localDeAplicacao,
        pecas,
        observacao,
        ultimaEntrada
    } = this.state;

    const event = { 
        obra,  
        tipo,
        serieGrupo,
        notaFiscal,
        horaDaUsina,
        horaDaMoldagem,
        traco,
        abatimento,
        dataDaMoldagem,
        localDeAplicacao,
        pecas,
        observacao,
        ultimaEntrada
    };
    console.log(this.state.horaDaMoldagem)
    console.log(this.state)
    
    this.setState({
        obra: "",
        tipo: "Concreto",
        serieGrupo: '',
        notaFiscal: '',
        horaDaUsina: '',
        horaDaMoldagem: '',
        traco: '',
        abatimento: '',
        dataDaMoldagem: '',
        localDeAplicacao: '',
        pecas: [7, 7, 28, 28],
        observacao: "",
        ultimaEntrada: ""
    });
  };
    render() {
    const { 
        obra, 
        tipo,
        serieGrupo,
        notaFiscal,
        horaDaUsina,
        horaDaMoldagem,
        traco,
        abatimento,
        dataDaMoldagem,
        localDeAplicacao,
        pecas,
        observacao,
        ultimaEntrada
    } = this.state; 
    return (
        <Layout>
        <div className="container-form-cp">
      <div className="card card-body mt-4 mb-4" >
        <h2>Entrada CP</h2>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Tipo</label>
            <select className="form-control"  name="obra" onChange={this.onChange} >
                {obras.map((obra)=> (<option name="obra" value={obra} >{obra}</option>)
                )}
            </select>
          </div>
          <div className="form-group">
            <label>Ref Obra:</label>
            <select className="form-control"  name="tipo" onChange={this.onChange} >
                {tipos.map((tipo)=> (<option name="tipo" onChange={this.onChange} value={tipo} >{tipo}</option>)
                )}
            </select>
          </div>
          <div className="form-group">
            <label>Número CP</label>
            <input className="form-control" type="text" name="serieGrupo" onChange={this.onChange} value={serieGrupo}/>
          </div>
          <div> 
            <label>Nota Fiscal</label>
            <input className="form-control" type="text" name="notaFiscal" onChange={this.onChange} value={notaFiscal} />
          </div>
         
          { this.state.tipo === "Concreto" ? (
            <div>
                <div> 
                    <label>Hora da Usina</label>
                    <input className="form-control" type="time" name="horaDaUsina" onChange={this.onChange} value={horaDaUsina} />
                </div>
                <div> 
                    <label>Hora da Moldagem</label>
                    <input className="form-control" type="time" name="horaDaMoldagem" onChange={this.onChange} value={horaDaMoldagem} />
                </div>
            </div>) : ""}
          
          
          <div> 
            <label>Traço (MPa)</label>
            <input className="form-control" type="text" name="traco" onChange={this.onChange} value={traco} />
          </div>
          { this.state.tipo !== "Argamassa" ? (
            <div> 
                <label>Abatimento (mm)</label>
                <input className="form-control" type="text" name="abatimento" onChange={this.onChange} value={abatimento} />
            </div>
            ) : ""
            }
            <div className="form-group">
                <label>Data da Moldagem</label>
                <input className="form-control" type="date" name="dataDaMoldagem" onChange={this.onChange} value={dataDaMoldagem}/>
            </div>
            <div className="form-group">
                <label>Local da Aplicação</label>
                <input className="form-control" type="text" name="localDeAplicacao" onChange={this.onChange} value={localDeAplicacao}/>
            </div>
            <div className="form-group">
                <label>Idade(dias)</label>
                {this.state.pecas.map((peca, idx)=>
                    <div key={idx} style={{display: "flex", flexDirection: "row",padding: "12px", justifyContent: "space-between", alignItems: "center"}}><span style={{width: "80%",backgroundColor: "#f0f0f0", padding: "10px"}}> {peca} dias</span><DeleteForeverIcon size={22} onClick={()=>this.handleRemoveItem(idx)} /></div>
                )}
                <input className="form-control" type="text" name="ultimaEntrada" onChange={this.onChange} value={ultimaEntrada}/>
                <div onClick={this.handleInsert}>ADD</div>
            </div>
          <div className="form-group">
            <label>Obs:</label>
            <textarea className="form-control" type="text" name="message" onChange={this.onChange} value={observacao} />
            <div className="form-group" style={{display: "flex", justifyContent: "center"}}>
              <button type="submit" style={{margin: 10}} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </Layout>
    );
  }
}

/*note the null object inside connect, since we are not importing state from reducer beforehand, we can just pass the
 * function that will send data to the server
 */

export default FormEvent;


const DeleteForeverIcon = styled(DeleteForever)`
color: red;
:hover {
    cursor: pointer;
}
`