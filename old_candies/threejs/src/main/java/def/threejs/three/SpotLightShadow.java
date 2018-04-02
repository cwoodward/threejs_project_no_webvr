package def.threejs.three;
public class SpotLightShadow extends LightShadow {
    public PerspectiveCamera camera;
    native public void update(Light light);
}

