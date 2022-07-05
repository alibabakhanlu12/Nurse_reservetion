import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" sortable={false} />
        </Datagrid>
    </List>
);