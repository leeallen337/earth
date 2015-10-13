let width = window.innerWidth;
let height = window.innerHeight;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let ambientLight = new THREE.AmbientLight(0x333333);
let directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.75);

renderer.setSize(width, height);
directionalLight.position.set(8, 5, 5);

document.body.appendChild(renderer.domElement);

scene.add(ambientLight);
scene.add(directionalLight);

camera.position.z = 10;

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();
