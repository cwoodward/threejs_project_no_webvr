package def.threejs.three;
@jsweet.lang.Interface
public abstract class RenderItem extends def.js.Object {
    public double id;
    public Object3D object;
    public jsweet.util.union.Union<Geometry,BufferGeometry> geometry;
    public Material material;
    public WebGLProgram program;
    public double renderOrder;
    public double z;
    public Group group;
}

