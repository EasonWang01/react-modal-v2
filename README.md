# Install
```
npm install react-modal-v2
```

# Import

```js
import { Modal } from 'react-modal-v2';
```

# Example

```js
import React, { Component } from 'react';
import { Modal } from 'react-modal-v2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ showModal: true })}>Open</button>
        {
          this.state.showModal ?
            <Modal modalOutsideClick={() => this.setState({ showModal: false })}>
              <div>I'm content</div>
              <button onClick={() => this.setState({ showModal: false })}>Close</button>
            </Modal> : ''
        }
      </div>
    );
  }
}

export default App;
```

# Props

- modalOutsideClick
> Trigger when user click on the modal background.
- modalOutsideStyle
> Custom modal background style.
- modalInsideStyle
> Custom modal content style.