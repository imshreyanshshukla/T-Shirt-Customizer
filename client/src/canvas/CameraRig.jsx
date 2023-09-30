import { useFrame } from '@react-three/fiber';
import React, {useRef} from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';

const CameraRig = ({children}) => {
  return <group ref = {group}>{children}</group>
    

}

export default CameraRig