import React, {useState} from 'react';
import './App.css';
import {getUsers, IUser} from "./api/users";
import {Button, CircularProgress} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {UserCard} from "./components/UserCard";
import FaceIcon from '@mui/icons-material/Face';
import {RegisterUserModal} from "./components/RegisterUserModal";



function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onButtonClickHandler = async () => {
        setIsLoading(true)
        const response = await getUsers()
        console.log(response)
        setUsers(response.data.items)
        setIsLoading(false)
    }

    const onRegisterButtonClick = () => {
        setIsModalOpen(true)
    }

    return (

        <div className="App">
            <Button
                onClick={onButtonClickHandler}
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon/>}
            >
                Upload
            </Button>
           <RegisterUserModal isModalOpen={isModalOpen} onClose={()=> {setIsModalOpen(false)}}/>
            <Button
                onClick={onRegisterButtonClick}
                variant="contained"
                color="primary"
                startIcon={<FaceIcon/>}
            >
                Register
            </Button>
            <div>
                {
                    isLoading ? (
                        <CircularProgress color="secondary"/>
                    ) : (
                        <div>
                            {
                                users.map((user) => (
                                    <UserCard key={user.id} email={user.email} createdAt={user.createdAt} login={user.login}/>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}




export default App;
