import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainPagination from './MainPagination';
import SelectCombo from '../Selector/SelectCombo';
import SearchSelect from '../Selector/SearchSelect';
import InputMulti from '../Write/InputMulti';
import InputOne from '../Write/InputOne';

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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1000, //  높이 지정 다시 해야 할 듯 
    margin: theme.spacing(1),
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(100),
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
        className={classes.tabs}
      >
        <Tab label="내 정보" {...a11yProps(0)} />
        <Tab label="스터디 등록" {...a11yProps(1)} />
        <Tab label="북마크" {...a11yProps(2)} />
    
      </Tabs>
      <TabPanel value={value} index={0}>
      <SearchSelect/> {/* 검색창   */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <div>
          <Typography componet="h6" variant="h6" gutterBottom>
            언어 / 지역 
          </Typography>
          <SelectCombo/>
          </div>
         
          <div>

          <Typography componet="h6" variant="h6" gutterBottom>
          제목을 적어주세요
          </Typography>

          </div>
          <div>
            <InputOne/>
          </div>
          <div>
            <InputMulti/>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MainPagination/>
      </TabPanel>


    </div>
  );
}
