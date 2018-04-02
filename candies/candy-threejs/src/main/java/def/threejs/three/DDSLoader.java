package def.threejs.three;
public class DDSLoader extends CompressedTextureLoader {
    public DDSLoader(){}
    native public Dds parse(String buffer, Boolean loadMipmaps);
}

