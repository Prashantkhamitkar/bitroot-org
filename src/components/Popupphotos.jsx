import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../../src/components/photopopup.css'


let object=null;
function ChildModal() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     <div className='imagescontainers'>
      <img src={object.author.avatar} onClick={handleOpen} className='image-author' alt='UserProfile' />
      <div className='author-info'>
        <span>{object.author.name}: {object.author.role}</span>
      </div>
    </div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className='childmodal-box'>
        <IconButton 
              aria-label="close"
              onClick={handleClose} // Add your close handler function here
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'inherit',
              }}
            >
              <CloseIcon/>
            </IconButton>
          <div className='childcontainer'>
            <div className='childimage'><img src={object.author.avatar} alt='UserPhoto'/></div>
            <div className='childtext'>
              <h3>{object.author.name}</h3>
              <h4>{object.author.role}</h4>
            </div>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({item,handleClosePopup}) {
    //console.log(item)
    object=item;
    console.log(object)
  const [open, setOpen] = React.useState(false);
  const [propdata,setpropdata]=React.useState(true)
   const handleOpen = () => {
     setOpen(true);
     
     
   };
 
  const handleClose = () => {
    setOpen(false);
    handleClosePopup();
  };
  
  return (
    <>
    <div>
     
      <Modal
        open={propdata}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-box">
        <IconButton 
              aria-label="close"
              onClick={handleClose} // Add your close handler function here
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'inherit',
              }}
            >
              <CloseIcon/>
            </IconButton>
            <div className='containers'>
            <div className="image-containers">
          
            <div  className="image-cards" >
              <img src={item.thumbnail.large} id='main' alt="Content"/>
              <div className="card-contents">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                
              </div>
            
            </div>
            </div>
          
        </div>
          <ChildModal  />
        </Box>
      </Modal>
    </div>
    </>
  );
}