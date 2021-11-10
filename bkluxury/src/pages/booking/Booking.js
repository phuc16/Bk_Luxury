import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Box, Container, Tab} from '@mui/material';
import React from 'react';
import Search from './components/Search';
import RoomInfo from './components/RoomInfo';

export default function Booking(){
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{marginTop: 2}}>
            <Search />
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1"><RoomInfo /><RoomInfo /></TabPanel>
                <TabPanel value="2"><RoomInfo /></TabPanel>
                <TabPanel value="3"><RoomInfo /></TabPanel>
            </TabContext>
            </Box>
        </Container>
    );
}