import React, { Component } from "react";

import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BoxGeometry,
  DirectionalLight,
  AmbientLight,
  MeshPhongMaterial,
  Mesh,
} from "three";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const light = new DirectionalLight(0xffffff);
    const ambient = new AmbientLight(0x707070);
    const material = new MeshPhongMaterial({ color: 0x00aaff });

    this.cube = new Mesh(geometry, material);

    this.scene.add(this.cube);
    this.scene.add(light);
    this.scene.add(ambient);

    this.camera.position.z = 3;

    this.animate();
  }

  animate() {
    const game = this;
    requestAnimationFrame(() => {
      game.animate();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return <></>;
  }
}

export default Home;
