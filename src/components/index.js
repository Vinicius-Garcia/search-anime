import React,{useState} from 'react';

const SelectAnime = ({onSubmit})=>{
  const [id, setId] = useState('')
  async function handleSubmit(e){
    e.preventDefault();

   await onSubmit({
        id,
        
        });
        
        
}  
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label>ID do Anime</label>
        <input name="id" id="id" required value={id} onChange={e=> setId(e.target.value)}/>
      </div>
      <button type="submit">Salvar</button>
    </form>
  )
}
export default SelectAnime