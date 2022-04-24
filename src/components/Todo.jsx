import React, { useState } from "react";
import List from "./mini-components/List";
import "./style.css";
const Todo = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]); //we just assigned an empty array here
  const onChangeHandler = (event) => {
    setCurrentItem(event.target.value); //this will store the input value in state variable
  };
  const addItemToList = () => {
    //checking if the input isn't empty
    if (currentItem != "") {
      //the spread operator will make sure every other list that we added have been added as well as new item i.e. currentItem
      //we need a unique key for every item so that we can identify them uniquely when we want to delete them, so we made input item as a object and stored its value as well as date.now for identifying it
      updateItemList([...itemList, { item: currentItem, key: Date.now() }]); //will save already added itemList as well as the items we just added
      setCurrentItem(""); //we will empty the input field after we add it to list
    } else {
      alert("Please enter something first!");
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark father">
        <div className="container  parentContainer">
          <div className="Input-wrapper  p-1">
            <input
              type="text"
              value={currentItem}
              onChange={onChangeHandler}
              placeholder="Add tasks"
            />
            <button onClick={addItemToList}>+</button>
          </div>
          {/* this will take the itemList array as prop  */}
          {/* we also passed updateItemList state because we also have to update it's value after we delete an item  */}
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </div>
    </>
  );
};
export default Todo;
