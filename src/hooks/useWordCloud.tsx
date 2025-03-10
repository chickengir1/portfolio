import * as THREE from "three";
import { FontLoader, Font } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { useEffect, useRef, useMemo } from "react";

interface WordCloudProps {
  items: { text: string }[];
  fontUrl: string;
}

// 텍스트 메시 생성
function createTextMesh(text: string, font: Font): THREE.Mesh {
  const textConfig = {
    font,
    size: 0.25,
    height: 0.0025,
    curveSegments: 12,
  };
  const textGeometry = new TextGeometry(text, textConfig);
  const textMaterial = new THREE.MeshPhongMaterial({ color: 0x60a5fa });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  textMesh.castShadow = true;
  textMesh.receiveShadow = true;

  return textMesh;
}

// 텍스트 중심 보정
function centerTextGeometry(textGeometry: TextGeometry): void {
  textGeometry.computeBoundingBox();
  const boundingBox = textGeometry.boundingBox!;
  const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
  const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
  textGeometry.translate(-centerX, -centerY, 0);
}

// 구체 형태로 버텍스 변형
function applySphericalTransform(
  textGeometry: TextGeometry,
  sphereRadius: number
): void {
  const vertex = new THREE.Vector3();
  const positionAttribute = textGeometry.attributes.position;

  for (
    let vertexIndex = 0;
    vertexIndex < positionAttribute.count;
    vertexIndex++
  ) {
    vertex.fromBufferAttribute(positionAttribute, vertexIndex);
    const vertexX = vertex.x;
    const vertexY = vertex.y;
    const distSq = vertexX * vertexX + vertexY * vertexY;
    const radiusSq = sphereRadius * sphereRadius;
    const curvature = Math.sqrt(radiusSq - distSq);
    const isInside = distSq <= radiusSq;
    const z = -(sphereRadius - curvature);

    if (isInside) vertex.z = z;
    else vertex.z = 0;

    positionAttribute.setXYZ(vertexIndex, vertex.x, vertex.y, vertex.z);
  }
  positionAttribute.needsUpdate = true;
}

// 텍스트 위치 및 방향 설정
function positionTextMesh(
  textMesh: THREE.Mesh,
  radius: number,
  index: number,
  totalItems: number
): void {
  const phi = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (totalItems - 1)) * 2;
  const radiusAtY = Math.sqrt(1 - y * y);
  const theta = phi * index;

  const textPosition = new THREE.Vector3(
    radius * radiusAtY * Math.cos(theta),
    radius * y,
    radius * radiusAtY * Math.sin(theta)
  );
  textMesh.position.copy(textPosition);

  const lookAtPosition = textMesh.position.clone().multiplyScalar(2);
  textMesh.lookAt(lookAtPosition);
}

// 워드 클라우드 생성
export function generateWordCloud(
  font: Font,
  items: { text: string }[],
  group: THREE.Group,
  radius: number
): void {
  items.forEach((item, index) => {
    const textMesh = createTextMesh(item.text, font);
    centerTextGeometry(textMesh.geometry as TextGeometry);
    applySphericalTransform(textMesh.geometry as TextGeometry, radius);
    positionTextMesh(textMesh, radius, index, items.length);
    group.add(textMesh);
  });
}

export const useWordCloud = ({ items, fontUrl }: WordCloudProps) => {
  const sceneRef = useRef(new THREE.Scene());
  const groupRef = useRef(new THREE.Group());
  const fontLoader = useMemo(() => new FontLoader(), []);

  const radius = 2.5;

  useEffect(() => {
    const currentGroup = groupRef.current;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true;
    sceneRef.current.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    sceneRef.current.add(ambientLight);

    fontLoader.load(fontUrl, (font) => {
      generateWordCloud(font, items, currentGroup, radius);
    });

    sceneRef.current.add(currentGroup);

    return () => {
      currentGroup.clear();
    };
  }, [items, fontUrl, fontLoader, radius]);

  return { scene: sceneRef.current, group: groupRef.current, radius };
};
