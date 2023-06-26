import { useState } from "react";
import NoteContext from "./NoteContext"
const NoteState=(props)=>{

    const notesIntial=[
        {
          "_id": "6495663aec7d48ce684533f2",
          "userId": "64953ca06e01e5f3018122be",
          "title": "Complete Project",
          "desc": "I have to complete this project by today's night",
          "tag": "General",
          "date": "2023-06-23T09:30:34.058Z",
          "__v": 0
        },
       
        {
            "_id": "6498786deb5ad629d52158a4",
            "userId": "64953ca06e01e5f3018122be",
            "title": "Mommy",
            "desc": "IF u care about someone , don't  give in ,open your arms to save that precious person ",
            "tag": "emotions",
            "date": "2023-06-25T17:25:01.183Z",
            "__v": 0
          },
          {
            "_id": "6495663aec7d48ce684533f2",
            "userId": "64953ca06e01e5f3018122be",
            "title": "Complete Project",
            "desc": "I have to complete this project by today's night",
            "tag": "General",
            "date": "2023-06-23T09:30:34.058Z",
            "__v": 0
          },
         
          {
              "_id": "6498786deb5ad629d52158a4",
              "userId": "64953ca06e01e5f3018122be",
              "title": "Mommy",
              "desc": "IF u care about someone , don't  give in ,open your arms to save that precious person ",
              "tag": "emotions",
              "date": "2023-06-25T17:25:01.183Z",
              "__v": 0
            },
            {
                "_id": "6495663aec7d48ce684533f2",
                "userId": "64953ca06e01e5f3018122be",
                "title": "Complete Project",
                "desc": "I have to complete this project by today's night",
                "tag": "General",
                "date": "2023-06-23T09:30:34.058Z",
                "__v": 0
              },
             
              {
                  "_id": "6498786deb5ad629d52158a4",
                  "userId": "64953ca06e01e5f3018122be",
                  "title": "Mommy",
                  "desc": "IF u care about someone , don't  give in ,open your arms to save that precious person ",
                  "tag": "emotions",
                  "date": "2023-06-25T17:25:01.183Z",
                  "__v": 0
                },
                {
                  "_id": "6495663aec7d48ce684533f2",
                  "userId": "64953ca06e01e5f3018122be",
                  "title": "Complete Project",
                  "desc": "I have to complete this project by today's night",
                  "tag": "General",
                  "date": "2023-06-23T09:30:34.058Z",
                  "__v": 0
                },
               
                {
                    "_id": "6498786deb5ad629d52158a4",
                    "userId": "64953ca06e01e5f3018122be",
                    "title": "Mommy",
                    "desc": "IF u care about someone , don't  give in ,open your arms to save that precious person ",
                    "tag": "emotions",
                    "date": "2023-06-25T17:25:01.183Z",
                    "__v": 0
                  }
      

      ];

      const [notes, setNotes]= useState(notesIntial);

    return (
     <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
     </NoteContext.Provider>
    )

}
export default NoteState;