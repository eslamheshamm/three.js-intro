let renderer,
	camera,
	scene,
	controls,
	width = window.innerWidth,
	height = window.innerHeight;

//RENDERER
renderer = new THREE.WebGLRenderer({
	canvas: document.getElementById("canvas"),
});
