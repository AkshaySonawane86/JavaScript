

function addNote()
{
    let noteInput=document.getElementById("noteInput");
    let noteText=noteInput.value.trim();

    if(noteText === "")
    {
        alert("Please enter a note!");
        return;
    }

    let noteDiv=document.createElement("div");
    noteDiv.className="note";

    let noteSpan=document.createElement("span");
    noteSpan.textContent=noteText;

    let editbutton=document.createElement("button");
    editbutton.textContent="\ Edit";
    editbutton.onclick=function()
    {
        let newText=prompt("Edit your note:",noteSpan.textContent);
        if(newText !== null)
        {
            noteSpan.textContent=newText;
            saveNotes();
        }
    };

    let deleteButton=document.createElement("button");
    deleteButton.textContent="X Delete";
    deleteButton.onclick=function()
    {
        noteDiv.remove();
        saveNotes();
    };

    noteDiv.appendChild(noteSpan);
    noteDiv.appendChild(editbutton);
    noteDiv.appendChild(deleteButton);

    document.getElementById("notesContainer").appendChild(noteDiv);
    noteInput.value="";
    saveNotes();

}

    function saveNotes()
    {
        let notes=[];

        document.querySelectorAll(".noteSpan").forEach(note=>{
            notes.push(note.textContent);
        });

        localStorage.setItem("notes",JSON.stringify(notes));
    }


    function loadNotes()
    {
        let notes=JSON.parse(localStorage.getItem("notes"))||[];

        notes.forEach(text=>{
            let noteDiv=document.createElement("div");
            noteDiv.className="note";

            let noteSpan=document.createElement("span");
            noteSpan.textContent=text;

            let editbutton=document.createElement("button");
            editbutton.textContent="\ Edit";

            editbutton.onclick=function()
            {
                let newText=prompt("Edit your note:",noteSpan.textContent);
                if(newText !== null)
                {
                    noteSpan.textContent=newText;
                    saveNotes();
                }
            };

            let deleteButton=document.createElement("button");
            deleteButton.textContent="X Delete";
            deleteButton.onclick=function()
            {
                noteDiv.remove();
                saveNotes();
            };

            noteDiv.appendChild(noteSpan);
            noteDiv.appendChild(editbutton);
            noteDiv.appendChild(deleteButton);

            document.getElementById("notesContainer").appendChild(noteDiv);
        });
    }

    document.addEventListener("DOMContentLoaded",loadNotes); 


