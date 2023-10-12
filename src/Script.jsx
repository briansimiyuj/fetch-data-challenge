import { useState, useEffect } from 'react'
import Form from './Form'
import Table from './Table'

function Script() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const [reqType, setReqType] = useState('users'),

        [items, setItems] = useState([])

  useEffect(() =>{
  
    const fetchItems = async () =>{

      try{

        const response = await fetch(`${API_URL}${reqType}`),

              data = await response.json()

        setItems(data)

      }catch(err){

        console.log(err)

      }

    }

    fetchItems()
  
  }, [reqType])



  return (
    <div className="script">

      <Form reqType={reqType} setReqType={setReqType}/>

      <Table items={items}/>
      
    </div>
  );
}

export default Script;
