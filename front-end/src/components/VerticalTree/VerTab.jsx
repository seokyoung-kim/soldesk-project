import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Profile from './Profile';
import BookMark from './BookMark';
import RegisterStudy from './RegisterStudy';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 900, //  높이 지정 다시 해야 할 듯 
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}>
        <Tab label="내 정보" {...a11yProps(0)} />
        <Tab label="스터디 등록" {...a11yProps(1)} />
        <Tab label="북마크" {...a11yProps(2)} />
      </Tabs>

      {/*내 정보*/}
      <TabPanel value={value} index={0}>
      <Profile/>
      </TabPanel>

      {/* 스터디 등록 */}
      <TabPanel value={value} index={1}>
        <RegisterStudy/>
      </TabPanel>

      <TabPanel value={value} index={2}>
       <BookMark/>
      </TabPanel>
    </div>
  );
}
