const scene = new THREE.Scene({color: 0xfefefe});
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement )

const geometry = new THREE.TorusGeometry( 15, 1, 15, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0xfe1231 } );
const torus = new THREE.Mesh( geometry, material );
const geometry2 = new THREE.TorusGeometry( 12, 1, 10, 100 );
const torus2 = new THREE.Mesh( geometry2, material );
const geometry3 = new THREE.BoxGeometry( 10, 10, 10 );

const material3 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry3, material3 );
scene.add( cube );
scene.add(torus, torus2,cube);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
const ambientLight = new THREE.AmbientLight(0xffffff);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(ambientLight, pointLight, gridHelper);
const loader =  new THREE.TextureLoader();
loader.load('js/texture/space.jpg',
    function ( texture ) {
        // in this example we create the material when the texture is loaded
        scene.background = texture;
       
    },
    undefined
); 

camera.position.z = 35;
camera.position.y = 15;

torus.position.y = 15;
torus2.position.y = 15;
cube.position.y = 15;



function addStar() {
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff})
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) )
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);



function animate() {
	requestAnimationFrame( animate );
    scene.rotation.y += 0.001;
	renderer.render( scene, camera );
}
animate();