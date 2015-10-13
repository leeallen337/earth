let width = window.innerWidth;
let height = window.innerHeight;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
let ambientLight = new THREE.AmbientLight(0x333333);
let directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.75);

let earth = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./images/2_no_clouds_4k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('./images/elev_bump_4k.jpg'),
    bumpScale: 0.1,
    specularMap:THREE.ImageUtils.loadTexture('./images/water_4k.png'),
    specular: new THREE.Color('grey')
  })
);

renderer.setSize(width, height);
directionalLight.position.set(8, 5, 5);

scene.add(ambientLight);
scene.add(directionalLight);
scene.add(earth);

camera.position.z = 10;

document.body.appendChild(renderer.domElement);

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();
