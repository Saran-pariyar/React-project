import React from "react";
import "./list.css";
const List = ({ itemList, updateItemList }) => {
  const deleteItemFromList = (key) => {
    //this filter() method will return all the item except the item we want to delete and the output will be saved to the variable newList
    const newList = itemList.filter((itemObj) => {
      return itemObj.key !== key;
    });
    updateItemList(newList); //this will update the list to with the newList array and the deleted items will not be showed
  };
  return (
    <>
      <div className="wrapper container">
        {itemList.map((itemObj) => {
          return (
            //we gave key to avoid errors that may cause late in console, map always needs unique key
            <div key={itemObj.key} className="item bg-primary">
              {console.log(itemObj.key)}
              <p>{itemObj.item}</p>
              {/* the onclick function will take itemObj.key(i.e. date.now) to identify the item  */}
              {/* we can't directly give parameter to the function here, so we made an extra anonymous function and gave parameter to  deleteItemFromList() */}
              <button onClick={() => {deleteItemFromList(itemObj.key);}}>x</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default List;
