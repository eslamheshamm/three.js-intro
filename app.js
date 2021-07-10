let renderer,
	camera,
	scene,
	controls,
	width = window.innerWidth,
	height = window.innerHeight;

init();
animate();
render();

function init() {
	//RENDERER
	renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById("canvas"),
		antialias: true,
	});
	renderer.setClearColor(0x111111);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	// CAMERA
	camera = new THREE.PerspeciveCamera(70, width / height, 1, 1000);
	camera.position.z = 199;
	// camera.position.x = 100;
	// CONTROLS
	controls = new THREE.TrackBallControls(camera);
	controls.addEventListener("change", render);
	// SCENE
	scene = new THREE.Scene();
	// LIGHTS
	const light1 = new THREE.AmbientLight(0xffffff, 0.5),
		light2 = new THREE.DirectionalLight(0xffffff);
	light2.position.set(1, 1, 1);
	scene.add(light1);
	scene.add(light2);

	// window resize
	window.addEventListener("resize", onWindowResize, false);
}
function animate() {
	requestAnimationFrame(animate);
	controls.update();
}
function render() {
	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);
	controls.handleResize();
}
