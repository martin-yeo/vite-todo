import { useState } from 'react';

function TodoInsert( onInsert ) {
  
  const [text, setText] = useState('')

  const onChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    onInsert(text)
    setText('')
    e.preventDefault()
  }

  return ( 
    <div>
      <form onSubmit={onSubmit}>
        <input 
          placeholder="할 일을 입력하세요."
          type="text"
          value={text}
          onChange={onChange}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default TodoInsert;