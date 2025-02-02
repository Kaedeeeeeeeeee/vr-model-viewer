import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/GLTFLoader.js';

// 创建场景、相机和渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加光源
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// 加载GLB模型
const loader = new GLTFLoader();
loader.load('model.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// 设置相机位置
camera.position.z = 5;

// 动画循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// 处理窗口大小变化
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
