import React from "react"
import { Box } from "@mui/material"

export function NiivuePanel (props) {
	const canvas = React.useRef(null)
	React.useEffect(async () => {
    const nv = props.nv
    nv.attachToCanvas(canvas.current)
    await nv.loadVolumes(props.volumes)
		//await nv.loadMeshes(meshList)
	}, [])

	return (
		<Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '90',
        margin: 'auto'
      }}  
    >
      <canvas ref={canvas} style={{paddingRight: 200}} height={500} width={500} />
		</Box>
	)
}
