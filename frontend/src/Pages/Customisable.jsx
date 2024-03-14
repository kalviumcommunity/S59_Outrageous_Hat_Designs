import React, { useState ,useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../PagesStyles/customForm.css";
import Plus from "../assets/plus.png"

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import FilteredData from "../components/FilteredData";

function AddCustomisable() {
  const [designName, setDesignName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [currentUser,setCurrentUser]=useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const [entities, setEntities] = useState([]);
  const [isUpdate,setIsUpdate] =useState(false)
  const [open, setOpen] = useState(false);
  const [currentId,setCurrentId]=useState('')
  //for filtering
  const [filtered, setFiltered] = useState([]);
  const [selectedUser, setSelectedUser] = useState("All");
  const [user,setUser]=useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://hat-bxol.onrender.com/crude-api/customizable");
            if(response.ok){
              const json = await response.json();
              console.log(json)
              setEntities(json);
              setFiltered(json)
              const uniqueCreators = [...new Set(json.map(entity => entity.creator))];
              setUser(uniqueCreators);
            }
            else{
              toast.error("Failed to Fetch and get the users");
            }
            
        } catch (err) {
            console.log(err);
        }
    };

    fetchData(); 
}, []); 

  const handleUserFilter = (e) => {
    const user = e.target.value;
    setSelectedUser(user);
    if (user == "All") {
      setFiltered(entities);
    } else {
      const filteredUser = entities.filter(
        (entity) => entity.creator === user
      );
      setFiltered(filteredUser);
    }
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsUpdate(false); 
    setCurrentId(null); 
    setDesignName(null);
    setDescription(null);
    setImageUrl(null);
  }

  const handleFields=(each)=>{
    setCurrentUser(each.creator);
    setDesignName(each.design_name)
    setDescription(each.description)
    setImageUrl(each.imageUrl)
  }



  const handleUpdate = async (id) => {
    try {
      const updatedObj = {
        creator:currentUser||"",
        design_name: designName || "",
        description: description || "",
        imageUrl: imageUrl || "",
      };
  
      const response = await fetch(`https://hat-bxol.onrender.com/crude-api/customUpdate/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObj),
      });
  
      if (response.ok) {
        const updatedHat = await response.json();
        toast.success("Custom hat updated successfully");
        setEntities(entities.map(entity => entity._id === id ? updatedHat : entity));
        setIsUpdate(false)
        setOpen(false);
      } else {
        const errorMessage = await response.text();
        toast.error("Failed to update custom hat: " + errorMessage);
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      toast.error("An error occurred while updating custom hat: " + error.message);
      console.error("Error:", error);
    }
  };
  


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://hat-bxol.onrender.com/crude-api/customDelete/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        toast.success("Custom hat deleted successfully");
        setEntities(entities.filter(entity => entity._id !== id));
      } else {
        const errorMessage = await response.text();
        toast.error("Failed to delete custom hat: " + errorMessage);
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      toast.error("An error occurred while deleting custom hat: " + error.message);
      console.error("Error:", error);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    let obj = {
      creator:currentUser ||"",
      design_name: designName || "",
      description: description || "",
      imageUrl: imageUrl || "",
    };

    try {
      const response = await fetch(
        "hhttps://hat-bxol.onrender.com/crude-api/add_customizable_hat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Response Submitted Successfully");
        console.log("Response:", data);
        setEntities([...entities, data]);
        handleClose()
      } else {
        const errorMessage = await response.text();
        setErrorMessage("Failed to add customisable hat: " + errorMessage);
        toast.error("Error occured. Try again after Sometime.");
        console.error("Error:", errorMessage);
      }
    } catch (error) {
      setErrorMessage("An error occurred: " + error.message);
      toast.error("Error occured. Api not working.");
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="flex-container">
    <Button onClick={handleClickOpen} sx={{backgroundColor:"white", height:"50px"}}><p>Create</p><img src={Plus} alt="plus" style={{ height:"50px"}}/></Button></div>
    
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>{isUpdate ? <h1>Update Your Hat Designs</h1> : <h1>Add Your Hat Designs</h1>}</DialogTitle>
          <DialogContent sx={{height:"500px",width:"500px"}}>
            <form onSubmit={handleSubmit} className="form-custom">
            <div>
                <TextField sx={{marginTop:"20px"}}
                  label="Creator Name"
                  type="text"
                  value={currentUser}
                  onChange={(e) => setCurrentUser(e.target.value)}
                  required
                />
              </div>
              <div>
                <TextField sx={{marginTop:"20px"}}
                  label="Design Name"
                  type="text"
                  value={designName}
                  onChange={(e) => setDesignName(e.target.value)}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Description"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Image URL"
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {isUpdate?<Button onClick={() => handleUpdate(currentId)}>Update</Button>:<Button type="submit" onClick={handleSubmit}>Add Customisable Hat</Button>}
          </DialogActions> 
        </Dialog>

        <div className="Formcontainer">
        <FilteredData handleUserFilter={handleUserFilter} selectedUser={selectedUser} user={user} filtered={filtered} handleDelete={handleDelete} setIsUpdate={setIsUpdate} handleClickOpen={handleClickOpen} setCurrentId={setCurrentId} handleFields={handleFields}/>
      </div>
      <ToastContainer />
    </>
  );
}

export default AddCustomisable;


