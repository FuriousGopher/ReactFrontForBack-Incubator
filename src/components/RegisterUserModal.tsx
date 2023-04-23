import React, {useState} from 'react';
import {Dialog} from "@material-ui/core";
import {Button, TextField, CircularProgress} from "@mui/material";
import Bathtub from '@mui/icons-material/Bathtub';
import {registerUser} from "../api/users";



export const RegisterUserModal = ({isModalOpen, onClose}: { isModalOpen: boolean, onClose: () => void }) => {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(login, email, password)
        try {
            await registerUser(email, login, password)
            onClose()
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Dialog open={isModalOpen} onClose={onClose}>
            {
                isLoading ? (
                    <CircularProgress/>
                ) : (
                    <form onSubmit={handleSubmit}
                          style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <TextField
                            inputMode={"text"}
                            label={'Login'}
                            value={login}
                            onChange={(e)=>{setLogin(e.currentTarget.value)}}
                        />
                        <TextField
                            inputMode={"email"}
                            label={'Email'}
                            value={email}
                            onChange={(e)=>{setEmail(e.currentTarget.value)}}
                        />
                        <TextField
                            inputMode={"text"}
                            label={'Password'}
                            value={password}
                            onChange={(e)=>{setPassword(e.currentTarget.value)}}
                        />
                        <Button type={"submit"}
                                startIcon={<Bathtub/>}
                        >
                            Submit
                        </Button>

                    </form>
                )
            }
        </Dialog>
    );
};