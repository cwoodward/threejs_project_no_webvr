package def.threejs.three;
public class MeshNormalMaterial extends Material {
    public MeshNormalMaterial(MeshNormalMaterialParameters parameters){}
    public Boolean wireframe;
    public double wireframeLinewidth;
    public Boolean morphTargets;
    native public void setValues(MeshNormalMaterialParameters parameters);
    public MeshNormalMaterial(){}
}

