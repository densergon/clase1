import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.5, 500 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: '#00ff00'} );
const cube = new THREE.Mesh( geometry, material );

const materialLine=new THREE.LineBasicMaterial({ color: '#fff' });
const points=[];
points.push( new THREE.Vector3(-10,3,0));
points.push( new THREE.Vector3(10,3,0));

const geometryLine=new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line( geometryLine,materialLine);


scene.add( cube );
scene.add( line );

camera.position.z = 5;



function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.15;
	cube.rotation.y += 0.15;

	renderer.render( scene, camera );
}

animate();


