window.addEventListener('load', init, false);

function init() {
	createScene();
	createLights();
	createLetters();

	loop();
}

var colors = {
	red: 0xf25346,
	blue: 0x0000ff,
	yellow: 0xe4e0ba,
	white: 0xffffff
}

var scene, camera, near, far, HEIGHT, WIDTH, renderer, container;

function createScene() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;

	scene = new THREE.Scene();
	near = 0.1;
	far = 500;

	camera = new THREE.OrthographicCamera(WIDTH/-2, WIDTH/2, HEIGHT/2, HEIGHT/-2, near, far);
	camera.position.x = 0;
	camera.position.z = 50;
	camera.position.y = 0;

	renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
	renderer.setSize(WIDTH, HEIGHT);
	renderer.shadowMap.enabled = true;
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);
	window.addEventListener('resize', handleWindowResize, false);
}

function handleWindowResize() {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.updateProjectionMatrix();
}

var dLight, aLight;

function createLights() {
	aLight = new THREE.AmbientLight(colors.white, 0.5);
	dLight = new THREE.DirectionalLight(colors.white, 0.9);

	dLight.position.set(4, 2, 20);
	/*dLight.shadow.camera.left = WIDTH/-2;
	dLight.shadow.camera.right = WIDTH/2;
	dLight.shadow.camera.top = HEIGHT/2;
	dLight.shadow.camera.bottom =HEIGHT/-2;*/
	dLight.shadow.camera.left = -200;
	dLight.shadow.camera.right = 200;
	dLight.shadow.camera.top = 200;
	dLight.shadow.camera.bottom = -200;
	dLight.shadow.camera.near = 50;
	dLight.shadow.camera.far = 300;

	dLight.castShadow = true;

	/*dLight.shadow.mapSize.width = 2048;
	dLight.shadow.mapSize.height = 2048;*/
	dLight.shadow.mapSize.width = 512;
	dLight.shadow.mapSize.height = 512;

	scene.add(aLight);
	scene.add(dLight);
	var helper = new THREE.CameraHelper(dLight.shadow.camera);
	scene.add(helper);
}

var matRed = new THREE.MeshLambertMaterial({ color:colors.red/*, side:THREE.DoubleSide*/ });
var matBlue = new THREE.MeshLambertMaterial({ color:colors.blue, side:THREE.DoubleSide });
var matYellow = new THREE.MeshLambertMaterial({ color:colors.yellow, side:THREE.DoubleSide });

LetterA = function() {
	this.mesh = new THREE.Object3D();

	//face
	var faceGeom = new THREE.Geometry();
	faceGeom.vertices.push(new THREE.Vector3(-3.0, 1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, 1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, -1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-3.0, -1.0, 0.0));

	faceGeom.vertices.push(new THREE.Vector3(-3.0, 5.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, 5.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, 3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-3.0, 3.0, 0.0));

	faceGeom.vertices.push(new THREE.Vector3(-3.0, 3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-1.0, 3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-1.0, 1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-3.0, 1.0, 0.0));

	faceGeom.vertices.push(new THREE.Vector3(1.0, 3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, 3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, 1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(1.0, 1.0, 0.0));

	faceGeom.vertices.push(new THREE.Vector3(-3.0, -1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-1.0, -3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(-3.0, -3.0, 0.0));

	faceGeom.vertices.push(new THREE.Vector3(1.0, -1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, -1.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(3.0, -3.0, 0.0));
	faceGeom.vertices.push(new THREE.Vector3(1.0, -3.0, 0.0));			

	//ok so i figured out the face thing. three.js renders faces as triangles,
	//so 2 triangles make a square. And Face3() takes in the index of the vectors
	//that make the the triangles
	faceGeom.faces.push(new THREE.Face3(0, 1, 2));
	faceGeom.faces.push(new THREE.Face3(0, 2, 3));
	faceGeom.faces.push(new THREE.Face3(4, 5, 6));
	faceGeom.faces.push(new THREE.Face3(4, 6, 7));
	faceGeom.faces.push(new THREE.Face3(8, 9, 10));
	faceGeom.faces.push(new THREE.Face3(8, 10, 11));
	faceGeom.faces.push(new THREE.Face3(12, 13, 14));
	faceGeom.faces.push(new THREE.Face3(12, 14, 15));
	faceGeom.faces.push(new THREE.Face3(16, 17, 18));
	faceGeom.faces.push(new THREE.Face3(16, 18, 19));
	faceGeom.faces.push(new THREE.Face3(20, 21, 22));
	faceGeom.faces.push(new THREE.Face3(20, 22, 23));

	faceGeom.computeFaceNormals();

	this.faceMesh = new THREE.Mesh(faceGeom, matRed);
	this.faceMesh.castShadow = true;
	this.faceMesh.receiveShadow = true;

	this.mesh.rotation.y = degToRad(180);

	this.mesh.add(this.faceMesh);
	//left side

	//right side

	//top side

	//bottom 1

	//bottom 2
}

LetterN = function() {
	
}

LetterE = function() {
	
}

LetterT = function() {
	
}

var a1, a2, a3, a4, mesh, size = 20;
function createLetters() {
	mesh = new THREE.Object3D();
	a1 = new LetterA();
	a1.mesh.scale.set(size, size, size);
	//scene.add(a1.mesh);

	a2 = new LetterA();
	a2.mesh.scale.set(size, size, size);
	a2.mesh.position.x -= 60;
	a2.mesh.position.z -= 60;
	a2.mesh.rotation.y = degToRad(90);
	//scene.add(a2.mesh);

	a3 = new LetterA();
	a3.mesh.scale.set(size, size, size);
	a3.mesh.position.x += 60;
	a3.mesh.position.z -= 60;
	a3.mesh.rotation.y = degToRad(-90);

	a4 = new LetterA();
	a4.mesh.scale.set(size, size, size);
	a4.mesh.position.z -= 120;
	a4.mesh.rotation.y = degToRad(0);

	mesh.add(a1.mesh);
	mesh.add(a2.mesh);
	mesh.add(a3.mesh);
	mesh.add(a4.mesh);

	mesh.position.z -= 150;
	mesh.rotation.y = degToRad(45);
	mesh.rotation.x = degToRad(45);

	scene.add(mesh);
}

function loop() {
	mesh.rotation.y += 0.005;
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}