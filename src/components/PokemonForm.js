import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleFormSubmit}) {

  const [formData,setFormData]=useState({
    name:"",
    hp:"",
    sprites:[]
  })

  function onChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
    }
  


  function onFormSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3001/pokemon",{
    method:"POST",
    headers: {
      "Content-type": "application/json",
    },
    body:JSON.stringify(formData)
  })
    .then((r)=>r.json())
    .then(()=>handleFormSubmit(formData))
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={onChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={onChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={onChange}
            value={formData.sprites[0]}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={onChange}
            value={formData.sprites[1]}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
