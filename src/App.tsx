import React, {useState} from 'react';
import './App.css';
import {getUsers, IUser} from "./api/users";
import {Button, CircularProgress} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {UserCard} from "./components/UserCard";
import FaceIcon from '@mui/icons-material/Face';
import {RegisterUserModal} from "./components/RegisterUserModal";
import {UsersDrawer} from "./components/UsersDrawer";


function App() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);


    const onRegisterButtonClick = () => {
        setIsModalOpen(true)
    }

    return (

        <div className="App">
            <Button
                onClick={() => {
                    setIsDrawerOpen(true)
                }}
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon/>}
            >
                Upload
            </Button>
            <RegisterUserModal isModalOpen={isModalOpen} onClose={() => {
                setIsModalOpen(false)
            }}/>
            <UsersDrawer isOpen={isDrawerOpen} onClose={() => {
                setIsDrawerOpen(false)
            }} onOpen={() => {
                setIsDrawerOpen(true)
            }}/>
            <Button
                onClick={onRegisterButtonClick}
                variant="contained"
                color="primary"
                startIcon={<FaceIcon/>}
            >
                Register
            </Button>
        </div>
    );
}


export default App;
