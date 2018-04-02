package def.threejs.three;
public class MeshDepthMaterial extends Material {
    public MeshDepthMaterial(MeshDepthMaterialParameters parameters){}
    public Boolean wireframe;
    public double wireframeLinewidth;
    native public void setValues(MeshDepthMaterialParameters parameters);
    public MeshDepthMaterial(){}
}

