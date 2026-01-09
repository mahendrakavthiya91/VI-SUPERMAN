```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

/**
 * HomePage component displays the main heading for VI-SUPERMAN project management tool
 * @param {Object} props - Component props
 * @param {string} props.title - Custom title for home page heading
 */
const HomePage = ({ title = 'VI-SUPERMAN Project Management Tool' }) => {
  try {
    return (
      <div data-testid="home-page-container">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            color: 'primary.main',
            textAlign: 'center'
          }}
        >
          {title}
        </Typography>
      </div>
    );
  } catch (error) {
    console.error('Error rendering HomePage component:', error);
    return <div>Error loading home page</div>;
  }
};

// PropTypes for type checking and documentation
HomePage.propTypes = {
  title: PropTypes.string
};

export default HomePage;
```