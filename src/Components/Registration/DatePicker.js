// import React, { useState } from "react";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import DatePicker from "react-modern-calendar-datepicker";

// const DatePick = () => {
//     const [selectedDay, setSelectedDay] = useState(null);
//     return (
//         <DatePicker
//             value={selectedDay}
//             onChange={setSelectedDay}
//             inputPlaceholder="Select a Bridthday"
//             shouldHighlightWeekends
//             preventDefault

//         />
//     );

//     console.log(setSelectedDay)

// };

// export default DatePick;

// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BasicDatePicker() {
//     const [value, setValue] = React.useState(null);

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DatePicker
//                 label="Basic example"
//                 value={value}
//                 onChange={(newValue) => {
//                     setValue(newValue);
//                 }}
//                 renderInput={(params) => <TextField {...params} />}
//             />
//         </LocalizationProvider>
//     );
// }

// // date-fns
// npm install @date-io/date-fns
// // or for Day.js
// npm install @date-io/dayjs
// // or for Luxon
// npm install @date-io/luxon
// // or for Moment.js
// npm install @date-io/moment
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
function DatePicker() {
    const [value, setValue] = React.useState(new Date('2022-07-01'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={4} sx={{ width: '250px' }}>
                <DesktopDatePicker
                    label="Brithdate"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />

            </Stack>
        </LocalizationProvider>
    );
}
export default DatePicker;