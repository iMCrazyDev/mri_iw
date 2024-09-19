import { Box, Divider, MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

export default function Layer(props){
  const propsCopy = props;
  const image = props.image
  const id = props.id
  /*console.log('AI: );*/
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [isVisible, setVisible] = React.useState(props.opacity == 1)
  const [color, setColor] = React.useState(image.colorMap)
  let ArrowIcon = detailsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> 
  let VisibleIcon = isVisible ? <VisibilityIcon /> :  <VisibilityOffIcon /> 
  let allColors = image.colorMaps().map((colorName) => {
    return (<MenuItem value={colorName} key={colorName}>{colorName}</MenuItem>)
  })
  
  function handleDetails(){
    setDetailsOpen(!detailsOpen)
  }

  /*function nvHideLayer(layerToHide){
    nv.setVolume(layerToHide, -1)
    setLayers([...nv.volumes])
  }

  function nvShowLayer(layer, index){
    nv.setVolume(layer, index)
    setLayers([...nv.volumes])
     onHideLayer={nvHideLayer}
        onShowLayer={nvShowLayer}
  }*/
  function handleVisible(){
    if (isVisible) {
      props.onHideLayer();
    } else {
      props.onShowLayer();
    }
    setVisible(!isVisible)
  }

  function handleColorChange(event){
    let clr = event.target.value
    let id = image.id
    console.log(clr)
    props.onColorMapChange(id, clr)
    setColor(clr)
  }

  function handleDelete(){
    props.onRemoveLayer(image)
  }

  function handleMagic(){
    props.onMagic(propsCopy)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Paper 
        elevation={2}
        sx={{
          marginTop: 0.5,
          marginBottom: 0.5
        }}
      >
        <Box 
          sx={{
            margin: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Typography style={{maxWidth: 100, textOverflow: "elipsis"}}>
            {image.name}
          </Typography>
         
          <IconButton 
            onClick={handleMagic}
            style={{marginLeft:'auto'}}
          >
            <AutoAwesomeIcon />
          </IconButton>
          <IconButton 
            onClick={handleVisible}
            style={{marginLeft:'auto'}}
          >
            {VisibleIcon}
          </IconButton>
          <IconButton 
            onClick={handleDetails}
            style={{marginLeft:'auto'}}
          >
            {ArrowIcon}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: detailsOpen ? 'flex' : 'none'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection:'row',
              justifyContent: 'space-between',
              width: '100%'
            }}
            m={1}
          >
            <FormControl>
              <InputLabel>Color</InputLabel>
              <Select
                style={{width: '200px'}}
                value={color}
                label='Color'
                size='small'
                onChange={handleColorChange}
              >
                {allColors}
              </Select>
            </FormControl>
            <IconButton
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
