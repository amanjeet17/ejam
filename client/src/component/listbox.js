import React, { PureComponent, useEffect, useState } from 'react';


const Listbox = (props) => {
  const [items, setItems] = useState({
    selectedItems: [],
    mostRecentItem: undefined
  })

  const handleKeyDown=(event)=> {
    switch (event.key) {
      case 'ArrowDown':
        if (items.mostRecentItem < props.options.length - 1) {
          selectItem(items.mostRecentItem + 1);
        }
        event.preventDefault();
        break;
      case 'ArrowUp':
        if (items.mostRecentItem > 0) {
          selectItem(items.mostRecentItem - 1);
        }
        event.preventDefault();
        break;
    }
  }

 const selectItem=(index)=> {
    setItems({ mostRecentItem: index, selectedItems: [index] });
    props.updatecitySelection(index)
  }

    return (
      <div>
        <h2 className='heading' id={`listbox${props.id}-heading`}>
          {props.heading}
        </h2>
        <div className='list-option'>
          <ul
            aria-labelledby={`listbox${props.id}-heading`}
            id={`listbox${props.id}`}
            role='listbox'
            className='slds-listbox slds-listbox_vertical'
            onKeyDown={
              (e) => { handleKeyDown(e) }
            }
          >
            {
              props.options.map((option, i) => {
                const tabIndex =
                items.mostRecentItem === i ? '0' :
                    '-1';
                return (
                  <li key={i} role='presentation' >
                    <div
                      aria-selected={
                        items.selectedItems.indexOf(i) >= 0 ?
                          'true' : 'false'
                      }
                      id={`listbox${props.id}-option${i}`}
                      role='option'
                      tabIndex={tabIndex}
                      className='city-name'
                      onClick={() => { selectItem(i) }}
                      onKeyDown={
                        (e) => { handleKeyDown(e, i) }
                      }
                    >
                      {option.name}
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>

      </div>
    );
}

export default Listbox;