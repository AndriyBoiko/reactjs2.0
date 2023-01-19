import React from 'react';
import {Char} from "./Char";

const Charakter = () => {
    let users = [
        {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Nathan@yesenia.net"
        },
        {
            id: 3,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",}
    ]


    return (
        <div>
            {users.map((user ) => <Char key={user.id} users={user}/>)}
        </div>
    );
};

export default Charakter;