import React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./users";
import { defaultTheme } from 'react-admin';

const theme = {
    ...defaultTheme,
    palette: {
        mode: 'dark', // Switching the dark mode on is a single property value change.
    },
};

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function AdminPage() {
   return (
    <Admin theme={theme} dataProvider={dataProvider}>
           <Resource name='users' list={UserList}/>
       </Admin>
   );
}

export default AdminPage;