window.addEventListener('load', init, false);

function init() {
	createScene();
	createLights();
	createLetters();

	document.addEventListener('mousemove', handleMouseMove, false);

	loop();
}

var mousePos = {x: 0, y:0};

function handleMouseMove(event) {
	var tx = -1 + (event.clientX/WIDTH)*2;
	var ty = 1 - (event.clientY/HEIGHT)*2;

	mousePos = {x: tx, y: ty};
}

var colors = {
	red: 0xf25346,
	blue: 0x0000ff,
	yellow: 0xffff4c,
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

function handleWindowResize(event) {
	HEIGHT = window.innerHeight;
	WIDTH = window.innerWidth;
	renderer.setSize(WIDTH, HEIGHT);
	camera.updateProjectionMatrix();
}

var dLight, aLight;

function createLights() {
	aLight = new THREE.AmbientLight(colors.white, 0.5);
	dLight = new THREE.DirectionalLight(colors.white, 0.9);

	dLight.position.set(-4, 2, 20);
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

var matRed = new THREE.MeshLambertMaterial({ color:colors.red });
var matBlue = new THREE.MeshLambertMaterial({ color:colors.blue });
var matYellow = new THREE.MeshLambertMaterial({ color:colors.yellow });
var cubeMaterials = [matBlue, matBlue, matYellow, matYellow, matYellow, matYellow];

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

	this.faceMesh.rotation.y = degToRad(180);

	this.mesh.add(this.faceMesh);

	//left side
	var leftGeom = new THREE.BoxGeometry(2, 8, 3);
	var left = new THREE.Mesh(leftGeom, cubeMaterials);

	left.position.z -= 2;
	left.position.y += 1;
	left.position.x -= 2;

	left.castShadow = true;
	left.receiveShadow = true;

	this.mesh.add(left);

	//right side
	var rightGeom = new THREE.BoxGeometry(2, 8, 3);
	var right = new THREE.Mesh(rightGeom, cubeMaterials);

	right.position.z -= 2;
	right.position.y += 1;
	right.position.x += 2;

	right.castShadow = true;
	right.receiveShadow = true;

	this.mesh.add(right);

	//top side
	var topGeom = new THREE.BoxGeometry(2, 2, 3);
	var top = new THREE.Mesh(topGeom, cubeMaterials);

	top.position.z -= 2;
	top.position.y += 4;

	top.castShadow = true;
	top.receiveShadow = true;

	this.mesh.add(top);

	this.mesh.rotation.y = degToRad(-45);
	this.mesh.rotation.x = degToRad(45);
}

LetterN = function() {
	
}

LetterE = function() {
	
}

LetterT = function() {
	
}

var a1, mesh, size = 20;
function createLetters() {
	mesh = new THREE.Object3D();
	a1 = new LetterA();
	a1.mesh.scale.set(size, size, size);
	a1.mesh.position.z -= 150;
	scene.add(a1.mesh);
}

function updateLetters() {
	var rotY = normalize(mousePos.x, -1, 1, -10, 10);

	updateLetter(a1, rotY);
}

function updateLetter(letter, rotY) {
	if(letter.faceMesh.position.x > -0.5 && mousePos.x < 0) {
		letter.faceMesh.position.x += mousePos.x;
	}
	if(letter.faceMesh.position.x < 0.5 && mousePos.x > 0) {
		letter.faceMesh.position.x += mousePos.x;
	}
	if(letter.faceMesh.position.y > -0.5 && mousePos.y < 0) {
		letter.faceMesh.position.y += mousePos.y;
	}
	if(letter.faceMesh.position.y < 0.5 && mousePos.y > 0) {
		letter.faceMesh.position.y += mousePos.y;
	}

	if(letter.mesh.rotation.y > degToRad(-45) && mousePos.x < 0) {
		letter.mesh.rotation.y += degToRad(rotY);
	}

	if(letter.mesh.rotation.y < degToRad(45) && mousePos.x > 0) {
		letter.mesh.rotation.y += degToRad(rotY);
	}
}

function loop() {
	updateLetters();
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function normalize(v, vmin, vmax, tmin, tmax) {
	var nv = Math.max(Math.min(v,vmax), vmin);
	var dv = vmax-vmin;
	var pc = (nv-vmin)/dv;
	var dt = tmax-tmin;
	var tv = tmin + (pc*dt);
	return tv;	
}