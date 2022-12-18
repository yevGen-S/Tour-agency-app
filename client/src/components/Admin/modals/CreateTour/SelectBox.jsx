import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuid } from 'uuid';

export const SelectBox = ({ items, label, handler }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
        handler(e);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>{label}</InputLabel>

                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {label === 'Tour'
                        ? items?.map((item) => {
                              return (
                                  <MenuItem value={item?.id} key={uuid()}>
                                      {item?.Tour_name}, {item?.id}
                                  </MenuItem>
                              );
                          })
                        : items?.map((item) => {
                              return (
                                  <MenuItem value={item?.id} key={uuid()}>
                                      {item?.name}
                                  </MenuItem>
                              );
                          })}
                    ;
                </Select>
            </FormControl>
        </Box>
    );
};
