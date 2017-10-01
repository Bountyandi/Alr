import React, { PureComponent } from 'react';
import ParserForm from '../containers/ParserForm';
import PropositionsList from '../containers/PropositionsList';
import styles from './styles.css';

const UserPage = () => (
  <div>
    <h2>User Page</h2>
    <ParserForm />
    <PropositionsList />
  </div>
);

export default UserPage
