import { useEffect, useState, useTransition } from 'react'
// import { useControls } from 'leva'
import { Canvas } from '@react-three/fiber'
import { Center, Environment, OrbitControls, useCursor } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'



export default function App() {


  const [audioStatus, changeAudioStatus] = useState(false);
  let audioPlayer

  useEffect(() => {
    audioPlayer = new Audio('./I Could (Look Inside Mix).m4a')
  })

  const startAudio = () => {
    audioPlayer.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    audioPlayer.pause();
    changeAudioStatus(false);
  };


  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <group position={[0, -0.65, 0]}>
        <Sphere startAudio={startAudio} pauseAudio={pauseAudio} audioStatus={audioStatus}/>
        
      </group>
      <Env />
      <OrbitControls autoRotate autoRotateSpeed={1.5} enablePan={false} enableRotate={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
      
      
      
    </Canvas>
  )
}

function Sphere({startAudio, pauseAudio, audioStatus}) {
  
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState()
  useCursor(hovered)
  const { roughness } = useSpring({ 
    roughness: active ? 0 : .5,
    config: config.slow,
  })

  // const handleClick = () => {
  //   if(audioStatus || roughness === .1) {
  //     // pauseAudio()
  //     setRoughness(.5)
  //   }else {
  //     // startAudio()
      
  //     setRoughness(.1)
  //   }
  // }
  
  return (
    <Center top>
      <mesh castShadow onClick={() => setActive(!active)} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <animated.meshStandardMaterial metalness={1} roughness={roughness} />
      </mesh>
    </Center>
  )
}

function Env() {
  const [preset, setPreset] = useState('warehouse')
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition()
  return <Environment files={'satara_night_no_lamps_1k.hdr'} background blur={0.6} />
}
