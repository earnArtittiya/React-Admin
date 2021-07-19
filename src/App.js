// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import {UserList}from "./Users"
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate } from "./Posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import AuthProvider from "./AuthProvider";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={AuthProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);
export default App;
