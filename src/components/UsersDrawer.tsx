import React, {useEffect, useState} from 'react';
import {SwipeableDrawer} from "@material-ui/core";
import {getUsers, IUser} from "../api/users";
import {CircularProgress} from "@mui/material";
import {UserCard} from "./UserCard";

interface UsersDrawerProps {
    onClose: () => void;
    onOpen: () => void;
    isOpen: boolean;
}

export const UsersDrawer = ({onClose, onOpen, isOpen}: UsersDrawerProps) => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadUsers = async () => {
        setIsLoading(true)
        const response = await getUsers()
        console.log(response)
        setUsers(response.data.items)
        setIsLoading(false)
    }

    useEffect(()=>{
        isOpen && loadUsers();
        return ()=>{
            setUsers([])
        }
    }, [isOpen])

    return (
        <SwipeableDrawer onOpen={onOpen} onClose={onClose} open={isOpen} anchor={"left"}>
            <div style={{width: "500px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {
                    isLoading ? (
                        <CircularProgress color="secondary"/>
                    ) : (
                        <div>
                            {
                                users.map((user) => (
                                    <UserCard key={user.id} email={user.email} createdAt={user.createdAt}
                                              login={user.login}/>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </SwipeableDrawer>

    );
};

