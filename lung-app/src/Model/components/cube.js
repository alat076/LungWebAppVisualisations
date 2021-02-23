import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // rotate cube so it is no longer displayed as a square
  cube.rotation.set(-0.5, -0.1, 0.8);

  // this .tick method will be called once per frame
  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };

  return cube;
}

export { createCube };