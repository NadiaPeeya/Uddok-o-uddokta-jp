// import { Alert, Button, Container, TextField, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { NavLink } from 'react-bootstrap';
// import { Add } from '@mui/icons-material';

// const UpdateBlog = () => {
//     const [updateBlogInfo, setUpdatedBlogInfo] = useState({})
//     const [blogEdited, setBlogEdited] = useState(false);

//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newInfo = { ...updateBlogInfo };
//         newInfo[field] = value;
//         setUpdatedBlogInfo(newInfo);
//     }

//     const handleConfirmation = e => {
//         setBlogEdited(false);
//         e.preventDefault();
//         const url = `http://localhost:5000/blogs${_id}`
//         fetch('http://localhost:5000/blogs', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updateBlogInfo)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     setBlogEdited(true);
                    

//                 }
//             })

//         e.preventDefault();
//     }
//     return (
//         <Container>
            
            
//         <Typography variant="h1" sx={{fontWeight:500, padding: '30px', color: 'white', marginTop: 3, backgroundColor:'rgb(35, 34, 34)'}}>ADD NEW BlOGS</Typography>
        
//         {blogEdited && <Alert severity="success">Added Successfully</Alert>}

//         <form style={{backgroundColor: 'white', paddingTop: '20px', height: '500px'}} onSubmit={handleConfirmation}>

//             <TextField
//                 sx={{ width: '70%', m: 1 }}
//                 name="name"
//                 onBlur={handleOnBlur}
//                 label="Blog Name"
//                 id="outlined-size-small"
//                 size="small"
//             />
            

//             <TextField
//                 sx={{ width: '70%', m: 1 }}
//                 name="description"
//                 onBlur={handleOnBlur}
//                 label="Description"
//                 id="outlined-size-small"
//                 size="small"
//             />
//              {/* <TextField
//                     required
//                     sx={{ width: '70%', m: 1 }}
//                     name="key"
//                     onBlur={handleOnBlur}
//                     label="Set Key < 7 to appear on home"
//                     id="outlined-size-small"
//                     size="small"
//                 /> */}
//             <TextField
//                 sx={{ width: '70%', m: 1 }}
//                 name="date"
//                 onBlur={handleOnBlur}
//                 label="Date"
//                 id="outlined-size-small"
//                 size="small"
//             />
//             <TextField
//                 sx={{ width: '70%', m: 1 }}
//                 name="img"
//                 onBlur={handleOnBlur}
//                 label="Image"
//                 id="outlined-size-small"
//                 size="small"
//             />
       
//             <br />
//             <Button sx={{ backgroundColor: '#C54B47', m: 1 }} type="submit" variant="contained"> <Add sx={{marginX:1}}/> Add To Database</Button>
//         </form>
//         {/* <NavLink style={{textDecoration:'none'}} to='/'>
//         <Button sx={{margin: '20px'}} variant="outlined">Home</Button>
//         </NavLink> */}
//     </Container>
//     );
// };

// export default UpdateBlog;