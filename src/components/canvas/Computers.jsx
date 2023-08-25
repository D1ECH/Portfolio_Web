import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black"/>
      <pointLight intensity={40}/>
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75 }
        position={isMobile ? [0,-3,-2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    /*Añadimos un eventListener para controlar el modelo 3D cuando el 
    tamaño de la pantalla cambia, como por ejemplo para un móvil*/
    const mediaQuery = window.matchMedia('(max-width:500px)');
    
    /*Establecemos el valor inicial de nuestra variable encargada 
    de indicarnos si es o no un móvil*/
    setIsMobile(mediaQuery.matches);
    
    /*Se añade una función Listener que es llamada a actuar cuando 
    hace falta cambiar el tamaño de la imagen 3D*/
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    /*Se elimina la función Listener anterior cuando el componente 
    no está montado*/
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20,3,5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls enableZoom={false} 
          maxPolarAngle = {Math.PI/2}
          minPolarAngle = {Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all/>

    </Canvas>
  )
};

export default ComputersCanvas;