import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import Circulo from './Circulo'
import { useRef } from 'react'
import { DirectionalLightHelper } from 'three'
import { HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';






export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef();
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 1);
    

  const spotLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper, 1);

    const rectAreaLightRef = useRef();

    // Agregar un helper a la luz de área rectangular
    useHelper(rectAreaLightRef, RectAreaLightHelper, 1);
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
   {/*     HemisphereLight y su helper HemisphereLight no genera sombras es porque está diseñado para iluminar una escena con una luz suave y difusa desde todas las direcciones
      <hemisphereLight
        ref={hemisphereLightRef}
        args={[0xffffff, 0x0000ff, 1]}
        position={[0, 50, -6]}
        castShadow
        shadowMapWidth={1024}
        shadowMapHeight={1024}
        shadowMapResolution={1024}
        shadowCameraFov={45}
        shadowCameraNear={1}
        shadowCameraFar={2000}
        
        
      />  */}
      

        {/* pointLight y su helper*/}
        <pointLight
        ref={pointLightRef}
        castShadow={true}
        position={[0, 10, -6]}
        intensity={1.5}
        shadow-mapSize={[1050, 1050]}
        />
        
        
        {/* rectAreaLight y su helper 
        <rectAreaLight
        ref={rectAreaLightRef} castShadow = {true}
        position={[0, 
            2, 4]}
        width={1}
        height={1}
        color={[255, 202, 50]}
        intensity={0.9}
       
        mapSize = { [ 1024, 1024 ] }
       
      

        
      />*/}


      {/* SpotLight y su helper
      <spotLight
        ref={spotLightRef}
        color={0x00ff00}
        intensity={1}
        position={[10, 10, 0]}
        angle={Math.PI / 3}
        penumbra={0.05}
        decay={2}
        distance={400}
      /> */}
      
        
        

        <ambientLight intensity={0.5} />
        <Circulo/>
       
        <Floor />

     
    </>
}