import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
// let camera,
// 	scene,
// 	controls,
// 	width = window.innerWidth,
// 	height = window.innerHeight;
// // controls
// // controls = new OrbitControls();

// // shapes
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// //RENDERER
// const renderer = new THREE.WebGLRenderer({
// 	canvas: document.getElementById("canvas"),
// 	antialias: true,
// });
// renderer.setClearColor(0x111111);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(width, height);
// // CAMERA
// camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
// camera.position.z = 100;

// scene = new THREE.Scene();
// // LIGHTS
// const light1 = new THREE.AmbientLight(0xffffff, 0.5),
// 	light2 = new THREE.DirectionalLight(0xffffff);
// light2.position.set(1, 1, 1);
// scene.add(light1);
// scene.add(light2);

// // window resize
// window.addEventListener("resize", onWindowResize, false);
// function animate() {
// 	requestAnimationFrame(animate);

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render(scene, camera);
// }
// animate();

// function onWindowResize() {
// 	camera.aspect = width / height;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(width, height);
// }
