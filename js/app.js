'use strict';

var width = window.innerWidth;
var height = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var ambientLight = new THREE.AmbientLight(0x333333);
var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.75);

var earth = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('./images/2_no_clouds_4k.jpg'),
  bumpMap: THREE.ImageUtils.loadTexture('./images/elev_bump_4k.jpg'),
  bumpScale: 0.1,
  specularMap: THREE.ImageUtils.loadTexture('./images/water_4k.png'),
  specular: new THREE.Color('grey')
}));

var clouds = new THREE.Mesh(new THREE.SphereGeometry(5.2, 32, 32), new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('./images/fair_clouds_4k.png'),
  transparent: true
}));

var stars = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 32), new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('./images/galaxy_starfield.png'),
  side: THREE.BackSide
}));

renderer.setSize(width, height);
directionalLight.position.set(8, 5, 5);

scene.add(ambientLight);
scene.add(directionalLight);
scene.add(earth);
scene.add(clouds);
scene.add(stars);

camera.position.z = 10;

document.body.appendChild(renderer.domElement);

function render() {
  requestAnimationFrame(render);

  earth.rotation.y += 0.0010;
  clouds.rotation.y += 0.0015;

  renderer.render(scene, camera);
}

render();