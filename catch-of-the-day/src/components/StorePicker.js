import React from 'react';

class StorePicker extends React.Component {
  render() {
    //Anywhere else
    return (
      <form clasName="store-selector">
        {/*put comments in element that im reterning*/}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit  store </button>
      </form>

    )

  }
}

export default StorePicker;
