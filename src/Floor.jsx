import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
export default function Floor() {
    const PATH = "/static/ptextures/"

    const props = useTexture({
        map: PATH + "color.jpg",
        // displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })
    return (
        <mesh receiveShadow={true} castShadow = {true}  position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial color="gray" />
            <meshStandardMaterial {...props} side={DoubleSide}
           
             />
        </mesh>
    )
}
