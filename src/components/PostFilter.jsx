import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput
          value = {filter.searched}
          onChange = {e=> setFilter({...filter, searched: e.target.value})}
          placeholder = "Поиск..."
        />
        <MySelect
          value={filter.sorted}
          onChange={selectedSort => setFilter({...filter, sorted: selectedSort})}
          defaultValue="Сортировка"
          options={[
            {value:"title", name:"По названию"},
            {value:"body", name:"По описанию"}
          ]}  
        />
      </div>
  )
}
export default PostFilter