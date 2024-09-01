import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import CreatorList from './components/CreatorList';
import CreatorForm from './components/CreatorForm';
import './App.css'; // Import custom styles if needed

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddCreatorClick = () => {
    console.log("xjadjs")
    setShowForm(true);
  };

  const handleViewCreatorsClick = () => {
    setShowForm(false);
  };

  return (
    <div className="App">
      <div className="main-header">
        <React.Fragment>
        <h1>CREATORVERSE</h1>
        <div className="button-group">
          <Button primary onClick={handleViewCreatorsClick}>
            View All Creators
          </Button>
          <Button secondary onClick={handleAddCreatorClick}>
            Add a Creator
          </Button>
        </div>
        </React.Fragment>
      </div>
      <Container>
        {showForm ? <CreatorForm onClose={handleViewCreatorsClick}/> : <CreatorList />}
      </Container>
    </div>
  );
};

export default App;
