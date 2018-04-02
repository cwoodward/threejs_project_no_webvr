/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
declare var Detector : DetectorStatic;


interface DetectorStatic {
    canvas : boolean;

    webgl : boolean;

    workers : boolean;

    fileapi : boolean;

    getWebGLErrorMessage() : HTMLElement;

    addGetWebGLMessage(parameters : any);

    addGetWebGLMessage();
}

/**
 * An extensible curve object which contains methods for interpolation
 * class Curve&lt;T extends Vector&gt;
 * @class
 * @extends Object
 */
declare class Curve<T extends Vector> {
    /**
     * Returns a vector for point t of the curve where t is between 0 and 1
     * getPoint(t: number): T;
     * @param {number} t
     * @return {*}
     */
    public getPoint(t : number) : T;

    /**
     * Returns a vector for point at relative position in curve according to arc length
     * getPointAt(u: number): T;
     * @param {number} u
     * @return {*}
     */
    public getPointAt(u : number) : T;

    /**
     * Get sequence of points using getPoint( t )
     * getPoints(divisions?: number): T[];
     * @param {number} divisions
     * @return {Array}
     */
    public getPoints(divisions : number) : T[];

    /**
     * Get sequence of equi-spaced points using getPointAt( u )
     * getSpacedPoints(divisions?: number): T[];
     * @param {number} divisions
     * @return {Array}
     */
    public getSpacedPoints(divisions : number) : T[];

    /**
     * Get total curve arc length
     * @return {number}
     */
    public getLength() : number;

    /**
     * Get list of cumulative segment lengths
     * @param {number} divisions
     * @return {Array}
     */
    public getLengths(divisions : number) : number[];

    /**
     * Update the cumlative segment distance cache
     */
    public updateArcLengths();

    /**
     * Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equi distance
     * @param {number} u
     * @param {number} distance
     * @return {number}
     */
    public getUtoTmapping(u : number, distance : number) : number;

    /**
     * Returns a unit vector tangent at t. If the subclassed curve do not implement its tangent derivation, 2 points a small delta apart will be used to find its gradient which seems to give a reasonable approximation
     * getTangent(t: number): T;
     * @param {number} t
     * @return {*}
     */
    public getTangent(t : number) : T;

    /**
     * Returns tangent at equidistance point u on the curve
     * getTangentAt(u: number): T;
     * @param {number} u
     * @return {*}
     */
    public getTangentAt(u : number) : T;

    /**
     * @deprecated since r84.
     * @param {Function} constructorFunc
     * @param {Function} getPointFunc
     * @return {Function}
     */
    public static create(constructorFunc : Function, getPointFunc : Function) : Function;

    /**
     * Get sequence of points using getPoint( t )
     * getPoints(divisions?: number): T[];
     * @return {Array}
     */
    public getPoints() : T[];

    /**
     * Get sequence of equi-spaced points using getPointAt( u )
     * getSpacedPoints(divisions?: number): T[];
     * @return {Array}
     */
    public getSpacedPoints() : T[];

    /**
     * Get list of cumulative segment lengths
     * @return {Array}
     */
    public getLengths() : number[];
}

declare class WebGLColorBuffer {
    public constructor(gl : any, state : any);

    public setMask(colorMask : number);

    public setLocked(lock : boolean);

    public setClear(r : number, g : number, b : number, a : number);

    public reset();

    constructor();
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js">src/core/DirectGeometry.js</a>
 * @class
 * @extends EventDispatcher
 */
declare class DirectGeometry extends EventDispatcher {
    public constructor();

    public id : number;

    public uuid : string;

    public name : string;

    public type : string;

    public indices : number[];

    public vertices : Vector3[];

    public normals : Vector3[];

    public colors : Color[];

    public uvs : Vector2[];

    public uvs2 : Vector2[];

    public groups : any[];

    public morphTargets : MorphTarget[];

    public skinWeights : number[];

    public skinIndices : number[];

    public boundingBox : Box3;

    public boundingSphere : Sphere;

    public verticesNeedUpdate : boolean;

    public normalsNeedUpdate : boolean;

    public colorsNeedUpdate : boolean;

    public uvsNeedUpdate : boolean;

    public groupsNeedUpdate : boolean;

    public computeBoundingBox();

    public computeBoundingSphere();

    public computeGroups(geometry : Geometry);

    public fromGeometry(geometry : Geometry) : DirectGeometry;

    public dispose();

    public addEventListener(type : string, listener : (p1: Event) => void);

    public hasEventListener(type : string, listener : (p1: Event) => void);

    public removeEventListener(type : string, listener : (p1: Event) => void);

    public dispatchEvent(event : any);
}

declare class WebGLCapabilities {
    public constructor(gl : WebGLRenderingContext, extensions : any, parameters : WebGLCapabilitiesParameters);

    public precision : any;

    public logarithmicDepthBuffer : any;

    public maxTextures : any;

    public maxVertexTextures : any;

    public maxTextureSize : any;

    public maxCubemapSize : any;

    public maxAttributes : any;

    public maxVertexUniforms : any;

    public maxVaryings : any;

    public maxFragmentUniforms : any;

    public vertexTextures : any;

    public floatFragmentTextures : any;

    public floatVertexTextures : any;

    public getMaxAnisotropy() : number;

    public getMaxPrecision(precision : string) : string;

    constructor();
}

declare var REVISION : string;

declare var CullFaceNone : CullFace;

declare var CullFaceBack : CullFace;

declare var CullFaceFront : CullFace;

declare var CullFaceFrontBack : CullFace;

declare var FrontFaceDirectionCW : FrontFaceDirection;

declare var FrontFaceDirectionCCW : FrontFaceDirection;

declare var BasicShadowMap : ShadowMapType;

declare var PCFShadowMap : ShadowMapType;

declare var PCFSoftShadowMap : ShadowMapType;

declare var FrontSide : Side;

declare var BackSide : Side;

declare var DoubleSide : Side;

declare var FlatShading : Shading;

declare var SmoothShading : Shading;

declare var NoColors : Colors;

declare var FaceColors : Colors;

declare var VertexColors : Colors;

declare var NoBlending : Blending;

declare var NormalBlending : Blending;

declare var AdditiveBlending : Blending;

declare var SubtractiveBlending : Blending;

declare var MultiplyBlending : Blending;

declare var CustomBlending : Blending;

declare var AddEquation : BlendingEquation;

declare var SubtractEquation : BlendingEquation;

declare var ReverseSubtractEquation : BlendingEquation;

declare var MinEquation : BlendingEquation;

declare var MaxEquation : BlendingEquation;

declare var ZeroFactor : BlendingDstFactor;

declare var OneFactor : BlendingDstFactor;

declare var SrcColorFactor : BlendingDstFactor;

declare var OneMinusSrcColorFactor : BlendingDstFactor;

declare var SrcAlphaFactor : BlendingDstFactor;

declare var OneMinusSrcAlphaFactor : BlendingDstFactor;

declare var DstAlphaFactor : BlendingDstFactor;

declare var OneMinusDstAlphaFactor : BlendingDstFactor;

declare var DstColorFactor : BlendingDstFactor;

declare var OneMinusDstColorFactor : BlendingDstFactor;

declare var SrcAlphaSaturateFactor : BlendingSrcFactor;

declare var NeverDepth : DepthModes;

declare var AlwaysDepth : DepthModes;

declare var LessDepth : DepthModes;

declare var LessEqualDepth : DepthModes;

declare var EqualDepth : DepthModes;

declare var GreaterEqualDepth : DepthModes;

declare var GreaterDepth : DepthModes;

declare var NotEqualDepth : DepthModes;

declare var MultiplyOperation : Combine;

declare var MixOperation : Combine;

declare var AddOperation : Combine;

declare var NoToneMapping : ToneMapping;

declare var LinearToneMapping : ToneMapping;

declare var ReinhardToneMapping : ToneMapping;

declare var Uncharted2ToneMapping : ToneMapping;

declare var CineonToneMapping : ToneMapping;

declare var UVMapping : Mapping;

declare var CubeReflectionMapping : Mapping;

declare var CubeRefractionMapping : Mapping;

declare var EquirectangularReflectionMapping : Mapping;

declare var EquirectangularRefractionMapping : Mapping;

declare var SphericalReflectionMapping : Mapping;

declare var CubeUVReflectionMapping : Mapping;

declare var CubeUVRefractionMapping : Mapping;

declare var RepeatWrapping : Wrapping;

declare var ClampToEdgeWrapping : Wrapping;

declare var MirroredRepeatWrapping : Wrapping;

declare var NearestFilter : TextureFilter;

declare var NearestMipMapNearestFilter : TextureFilter;

declare var NearestMipMapLinearFilter : TextureFilter;

declare var LinearFilter : TextureFilter;

declare var LinearMipMapNearestFilter : TextureFilter;

declare var LinearMipMapLinearFilter : TextureFilter;

declare var UnsignedByteType : TextureDataType;

declare var ByteType : TextureDataType;

declare var ShortType : TextureDataType;

declare var UnsignedShortType : TextureDataType;

declare var IntType : TextureDataType;

declare var UnsignedIntType : TextureDataType;

declare var FloatType : TextureDataType;

declare var HalfFloatType : TextureDataType;

declare var UnsignedShort4444Type : PixelType;

declare var UnsignedShort5551Type : PixelType;

declare var UnsignedShort565Type : PixelType;

declare var UnsignedInt248Type : PixelType;

declare var AlphaFormat : PixelFormat;

declare var RGBFormat : PixelFormat;

declare var RGBAFormat : PixelFormat;

declare var LuminanceFormat : PixelFormat;

declare var LuminanceAlphaFormat : PixelFormat;

declare var RGBEFormat : PixelFormat;

declare var DepthFormat : PixelFormat;

declare var DepthStencilFormat : PixelFormat;

declare var RGB_S3TC_DXT1_Format : CompressedPixelFormat;

declare var RGBA_S3TC_DXT1_Format : CompressedPixelFormat;

declare var RGBA_S3TC_DXT3_Format : CompressedPixelFormat;

declare var RGBA_S3TC_DXT5_Format : CompressedPixelFormat;

declare var RGB_PVRTC_4BPPV1_Format : CompressedPixelFormat;

declare var RGB_PVRTC_2BPPV1_Format : CompressedPixelFormat;

declare var RGBA_PVRTC_4BPPV1_Format : CompressedPixelFormat;

declare var RGBA_PVRTC_2BPPV1_Format : CompressedPixelFormat;

declare var RGB_ETC1_Format : CompressedPixelFormat;

declare var LoopOnce : AnimationActionLoopStyles;

declare var LoopRepeat : AnimationActionLoopStyles;

declare var LoopPingPong : AnimationActionLoopStyles;

declare var InterpolateDiscrete : InterpolationModes;

declare var InterpolateLinear : InterpolationModes;

declare var InterpolateSmooth : InterpolationModes;

declare var ZeroCurvatureEnding : InterpolationEndingModes;

declare var ZeroSlopeEnding : InterpolationEndingModes;

declare var WrapAroundEnding : InterpolationEndingModes;

declare var TrianglesDrawMode : TrianglesDrawModes;

declare var TriangleStripDrawMode : TrianglesDrawModes;

declare var TriangleFanDrawMode : TrianglesDrawModes;

declare var LinearEncoding : TextureEncoding;

declare var sRGBEncoding : TextureEncoding;

declare var GammaEncoding : TextureEncoding;

declare var RGBEEncoding : TextureEncoding;

declare var LogLuvEncoding : TextureEncoding;

declare var RGBM7Encoding : TextureEncoding;

declare var RGBM16Encoding : TextureEncoding;

declare var RGBDEncoding : TextureEncoding;

declare var BasicDepthPacking : DepthPackingStrategies;

declare var RGBADepthPacking : DepthPackingStrategies;

declare function warn(message : any, ...optionalParams : any[]);

declare function error(message : any, ...optionalParams : any[]);

declare function log(message : any, ...optionalParams : any[]);

declare var GeometryIdCount : number;

declare var Object3DIdCount : number;

declare var DefaultLoadingManager : LoadingManager;

declare var MaterialIdCount : number;

/**
 * @deprecated
 */
declare var LineStrip : number;

/**
 * @deprecated
 */
declare var LinePieces : number;

declare var TextureIdCount : number;

declare var AudioContext : AudioContext;

declare function warn();

declare function error();

declare function log();

declare var CopyShader : Shader;

declare var AWDLoader : any;

declare var OBJLoader2 : any;

declare var STLLoader : any;

declare var FlyControls : any;

declare var BloomPass : any;

declare var DotScreenShader : Shader;

declare var RGBShiftShader : Shader;

declare var FXAAShader : Shader;

declare var canvas : boolean;

declare var webgl : boolean;

declare var workers : boolean;

declare var fileapi : boolean;

declare function getWebGLErrorMessage() : HTMLElement;

declare function addGetWebGLMessage(parameters : any);

declare function addGetWebGLMessage();


declare class TorusGeometry extends Geometry {
    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, arc : number);

    public parameters : any;

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

    public constructor(radius : number, tube : number, radialSegments : number);

    public constructor(radius : number, tube : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class CurveUtils {
    constructor();

    public static tangentQuadraticBezier(t : number, p0 : number, p1 : number, p2 : number) : number;

    public static tangentCubicBezier(t : number, p0 : number, p1 : number, p2 : number, p3 : number) : number;

    public static tangentSpline(t : number, p0 : number, p1 : number, p2 : number, p3 : number) : number;

    public static interpolate(p0 : number, p1 : number, p2 : number, p3 : number, t : number) : number;
}

/**
 * This creates a new BufferGeometry. It also sets several properties to an default value.
 * @class
 * @extends EventDispatcher
 */
declare class BufferGeometry extends EventDispatcher {
    public constructor();

    public static MaxIndex : number;

    /**
     * Unique number of this buffergeometry instance
     */
    public id : number;

    public uuid : string;

    public name : string;

    public type : string;

    public index : BufferAttribute;

    public attributes : ((BufferAttribute)|(InterleavedBufferAttribute[]));

    public morphAttributes : any;

    public groups : any[];

    public boundingBox : Box3;

    public boundingSphere : Sphere;

    public drawRange : any;

    public getIndex() : BufferAttribute;

    public setIndex(index : BufferAttribute);

    public addAttribute(name : string, attribute : BufferAttribute) : BufferGeometry;

    public getAttribute(name : string) : ((BufferAttribute)|(InterleavedBufferAttribute));

    public removeAttribute(name : string) : BufferGeometry;

    public addGroup(start : number, count : number, materialIndex : number);

    public clearGroups();

    public setDrawRange(start : number, count : number);

    /**
     * Bakes matrix transform directly into vertex coordinates.
     * @param {Matrix4} matrix
     * @return {BufferGeometry}
     */
    public applyMatrix(matrix : Matrix4) : BufferGeometry;

    public rotateX(angle : number) : BufferGeometry;

    public rotateY(angle : number) : BufferGeometry;

    public rotateZ(angle : number) : BufferGeometry;

    public translate(x : number, y : number, z : number) : BufferGeometry;

    public scale(x : number, y : number, z : number) : BufferGeometry;

    public lookAt(v : Vector3);

    public center() : Vector3;

    public setFromObject(object : Object3D) : BufferGeometry;

    public setFromPoints(points : Vector3[]) : BufferGeometry;

    public updateFromObject(object : Object3D);

    public fromGeometry(geometry : Geometry, settings : any) : BufferGeometry;

    public fromDirectGeometry(geometry : DirectGeometry) : BufferGeometry;

    /**
     * Computes bounding box of the geometry, updating Geometry.boundingBox attribute.
     * Bounding boxes aren't computed by default. They need to be explicitly computed, otherwise they are null.
     */
    public computeBoundingBox();

    /**
     * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
     * Bounding spheres aren't' computed by default. They need to be explicitly computed, otherwise they are null.
     */
    public computeBoundingSphere();

    /**
     * Computes vertex normals by averaging face normals.
     */
    public computeVertexNormals();

    public merge(geometry : BufferGeometry, offset : number) : BufferGeometry;

    public normalizeNormals();

    public toNonIndexed() : BufferGeometry;

    public toJSON() : any;

    public clone() : BufferGeometry;

    public copy(source : BufferGeometry) : BufferGeometry;

    /**
     * Disposes the object from memory.
     * You need to call this when you want the bufferGeometry removed while the application is running.
     */
    public dispose();

    /**
     * @deprecated Use {@link BufferGeometry#groups} instead.
     */
    public drawcalls : any;

    /**
     * @deprecated Use {@link BufferGeometry#groups} instead.
     */
    public offsets : any;

    /**
     * @deprecated Use {@link BufferGeometry#setIndex} instead.
     * @param {*} index
     */
    public addIndex(index : any);

    /**
     * @deprecated Use {@link BufferGeometry#addGroup} instead.
     * @param {*} start
     * @param {*} count
     * @param {*} indexOffset
     */
    public addDrawCall(start : any, count : any, indexOffset : any);

    /**
     * @deprecated Use {@link BufferGeometry#clearGroups} instead.
     */
    public clearDrawCalls();

    public addAttribute(name : any, array : any, itemSize : any) : any;

    public addGroup(start : number, count : number);

    public fromGeometry(geometry : Geometry) : BufferGeometry;

    /**
     * @deprecated Use {@link BufferGeometry#addGroup} instead.
     * @param {*} start
     * @param {*} count
     */
    public addDrawCall(start : any, count : any);

    public setIndex(index : number[]);

    public addAttribute(name : string, attribute : InterleavedBufferAttribute) : BufferGeometry;
}

declare class MTLLoader extends EventDispatcher {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public materialOptions : any;

    public materials : Material[];

    public path : string;

    public texturePath : string;

    public crossOrigin : boolean;

    public load(url : string, onLoad : (p1: MaterialCreator) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public parse(text : string) : MaterialCreator;

    public setPath(path : string);

    public setTexturePath(path : string);

    public setBaseUrl(path : string);

    public setCrossOrigin(value : boolean);

    public setMaterialOptions(value : any);

    public constructor();

    public load(url : string, onLoad : (p1: MaterialCreator) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: MaterialCreator) => void);
}

declare class WebGLBufferRenderer {
    public constructor(_gl : WebGLRenderingContext, extensions : any, _infoRender : any);

    public setMode(value : any);

    public render(start : any, count : number);

    public renderInstances(geometry : any);

    constructor();
}

declare class TextGeometry extends ExtrudeGeometry {
    public constructor(text : string, parameters : TextGeometryParameters);

    public parameters : any;

    public constructor(text : string);

    constructor();
}

/**
 * @param {number} width — Width of the sides on the X axis.
 * @param {number} height — Height of the sides on the Y axis.
 * @param {number} depth — Depth of the sides on the Z axis.
 * @param {number} widthSegments — Number of segmented faces along the width of the sides.
 * @param {number} heightSegments — Number of segmented faces along the height of the sides.
 * @param {number} depthSegments — Number of segmented faces along the depth of the sides.
 * @class
 * @extends Geometry
 */
declare class BoxGeometry extends Geometry {
    public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number, depthSegments : number);

    public parameters : any;

    public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number);

    public constructor(width : number, height : number, depth : number, widthSegments : number);

    public constructor(width : number, height : number, depth : number);

    constructor();
}

declare class PointsMaterial extends Material {
    public constructor(parameters : PointsMaterialParameters);

    public color : Color;

    public map : Texture;

    public size : number;

    public sizeAttenuation : boolean;

    public setValues(parameters : PointsMaterialParameters);

    public constructor();
}

declare class Box2 {
    public constructor(min : Vector2, max : Vector2);

    public max : Vector2;

    public min : Vector2;

    public set(min : Vector2, max : Vector2) : Box2;

    public setFromPoints(points : Vector2[]) : Box2;

    public setFromCenterAndSize(center : Vector2, size : Vector2) : Box2;

    public clone() : Box2;

    public copy(box : Box2) : Box2;

    public makeEmpty() : Box2;

    public isEmpty() : boolean;

    public getCenter(optionalTarget : Vector2) : Vector2;

    public getSize(optionalTarget : Vector2) : Vector2;

    public expandByPoint(point : Vector2) : Box2;

    public expandByVector(vector : Vector2) : Box2;

    public expandByScalar(scalar : number) : Box2;

    public containsPoint(point : Vector2) : boolean;

    public containsBox(box : Box2) : boolean;

    public getParameter(point : Vector2) : Vector2;

    public intersectsBox(box : Box2) : boolean;

    public clampPoint(point : Vector2, optionalTarget : Vector2) : Vector2;

    public distanceToPoint(point : Vector2) : number;

    public intersect(box : Box2) : Box2;

    public union(box : Box2) : Box2;

    public translate(offset : Vector2) : Box2;

    public equals(box : Box2) : boolean;

    /**
     * @deprecated Use {@link Box2#isEmpty} instead.
     * @return {*}
     */
    public empty() : any;

    /**
     * @deprecated Use {@link Box2#intersectsBox} instead.
     * @param {*} b
     * @return {*}
     */
    public isIntersectionBox(b : any) : any;

    public constructor(min : Vector2);

    public constructor();

    public getCenter() : Vector2;

    public getSize() : Vector2;

    public clampPoint(point : Vector2) : Vector2;
}

declare class Uint8BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

declare class EditorControls extends EventDispatcher {
    public constructor(object : Camera, domElement : HTMLElement);

    public enabled : boolean;

    public center : Vector3;

    public focus(target : Object3D, frame : boolean);

    public pan(delta : Vector3);

    public zoom(delta : Vector3);

    public rotate(delta : Vector3);

    public dispose();

    public constructor(object : Camera);

    constructor();
}

/**
 * @deprecated Use {@link Points} instead.
 * @class
 * @extends Points
 */
declare class PointCloud extends Points {}

declare class CSS3DSprite extends CSS3DObject {
    public constructor(element : any);

    constructor();
}

declare enum BlendingSrcFactor {
  
}

/**
 * This is an automatically generated object type (see the source definition).
 * @class
 * @extends Object
 */
declare class UniformsLib {
    public static common : any;

    public static aomap : any;

    public static lightmap : any;

    public static emissivemap : any;

    public static bumpmap : any;

    public static normalmap : any;

    public static displacementmap : any;

    public static roughnessmap : any;

    public static metalnessmap : any;

    public static fog : any;

    public static lights : any;

    public static points : any;
}

declare class DirectionalLightHelper extends Object3D {
    public constructor(light : Light, size : number);

    public light : Light;

    public lightPlane : Line;

    public dispose();

    public update();

    public constructor(light : Light);

    constructor();
}

declare class Uint32BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

/**
 * @deprecated THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Float32Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare class ArrowHelper extends Object3D {
    public constructor(dir : Vector3, origin : Vector3, length : number, hex : number, headLength : number, headWidth : number);

    public line : Line;

    public cone : Mesh;

    public setDirection(dir : Vector3);

    public setLength(length : number, headLength : number, headWidth : number);

    public setColor(hex : number);

    public constructor(dir : Vector3, origin : Vector3, length : number, hex : number, headLength : number);

    public constructor(dir : Vector3, origin : Vector3, length : number, hex : number);

    public constructor(dir : Vector3, origin : Vector3, length : number);

    public constructor(dir : Vector3, origin : Vector3);

    public constructor(dir : Vector3);

    public setLength(length : number, headLength : number);

    public setLength(length : number);

    constructor();
}

declare class HemisphereLightHelper extends Object3D {
    public constructor(light : Light, sphereSize : number);

    public light : Light;

    public colors : Color[];

    public lightSphere : Mesh;

    public dispose();

    public update();

    constructor();
}

declare class TubeBufferGeometry extends BufferGeometry {
    public constructor(path : Curve<Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean);

    public parameters : any;

    public tangents : Vector3[];

    public normals : Vector3[];

    public binormals : Vector3[];

    public constructor(path : Curve<Vector3>, segments : number, radius : number, radiusSegments : number);

    public constructor(path : Curve<Vector3>, segments : number, radius : number);

    public constructor(path : Curve<Vector3>, segments : number);

    public constructor(path : Curve<Vector3>);

    constructor();
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferGeometry.js">src/core/InstancedBufferGeometry.js</a>
 * @class
 * @extends BufferGeometry
 */
declare class InstancedBufferGeometry extends BufferGeometry {
    public constructor();

    public groups : any[];

    public maxInstancedCount : number;

    public addGroup(start : number, count : number, instances : number);
}

declare enum TextureEncoding {
  
}

/**
 * @param {number} x x coordinate
 * @param {number} y y coordinate
 * @param {number} z z coordinate
 * @param {number} w w coordinate
 * @class
 * @extends Object
 */
declare class Quaternion {
    public constructor(x : number, y : number, z : number, w : number);

    public x : number;

    public y : number;

    public z : number;

    public w : number;

    /**
     * Sets values of this quaternion.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {Quaternion}
     */
    public set(x : number, y : number, z : number, w : number) : Quaternion;

    /**
     * Clones this quaternion.
     * @return {Quaternion}
     */
    public clone() : Quaternion;

    /**
     * Copies values of q to this quaternion.
     * @param {Quaternion} q
     * @return {Quaternion}
     */
    public copy(q : Quaternion) : Quaternion;

    /**
     * Sets this quaternion from rotation specified by Euler angles.
     * @param {Euler} euler
     * @param {boolean} update
     * @return {Quaternion}
     */
    public setFromEuler(euler : Euler, update : boolean) : Quaternion;

    /**
     * Sets this quaternion from rotation specified by axis and angle.
     * Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm.
     * Axis have to be normalized, angle is in radians.
     * @param {Vector3} axis
     * @param {number} angle
     * @return {Quaternion}
     */
    public setFromAxisAngle(axis : Vector3, angle : number) : Quaternion;

    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     * @param {Matrix4} m
     * @return {Quaternion}
     */
    public setFromRotationMatrix(m : Matrix4) : Quaternion;

    public setFromUnitVectors(vFrom : Vector3, vTo : Vector3) : Quaternion;

    /**
     * Inverts this quaternion.
     * @return {Quaternion}
     */
    public inverse() : Quaternion;

    public conjugate() : Quaternion;

    public dot(v : Quaternion) : number;

    public lengthSq() : number;

    /**
     * Computes length of this quaternion.
     * @return {number}
     */
    public length() : number;

    /**
     * Normalizes this quaternion.
     * @return {Quaternion}
     */
    public normalize() : Quaternion;

    /**
     * Multiplies this quaternion by b.
     * @param {Quaternion} q
     * @return {Quaternion}
     */
    public multiply(q : Quaternion) : Quaternion;

    public premultiply(q : Quaternion) : Quaternion;

    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     * @param {Quaternion} a
     * @param {Quaternion} b
     * @return {Quaternion}
     */
    public multiplyQuaternions(a : Quaternion, b : Quaternion) : Quaternion;

    public slerp(qb : Quaternion, t : number) : Quaternion;

    public equals(v : Quaternion) : boolean;

    public fromArray(n : number[]) : Quaternion;

    public toArray() : number[];

    public fromArray(xyzw : number[], offset : number) : Quaternion;

    public toArray(xyzw : number[], offset : number) : number[];

    public onChange(callback : Function) : Quaternion;

    public onChangeCallback : any;

    /**
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
     * @param {Quaternion} qa
     * @param {Quaternion} qb
     * @param {Quaternion} qm
     * @param {number} t
     * @return {Quaternion}
     */
    public static slerp(qa : Quaternion, qb : Quaternion, qm : Quaternion, t : number) : Quaternion;

    public static slerpFlat(dst : number[], dstOffset : number, src0 : number[], srcOffset : number, src1 : number[], stcOffset1 : number, t : number) : Quaternion;

    /**
     * @deprecated Use {@link Vector#applyQuaternion} instead.
     * @param {*} v
     * @return {*}
     */
    public multiplyVector3(v : any) : any;

    public constructor(x : number, y : number, z : number);

    public constructor(x : number, y : number);

    public constructor(x : number);

    public constructor();

    /**
     * Sets this quaternion from rotation specified by Euler angles.
     * @param {Euler} euler
     * @return {Quaternion}
     */
    public setFromEuler(euler : Euler) : Quaternion;

    public toArray(xyzw : number[]) : number[];
}

declare class EdgesGeometry extends BufferGeometry {
    public constructor(geometry : BufferGeometry, thresholdAngle : number);

    constructor();
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class SceneUtils {
    constructor();

    public static createMultiMaterialObject(geometry : Geometry, materials : Material[]) : Object3D;

    public static detach(child : Object3D, parent : Object3D, scene : Scene);

    public static attach(child : Object3D, scene : Scene, parent : Object3D);
}

/**
 * @deprecated THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Int8Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare class CatmullRomCurve3 extends Curve<Vector3> {
    public constructor(points : Vector3[]);

    public points : Vector3[];

    public constructor();
}

/**
 * Class for loading a texture.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 * @param {LoadingManager} manager
 * @class
 * @extends Object
 */
declare class TextureLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public crossOrigin : string;

    public withCredentials : string;

    public path : string;

    /**
     * Begin loading from url
     * 
     * @param {string} url
     * @param {*} onLoad
     * @param {*} onProgress
     * @param {*} onError
     * @return {Texture}
     */
    public load(url : string, onLoad : (p1: Texture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : Texture;

    public setCrossOrigin(crossOrigin : string) : TextureLoader;

    public setWithCredentials(value : string) : TextureLoader;

    public setPath(path : string) : TextureLoader;

    public constructor();

    /**
     * Begin loading from url
     * 
     * @param {string} url
     * @param {*} onLoad
     * @param {*} onProgress
     * @return {Texture}
     */
    public load(url : string, onLoad : (p1: Texture) => void, onProgress : (p1: ProgressEvent) => void) : Texture;

    /**
     * Begin loading from url
     * 
     * @param {string} url
     * @param {*} onLoad
     * @return {Texture}
     */
    public load(url : string, onLoad : (p1: Texture) => void) : Texture;

    /**
     * Begin loading from url
     * 
     * @param {string} url
     * @return {Texture}
     */
    public load(url : string) : Texture;
}

/**
 * ( interface Vector&lt;T&gt; )
 * 
 * Abstract interface of Vector2, Vector3 and Vector4.
 * Currently the members of Vector is NOT type safe because it accepts different typed vectors.
 * Those definitions will be changed when TypeScript innovates Generics to be type safe.
 * 
 * @example
 * var v:THREE.Vector = new THREE.Vector3();
 * v.addVectors(new THREE.Vector2(0, 1), new THREE.Vector2(2, 3));    // invalid but compiled successfully
 * @class
 * @extends Object
 */
interface Vector {
    setComponent(index : number, value : number);

    getComponent(index : number) : number;

    /**
     * copy(v:T):T;
     * @param {*} v
     * @return {*}
     */
    copy(v : Vector) : Vector;

    /**
     * add(v:T):T;
     * @param {*} v
     * @return {*}
     */
    add(v : Vector) : Vector;

    /**
     * addVectors(a:T, b:T):T;
     * @param {*} a
     * @param {*} b
     * @return {*}
     */
    addVectors(a : Vector, b : Vector) : Vector;

    /**
     * sub(v:T):T;
     * @param {*} v
     * @return {*}
     */
    sub(v : Vector) : Vector;

    /**
     * subVectors(a:T, b:T):T;
     * @param {*} a
     * @param {*} b
     * @return {*}
     */
    subVectors(a : Vector, b : Vector) : Vector;

    /**
     * multiplyScalar(s:number):T;
     * @param {number} s
     * @return {*}
     */
    multiplyScalar(s : number) : Vector;

    /**
     * divideScalar(s:number):T;
     * @param {number} s
     * @return {*}
     */
    divideScalar(s : number) : Vector;

    /**
     * negate():T;
     * @return {*}
     */
    negate() : Vector;

    /**
     * dot(v:T):T;
     * @param {*} v
     * @return {number}
     */
    dot(v : Vector) : number;

    /**
     * lengthSq():number;
     * @return {number}
     */
    lengthSq() : number;

    /**
     * length():number;
     * @return {number}
     */
    length() : number;

    /**
     * normalize():T;
     * @return {*}
     */
    normalize() : Vector;

    /**
     * NOTE: Vector4 doesn't have the property.
     * 
     * distanceTo(v:T):number;
     * @param {*} v
     * @return {number}
     */
    distanceTo(v : Vector) : number;

    /**
     * NOTE: Vector4 doesn't have the property.
     * 
     * distanceToSquared(v:T):number;
     * @param {*} v
     * @return {number}
     */
    distanceToSquared(v : Vector) : number;

    /**
     * setLength(l:number):T;
     * @param {number} l
     * @return {*}
     */
    setLength(l : number) : Vector;

    /**
     * lerp(v:T, alpha:number):T;
     * @param {*} v
     * @param {number} alpha
     * @return {*}
     */
    lerp(v : Vector, alpha : number) : Vector;

    /**
     * equals(v:T):boolean;
     * @param {*} v
     * @return {boolean}
     */
    equals(v : Vector) : boolean;

    /**
     * clone():T;
     * @return {*}
     */
    clone() : Vector;
}

/**
 * Creates an identity matrix.
 * @class
 * @extends *
 */
declare class Matrix3 implements Matrix {
    public constructor();

    /**
     * Float32Array with matrix values.
     */
    public elements : Float32Array;

    public set(n11 : number, n12 : number, n13 : number, n21 : number, n22 : number, n23 : number, n31 : number, n32 : number, n33 : number) : Matrix3;

    public identity() : Matrix3;

    public clone() : Matrix3;

    public copy(m : Matrix3) : Matrix3;

    public setFromMatrix4(m : Matrix4) : Matrix3;

    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @param {number} offset
     * @param {number} length
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute, offset : number, length : number) : BufferAttribute;

    public applyToBufferAttribute(attribute : BufferAttribute) : BufferAttribute;

    public multiplyScalar(s : number) : Matrix3;

    public determinant() : number;

    public getInverse(matrix : Matrix3, throwOnDegenerate : boolean) : Matrix3;

    /**
     * Transposes this matrix in place.
     * @return {Matrix3}
     */
    public transpose() : Matrix3;

    public getNormalMatrix(matrix4 : Matrix4) : Matrix3;

    /**
     * Transposes this matrix into the supplied array r, and returns itself.
     * @param {Array} r
     * @return {Array}
     */
    public transposeIntoArray(r : number[]) : number[];

    public fromArray(array : number[], offset : number) : Matrix3;

    public toArray() : number[];

    /**
     * Multiplies this matrix by m.
     * @param {Matrix3} m
     * @return {Matrix3}
     */
    public multiply(m : Matrix3) : Matrix3;

    public premultiply(m : Matrix3) : Matrix3;

    /**
     * Sets this matrix to a x b.
     * @param {Matrix3} a
     * @param {Matrix3} b
     * @return {Matrix3}
     */
    public multiplyMatrices(a : Matrix3, b : Matrix3) : Matrix3;

    /**
     * @deprecated Use {@link Vector3.applyMatrix3} instead.
     * @param {Vector3} vector
     * @return {*}
     */
    public multiplyVector3(vector : Vector3) : any;

    /**
     * @deprecated This method has been removed completely.
     * @param {*} a
     * @return {*}
     */
    public multiplyVector3Array(a : any) : any;

    public getInverse(matrix : Matrix4, throwOnDegenerate : boolean) : Matrix3;

    /**
     * @deprecated Use {@link Matrix3#toArray} instead.
     * @param {Array} array
     * @param {number} offset
     * @return {Array}
     */
    public flattenToArrayOffset(array : number[], offset : number) : number[];

    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @param {number} offset
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute, offset : number) : BufferAttribute;

    /**
     * @deprecated Use {@link Matrix3#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute) : BufferAttribute;

    public getInverse(matrix : Matrix3) : Matrix3;

    public fromArray(array : number[]) : Matrix3;

    public getInverse(matrix : Matrix4) : Matrix3;
}

declare class LatheBufferGeometry extends BufferGeometry {
    public constructor(points : Vector2[], segments : number, phiStart : number, phiLength : number);

    public parameters : any;

    public constructor(points : Vector2[], segments : number, phiStart : number);

    public constructor(points : Vector2[], segments : number);

    public constructor(points : Vector2[]);

    constructor();
}

declare class CSS3DRenderer {
    public constructor();

    public domElement : HTMLElement;

    public setSize(width : number, height : number);

    public render(scene : Scene, camera : Camera);
}

declare class HemisphereLight extends Light {
    public constructor(skyColor : Color, groundColor : Color, intensity : number);

    public skyColor : Color;

    public groundColor : Color;

    public intensity : number;

    public constructor(skyColor : Color, groundColor : Color);

    public constructor(skyColor : Color);

    public constructor();

    public constructor(skyColor : Color, groundColor : string, intensity : number);

    public constructor(skyColor : Color, groundColor : number, intensity : number);

    public constructor(skyColor : string, groundColor : string, intensity : number);

    public constructor(skyColor : number, groundColor : number, intensity : number);

    public constructor(skyColor : number, groundColor : string, intensity : number);

    public constructor(skyColor : number, groundColor : Color, intensity : number);

    public constructor(skyColor : string, groundColor : Color, intensity : number);

    public constructor(skyColor : string, groundColor : number, intensity : number);

    public constructor(skyColor : Color, groundColor : number);

    public constructor(skyColor : number, groundColor : number);

    public constructor(skyColor : Color, groundColor : string);

    public constructor(skyColor : string, groundColor : Color);

    public constructor(skyColor : string, groundColor : string);

    public constructor(skyColor : number, groundColor : Color);

    public constructor(skyColor : number, groundColor : string);

    public constructor(skyColor : string, groundColor : number);

    public constructor(skyColor : string);

    public constructor(skyColor : number);
}

declare class AnimationMixer extends EventDispatcher {
    public constructor(root : any);

    public time : number;

    public timeScale : number;

    public clipAction(clip : AnimationClip, root : any) : AnimationAction;

    public existingAction(clip : AnimationClip, root : any) : AnimationAction;

    public stopAllAction() : AnimationMixer;

    public update(deltaTime : number) : AnimationMixer;

    public getRoot() : any;

    public uncacheClip(clip : AnimationClip);

    public uncacheRoot(root : any);

    public uncacheAction(clip : AnimationClip, root : any);

    public clipAction(clip : AnimationClip) : AnimationAction;

    public existingAction(clip : AnimationClip) : AnimationAction;

    public uncacheAction(clip : AnimationClip);

    constructor();
}

declare enum BlendingDstFactor {
  
}

/**
 * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
 * @param {number} hex
 * @param {number} near
 * @param {number} far
 * @class
 * @extends *
 */
declare class Fog implements IFog {
    public constructor(hex : number, near : number, far : number);

    public name : string;

    /**
     * Fog color.
     */
    public color : Color;

    /**
     * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
     */
    public near : number;

    /**
     * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
     * Default is 1000.
     */
    public far : number;

    public clone() : Fog;

    public toJSON() : any;

    public constructor(hex : number, near : number);

    public constructor(hex : number);

    constructor();
}

declare namespace SceneUtils {}
interface SplineControlPoint {
    x : number;

    y : number;

    z : number;
}

interface MorphNormals {
    name : string;

    normals : Vector3[];
}

declare enum InterpolationEndingModes {
  
}

declare class Octree {
    public constructor(parameters : any);

    public update();

    public add(object : any, options : any) : any;

    public addDeferred(object : any, options : any) : any;

    public addObjectData(object : any, part : any) : any;

    public remove(object : any) : any;

    public extend(octree : Octree) : any;

    public rebuild() : any;

    public updateObject(object : any) : any;

    public search(position : Vector3, radius : number, organizeByObject : boolean, direction : Vector3) : any;

    public setRoot(root : any) : any;

    public getDepthEnd() : number;

    public getNodeCountEnd() : number;

    public getObjectCountEnd() : number;

    public toConsole() : any;

    public constructor();

    public add(object : any) : any;

    public addDeferred(object : any) : any;
}

declare class TubeGeometry extends Geometry {
    public constructor(path : Curve<Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean, taper : (p1: number) => number);

    public parameters : any;

    public tangents : Vector3[];

    public normals : Vector3[];

    public binormals : Vector3[];

    public static NoTaper(u : number) : number;

    public static SinusoidalTaper(u : number) : number;

    public static FrenetFrames(path : Path, segments : number, closed : boolean);

    public constructor(path : Curve<Vector3>, segments : number, radius : number, radiusSegments : number, closed : boolean);

    public constructor(path : Curve<Vector3>, segments : number, radius : number, radiusSegments : number);

    public constructor(path : Curve<Vector3>, segments : number, radius : number);

    public constructor(path : Curve<Vector3>, segments : number);

    public constructor(path : Curve<Vector3>);

    public static NoTaper() : number;

    constructor();
}

declare class WebGLShader {
    public constructor(gl : any, type : string, string : string);

    constructor();
}

declare class RenderableSprite {
    public constructor();

    public id : number;

    public object : any;

    public x : number;

    public y : number;

    public z : number;

    public rotation : number;

    public scale : Vector2;

    public material : Material;
}

declare namespace ImageUtils {}
declare class SpriteMaterial extends Material {
    public constructor(parameters : SpriteMaterialParameters);

    public color : Color;

    public map : Texture;

    public rotation : number;

    public setValues(parameters : SpriteMaterialParameters);

    public constructor();
}

declare class OctahedronBufferGeometry extends PolyhedronBufferGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

declare namespace Cache {}
/**
 * Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
 * @class
 * @extends Object3D
 */
declare class Scene extends Object3D {
    public constructor();

    /**
     * A fog instance defining the type of fog that affects everything rendered in the scene. Default is null.
     */
    public fog : IFog;

    /**
     * If not null, it will force everything in the scene to be rendered with that material. Default is null.
     */
    public overrideMaterial : Material;

    public autoUpdate : boolean;

    public background : any;

    public toJSON(meta : any) : any;

    public toJSON() : any;
}

declare class Interpolant {
    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

    public parameterPositions : any;

    public samplesValues : any;

    public valueSize : number;

    public resultBuffer : any;

    public evaluate(time : number) : any;

    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

    constructor();
}

declare class WebGLRenderTargetCube extends WebGLRenderTarget {
    public constructor(width : number, height : number, options : WebGLRenderTargetOptions);

    public activeCubeFace : number;

    public activeMipMapLevel : number;

    public constructor(width : number, height : number);

    constructor();
}

interface Event {
    type : string;

    target : any;
}

interface LineDashedMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    linewidth? : number;

    scale? : number;

    dashSize? : number;

    gapSize? : number;
}

declare enum TrianglesDrawModes {
  
}

declare class CurvePath<T extends Vector> extends Curve<T> {
    public constructor();

    public curves : Curve<T>[];

    public autoClose : boolean;

    public add(curve : Curve<T>);

    public checkConnection() : boolean;

    public closePath();

    public getPoint(t : number) : T;

    public getLength() : number;

    public updateArcLengths();

    public getCurveLengths() : number[];

    public getSpacedPoints(divisions : number) : T[];

    public getPoints(divisions : number) : T[];

    /**
     * @deprecated Use {@link Geometry#setFromPoints} instead.
     * @param {number} divisions
     * @return {Geometry}
     */
    public createPointsGeometry(divisions : number) : Geometry;

    /**
     * @deprecated Use {@link Geometry#setFromPoints} instead.
     * @param {number} divisions
     * @return {Geometry}
     */
    public createSpacedPointsGeometry(divisions : number) : Geometry;

    /**
     * @deprecated Use {@link Geometry#setFromPoints} instead.
     * @param {Array} points
     * @return {Geometry}
     */
    public createGeometry(points : T[]) : Geometry;

    public getSpacedPoints() : T[];

    public getPoints() : T[];
}

declare class RingBufferGeometry extends BufferGeometry {
    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number);

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number);

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number);

    public constructor(innerRadius : number, outerRadius : number);

    public constructor(innerRadius : number);

    public constructor();
}

declare class AudioLoader {
    public constructor(manager : LoadingManager);

    public load(url : string, onLoad : Function, onPrgress : Function, onError : Function);

    public constructor();
}

declare class ParametricGeometry extends Geometry {
    public constructor(func : (p1: number, p2: number) => Vector3, slices : number, stacks : number);

    public parameters : any;

    constructor();
}

interface PointsMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    map? : Texture;

    size? : number;

    sizeAttenuation? : boolean;
}

declare enum TextureDataType {
  
}

declare class ConeGeometry extends CylinderGeometry {
    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number, thetaLength : number);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number);

    public constructor(radius : number, height : number, radialSegment : number);

    public constructor(radius : number, height : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * @deprecated Use {@link BufferAttribute#setDynamic} instead.
 * @class
 * @extends BufferAttribute
 */
declare class DynamicBufferAttribute extends BufferAttribute {}

declare class VideoTexture extends Texture {
    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(video : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(video : HTMLVideoElement, mapping : Mapping);

    public constructor(video : HTMLVideoElement);

    constructor();
}

declare class ShaderPass {
    public constructor(shader : Shader, textureID : string);

    public textureID : string;

    public uniforms : any;

    public material : ShaderMaterial;

    public renderToScreen : boolean;

    public enabled : boolean;

    public needsSwap : boolean;

    public clear : boolean;

    public camera : Camera;

    public scene : Scene;

    public quad : Mesh;

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number);

    public constructor(shader : Shader);

    constructor();
}

declare class FileLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public mimeType : MimeType;

    public path : string;

    public responseType : string;

    public withCredentials : string;

    public load(url : string, onLoad : (p1: string) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : any;

    public setMimeType(mimeType : MimeType) : FileLoader;

    public setPath(path : string) : FileLoader;

    public setResponseType(responseType : string) : FileLoader;

    public setWithCredentials(value : string) : FileLoader;

    public constructor();

    public load(url : string, onLoad : (p1: string) => void, onProgress : (p1: ProgressEvent) => void) : any;

    public load(url : string, onLoad : (p1: string) => void) : any;

    public load(url : string) : any;
}

declare class PointLightHelper extends Object3D {
    public constructor(light : Light, sphereSize : number);

    public light : Light;

    public dispose();

    public update();

    constructor();
}

/**
 * @deprecated THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Float64Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

/**
 * @deprecated Use {@link WireframeGeometry} instead.
 * @param {Object3D} object
 * @param {number} hex
 * @class
 * @extends LineSegments
 */
declare class WireframeHelper extends LineSegments {
    public constructor(object : Object3D, hex : number);

    public constructor(object : Object3D);

    constructor();
}

declare class MaterialLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public textures : any;

    public load(url : string, onLoad : (p1: Material) => void);

    public setTextures(textures : any);

    public getTexture(name : string) : Texture;

    public parse(json : any) : Material;

    public constructor();
}

declare class SpotLightHelper extends Object3D {
    public constructor(light : Light);

    public light : Light;

    public dispose();

    public update();

    constructor();
}

declare class Line extends Object3D {
    public constructor(geometry : Geometry, material : LineDashedMaterial, mode : number);

    public geometry : ((Geometry)|(BufferGeometry));

    public material : Material;

    public raycast(raycaster : Raycaster, intersects : any);

    public constructor(geometry : Geometry, material : LineDashedMaterial);

    public constructor(geometry : Geometry);

    public constructor();

    public constructor(geometry : BufferGeometry, material : LineDashedMaterial, mode : number);

    public constructor(geometry : Geometry, material : ShaderMaterial, mode : number);

    public constructor(geometry : Geometry, material : LineBasicMaterial, mode : number);

    public constructor(geometry : BufferGeometry, material : LineBasicMaterial, mode : number);

    public constructor(geometry : BufferGeometry, material : ShaderMaterial, mode : number);

    public constructor(geometry : BufferGeometry, material : LineDashedMaterial);

    public constructor(geometry : BufferGeometry, material : LineBasicMaterial);

    public constructor(geometry : Geometry, material : ShaderMaterial);

    public constructor(geometry : BufferGeometry, material : ShaderMaterial);

    public constructor(geometry : Geometry, material : LineBasicMaterial);

    public constructor(geometry : BufferGeometry);
}

declare enum Combine {
  
}

declare enum AnimationActionLoopStyles {
  
}

declare class IcosahedronBufferGeometry extends PolyhedronBufferGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

interface MaterialParameters {
    alphaTest? : number;

    blendDst? : BlendingDstFactor;

    blendDstAlpha? : number;

    blendEquation? : BlendingEquation;

    blendEquationAlpha? : number;

    blending? : Blending;

    blendSrc? : ((BlendingSrcFactor)|(BlendingDstFactor));

    blendSrcAlpha? : number;

    clipIntersection? : boolean;

    clippingPlanes? : Plane[];

    clipShadows? : boolean;

    colorWrite? : boolean;

    depthFunc? : DepthModes;

    depthTest? : boolean;

    depthWrite? : boolean;

    fog? : boolean;

    lights? : boolean;

    name? : string;

    opacity? : number;

    overdraw? : number;

    polygonOffset? : boolean;

    polygonOffsetFactor? : number;

    polygonOffsetUnits? : number;

    precision? : any;

    premultipliedAlpha? : boolean;

    dithering? : boolean;

    flatShading? : boolean;

    side? : Side;

    transparent? : boolean;

    vertexColors? : Colors;

    visible? : boolean;
}

declare class MeshPhongMaterial extends Material {
    public constructor(parameters : MeshPhongMaterialParameters);

    public color : Color;

    public specular : Color;

    public shininess : number;

    public map : Texture;

    public lightMap : Texture;

    public lightMapIntensity : number;

    public aoMap : Texture;

    public aoMapIntensity : number;

    public emissive : Color;

    public emissiveIntensity : number;

    public emissiveMap : Texture;

    public bumpMap : Texture;

    public bumpScale : number;

    public normalMap : Texture;

    public normalScale : Vector2;

    public displacementMap : Texture;

    public displacementScale : number;

    public displacementBias : number;

    public specularMap : Texture;

    public alphaMap : Texture;

    public envMap : Texture;

    public combine : Combine;

    public reflectivity : number;

    public refractionRatio : number;

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public wireframeLinecap : string;

    public wireframeLinejoin : string;

    public skinning : boolean;

    public morphTargets : boolean;

    public morphNormals : boolean;

    /**
     * @deprecated Use {@link MeshStandardMaterial} instead.
     */
    public metal : boolean;

    public setValues(parameters : MeshPhongMaterialParameters);

    public constructor();
}

interface RenderTarget {}

declare class PolyhedronBufferGeometry extends BufferGeometry {
    public constructor(vertices : number[], indices : number[], radius : number, detail : number);

    public parameters : any;

    constructor();
}

/**
 * @deprecated since 0.84.0. Use {@link DataTextureLoader} (renamed)
 * @class
 * @extends DataTextureLoader
 */
declare class BinaryTextureLoader extends DataTextureLoader {}

/**
 * Interface for all loaders
 * CompressedTextureLoader don't extends Loader class, but have load method
 * @class
 * @extends Object
 */
interface AnyLoader {
    load(url : string, onLoad : (p1: any) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : any;

    load(url : string, onLoad : (p1: any) => void, onProgress : (p1: ProgressEvent) => void) : any;

    load(url : string, onLoad : (p1: any) => void) : any;

    load(url : string) : any;
}

declare class DodecahedronBufferGeometry extends PolyhedronBufferGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * @deprecated Use {@link Points} instead.
 * @class
 * @extends Points
 */
declare class ParticleSystem extends Points {}

declare class OutlinePass {
    public constructor(size : Vector2, scene : Scene, camer : Camera, selectedObjects : Array<Object3D>);

    public selectedObjects : Array<Object3D>;

    public renderCamera : Camera;

    public visibleEdgeColor : Color;

    public hiddenEdgeColor : Color;

    public edgeGlow : number;

    public usePatternTexture : boolean;

    public edgeThickness : number;

    public edgeStrength : number;

    public downSampleRatio : number;

    public pulsePeriod : number;

    public resolution : Vector2;

    public constructor(size : Vector2, scene : Scene, camer : Camera);

    public constructor(size : Vector2, scene : Scene, camer : Camera, selectedObjects : Object3D[]);

    constructor();
}

/**
 * parameters is an object with one or more properties defining the material's appearance.
 * @class
 * @extends *
 */
interface MeshBasicMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    opacity? : number;

    map? : Texture;

    aoMap? : Texture;

    aoMapIntensity? : number;

    specularMap? : Texture;

    alphaMap? : Texture;

    envMap? : Texture;

    combine? : Combine;

    reflectivity? : number;

    refractionRatio? : number;

    wireframe? : boolean;

    wireframeLinewidth? : number;

    wireframeLinecap? : string;

    wireframeLinejoin? : string;

    skinning? : boolean;

    morphTargets? : boolean;
}

declare class ExtrudeGeometry extends Geometry {
    public constructor(shape : Shape, options : any);

    public constructor(shapes : Shape[], options : any);

    public static WorldUVGenerator : any;

    public addShapeList(shapes : Shape[], options : any);

    public addShape(shape : Shape, options : any);

    public constructor(shape : Shape);

    public constructor();

    public constructor(shapes : Shape[]);

    public addShapeList(shapes : Shape[]);

    public addShape(shape : Shape);
}

declare class WebGLExtensions {
    public constructor(gl : WebGLRenderingContext);

    public get(name : string) : any;

    constructor();
}

interface WebGLRenderTargetOptions {
    wrapS? : Wrapping;

    wrapT? : Wrapping;

    magFilter? : TextureFilter;

    minFilter? : TextureFilter;

    format? : number;

    type? : TextureDataType;

    anisotropy? : number;

    depthBuffer? : boolean;

    stencilBuffer? : boolean;
}

declare class WebGLLights {
    public constructor(gl : WebGLRenderingContext, properties : any, info : any);

    public get(light : any) : any;

    constructor();
}

declare class CylinderBufferGeometry extends BufferGeometry {
    public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number, openEnded : boolean);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number, heightSegments : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radialSegments : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number);

    public constructor(radiusTop : number, radiusBottom : number);

    public constructor(radiusTop : number);

    public constructor();
}

declare class IcosahedronGeometry extends PolyhedronGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * Base class for scene graph objects
 * @class
 * @extends EventDispatcher
 */
declare class Object3D extends EventDispatcher {
    public constructor();

    /**
     * Unique number of this object instance.
     */
    public id : number;

    /**
     * 
     */
    public uuid : string;

    /**
     * Optional name of the object (doesn't need to be unique).
     */
    public name : string;

    public type : string;

    /**
     * Object's parent in the scene graph.
     */
    public parent : Object3D;

    /**
     * Array with object's children.
     */
    public children : Object3D[];

    /**
     * Up direction.
     */
    public up : Vector3;

    /**
     * Object's local position.
     */
    public position : Vector3;

    /**
     * Object's local rotation (Euler angles), in radians.
     */
    public rotation : Euler;

    /**
     * Global rotation.
     */
    public quaternion : Quaternion;

    /**
     * Object's local scale.
     */
    public scale : Vector3;

    public modelViewMatrix : Matrix4;

    public normalMatrix : Matrix3;

    /**
     * Local transform.
     */
    public matrix : Matrix4;

    /**
     * The global transform of the object. If the Object3d has no parent, then it's identical to the local transform.
     */
    public matrixWorld : Matrix4;

    /**
     * When this is set, it calculates the matrix of position, (rotation or quaternion) and scale every frame and also recalculates the matrixWorld property.
     */
    public matrixAutoUpdate : boolean;

    /**
     * When this is set, it calculates the matrixWorld in that frame and resets this property to false.
     */
    public matrixWorldNeedsUpdate : boolean;

    public layers : Layers;

    /**
     * Object gets rendered if true.
     */
    public visible : boolean;

    /**
     * Gets rendered into shadow map.
     */
    public castShadow : boolean;

    /**
     * Material gets baked in shadow receiving.
     */
    public receiveShadow : boolean;

    /**
     * When this is set, it checks every frame if the object is in the frustum of the camera. Otherwise the object gets drawn every frame even if it isn't visible.
     */
    public frustumCulled : boolean;

    public renderOrder : number;

    /**
     * An object that can be used to store custom data about the Object3d. It should not hold references to functions as these will not be cloned.
     */
    public userData : any;

    /**
     * Used to check whether this or derived classes are Object3Ds. Default is true.
     * You should not change this, as it is used internally for optimisation.
     */
    public isObject3D : boolean;

    /**
     * Calls before rendering object
     */
    public onBeforeRender : any;

    /**
     * Calls after rendering object
     */
    public onAfterRender : any;

    /**
     * 
     */
    public static DefaultUp : Vector3;

    public static DefaultMatrixAutoUpdate : boolean;

    /**
     * This updates the position, rotation and scale with the matrix.
     * @param {Matrix4} matrix
     */
    public applyMatrix(matrix : Matrix4);

    /**
     * @param {Vector3} axis
     * @param {number} angle
     */
    public setRotationFromAxisAngle(axis : Vector3, angle : number);

    /**
     * @param {Euler} euler
     */
    public setRotationFromEuler(euler : Euler);

    /**
     * @param {Matrix4} m
     */
    public setRotationFromMatrix(m : Matrix4);

    /**
     * @param {Quaternion} q
     */
    public setRotationFromQuaternion(q : Quaternion);

    /**
     * Rotate an object along an axis in object space. The axis is assumed to be normalized.
     * @param {Vector3} axis  A normalized vector in object space.
     * @param {number} angle  The angle in radians.
     * @return {Object3D}
     */
    public rotateOnAxis(axis : Vector3, angle : number) : Object3D;

    /**
     * Rotate an object along an axis in world space. The axis is assumed to be normalized. Method Assumes no rotated parent.
     * @param {Vector3} axis  A normalized vector in object space.
     * @param {number} angle  The angle in radians.
     * @return {Object3D}
     */
    public rotateOnWorldAxis(axis : Vector3, angle : number) : Object3D;

    /**
     * 
     * @param {number} angle
     * @return {Object3D}
     */
    public rotateX(angle : number) : Object3D;

    /**
     * 
     * @param {number} angle
     * @return {Object3D}
     */
    public rotateY(angle : number) : Object3D;

    /**
     * 
     * @param {number} angle
     * @return {Object3D}
     */
    public rotateZ(angle : number) : Object3D;

    /**
     * @param {Vector3} axis  A normalized vector in object space.
     * @param {number} distance  The distance to translate.
     * @return {Object3D}
     */
    public translateOnAxis(axis : Vector3, distance : number) : Object3D;

    /**
     * Translates object along x axis by distance.
     * @param {number} distance Distance.
     * @return {Object3D}
     */
    public translateX(distance : number) : Object3D;

    /**
     * Translates object along y axis by distance.
     * @param {number} distance Distance.
     * @return {Object3D}
     */
    public translateY(distance : number) : Object3D;

    /**
     * Translates object along z axis by distance.
     * @param {number} distance Distance.
     * @return {Object3D}
     */
    public translateZ(distance : number) : Object3D;

    /**
     * Updates the vector from local space to world space.
     * @param {Vector3} vector A local vector.
     * @return {Vector3}
     */
    public localToWorld(vector : Vector3) : Vector3;

    /**
     * Updates the vector from world space to local space.
     * @param {Vector3} vector A world vector.
     * @return {Vector3}
     */
    public worldToLocal(vector : Vector3) : Vector3;

    /**
     * Rotates object to face point in space.
     * @param {Vector3} vector A world vector to look at.
     */
    public lookAt(vector : Vector3);

    public lookAt(x : number, y : number, z : number);

    /**
     * Adds object as child of this object.
     * @param {Array} object
     */
    public add(...object : Object3D[]);

    /**
     * Removes object as child of this object.
     * @param {Array} object
     */
    public remove(...object : Object3D[]);

    /**
     * Searches through the object's children and returns the first with a matching id, optionally recursive.
     * @param {number} id  Unique number of the object instance
     * @return {Object3D}
     */
    public getObjectById(id : number) : Object3D;

    /**
     * Searches through the object's children and returns the first with a matching name, optionally recursive.
     * @param {string} name  String to match to the children's Object3d.name property.
     * @return {Object3D}
     */
    public getObjectByName(name : string) : Object3D;

    public getObjectByProperty(name : string, value : string) : Object3D;

    public getWorldPosition(optionalTarget : Vector3) : Vector3;

    public getWorldQuaternion(optionalTarget : Quaternion) : Quaternion;

    public getWorldRotation(optionalTarget : Euler) : Euler;

    public getWorldScale(optionalTarget : Vector3) : Vector3;

    public getWorldDirection(optionalTarget : Vector3) : Vector3;

    public raycast(raycaster : Raycaster, intersects : any);

    public traverse(callback : (p1: Object3D) => any);

    public traverseVisible(callback : (p1: Object3D) => any);

    public traverseAncestors(callback : (p1: Object3D) => any);

    /**
     * Updates local transform.
     */
    public updateMatrix();

    /**
     * Updates global transform of the object and its children.
     * @param {boolean} force
     */
    public updateMatrixWorld(force : boolean);

    public toJSON(meta : any) : any;

    public clone(recursive : boolean) : Object3D;

    /**
     * 
     * @param object
     * @param {boolean} recursive
     * @param {Object3D} source
     * @return {Object3D}
     */
    public copy(source : Object3D, recursive : boolean) : Object3D;

    public getWorldPosition() : Vector3;

    public getWorldQuaternion() : Quaternion;

    public getWorldRotation() : Euler;

    public getWorldScale() : Vector3;

    public getWorldDirection() : Vector3;

    public toJSON() : any;

    public clone() : Object3D;

    /**
     * 
     * @param object
     * @param recursive
     * @param {Object3D} source
     * @return {Object3D}
     */
    public copy(source : Object3D) : Object3D;
}

interface MorphBlendMeshAnimation {
    start : number;

    end : number;

    length : number;

    fps : number;

    duration : number;

    lastFrame : number;

    currentFrame : number;

    active : boolean;

    time : number;

    direction : number;

    weight : number;

    directionBackwards : boolean;

    mirroredLoop : boolean;
}

declare enum TextureFilter {
  
}

declare class WebGLIndexedBufferRenderer {
    public constructor(gl : WebGLRenderingContext, properties : any, info : any);

    public setMode(value : any);

    public setIndex(index : any);

    public render(start : any, count : number);

    public renderInstances(geometry : any, start : any, count : number);

    constructor();
}

declare class CompressedTextureLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public path : string;

    public load(url : string, onLoad : (p1: CompressedTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public setPath(path : string) : CompressedTextureLoader;

    public constructor();

    public load(url : string, onLoad : (p1: CompressedTexture) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: CompressedTexture) => void);
}

declare class AudioAnalyser {
    public constructor(audio : any, fftSize : number);

    public analyser : any;

    public data : Uint8Array;

    public getFrequencyData() : Uint8Array;

    public getAverageFrequency() : number;

    /**
     * @deprecated Use {@link AudioAnalyser#getFrequencyData} instead.
     * @param {*} file
     * @return {*}
     */
    public getData(file : any) : any;

    constructor();
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class AnimationUtils {
    constructor();

    public static arraySlice(array : any, from : number, to : number) : any;

    public static convertArray(array : any, type : any, forceClone : boolean) : any;

    public static isTypedArray(object : any) : boolean;

    public static getKeyFrameOrder(times : number) : number[];

    public static sortedArray(values : any[], stride : number, order : number[]) : any[];

    public static flattenJSON(jsonKeys : string[], times : any[], values : any[], valuePropertyName : string);
}

declare class WebGLObjects {
    public constructor(gl : WebGLRenderingContext, properties : any, info : any);

    public getAttributeBuffer(attribute : any) : any;

    public getWireframeAttribute(geometry : any) : any;

    public update(object : any);

    constructor();
}

interface Dds {
    mipmaps : ImageData[];

    width : number;

    height : number;

    format : CompressedPixelFormat;

    mipmapCount : number;
}

declare class RawShaderMaterial extends ShaderMaterial {
    public constructor(parameters : ShaderMaterialParameters);

    public constructor();
}

declare enum FrontFaceDirection {
  
}

declare class MeshPhysicalMaterial extends MeshStandardMaterial {
    public constructor(parameters : MeshPhysicalMaterialParameters);

    public defines : any;

    public reflectivity : number;

    public clearCoat : number;

    public clearCoatRoughness : number;

    constructor();
}

declare enum BlendingEquation {
  
}

declare enum CullFace {
  
}

declare class TrackballControls extends EventDispatcher {
    public constructor(object : Camera, domElement : HTMLElement);

    public object : Camera;

    public domElement : HTMLElement;

    public enabled : boolean;

    public screen : any;

    public rotateSpeed : number;

    public zoomSpeed : number;

    public panSpeed : number;

    public noRotate : boolean;

    public noZoom : boolean;

    public noPan : boolean;

    public noRoll : boolean;

    public staticMoving : boolean;

    public dynamicDampingFactor : number;

    public minDistance : number;

    public maxDistance : number;

    public keys : any;

    public target : Vector3;

    public position0 : Vector3;

    public target0 : Vector3;

    public up0 : Vector3;

    public update();

    public reset();

    public checkDistances();

    public zoomCamera();

    public panCamera();

    public rotateCamera();

    public handleResize();

    public handleEvent(event : any);

    public constructor(object : Camera);

    constructor();
}

/**
 * @deprecated THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Uint8Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare enum MOUSE {
    LEFT, MIDDLE, RIGHT
}

declare class WebGLClipping {
    public uniform : any;

    public numPlanes : number;

    public init(planes : any[], enableLocalClipping : boolean, camera : Camera) : boolean;

    public beginShadows();

    public endShadows();

    public setState(planes : any[], clipShadows : boolean, camera : Camera, cache : boolean, fromCache : boolean);
}

declare class ImmediateRenderObject extends Object3D {
    public constructor(material : Material);

    public material : Material;

    public render(renderCallback : Function);

    constructor();
}

/**
 * parameters is an optional object with properties defining the renderer's behaviour. The constructor also accepts no parameters at all. In all cases, it will assume sane defaults when parameters are missing.
 * @param {*} parameters
 * @class
 * @extends *
 */
declare class WebGLRenderer implements Renderer {
    public constructor(parameters : WebGLRendererParameters);

    /**
     * A Canvas where the renderer draws its output.
     * This is automatically created by the renderer in the constructor (if not provided already); you just need to add it to your page.
     */
    public domElement : HTMLCanvasElement;

    /**
     * The HTML5 Canvas's 'webgl' context obtained from the canvas where the renderer will draw.
     */
    public context : WebGLRenderingContext;

    /**
     * Defines whether the renderer should automatically clear its output before rendering.
     */
    public autoClear : boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the color buffer. Default is true.
     */
    public autoClearColor : boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the depth buffer. Default is true.
     */
    public autoClearDepth : boolean;

    /**
     * If autoClear is true, defines whether the renderer should clear the stencil buffer. Default is true.
     */
    public autoClearStencil : boolean;

    /**
     * Defines whether the renderer should sort objects. Default is true.
     */
    public sortObjects : boolean;

    public clippingPlanes : any[];

    public localClippingEnabled : boolean;

    public extensions : WebGLExtensions;

    /**
     * Default is false.
     */
    public gammaInput : boolean;

    /**
     * Default is false.
     */
    public gammaOutput : boolean;

    public physicallyCorrectLights : boolean;

    public toneMapping : ToneMapping;

    public toneMappingExposure : number;

    public toneMappingWhitePoint : number;

    /**
     * Default is false.
     */
    public shadowMapDebug : boolean;

    /**
     * Default is 8.
     */
    public maxMorphTargets : number;

    /**
     * Default is 4.
     */
    public maxMorphNormals : number;

    /**
     * An object with a series of statistical information about the graphics board memory and the rendering process. Useful for debugging or just for the sake of curiosity. The object contains the following fields:
     */
    public info : any;

    public shadowMap : WebGLShadowMap;

    public pixelRation : number;

    public capabilities : WebGLCapabilities;

    public properties : WebGLProperties;

    public renderLists : WebGLRenderLists;

    public state : WebGLState;

    public allocTextureUnit : any;

    public vr : WebVRManager;

    /**
     * Return the WebGL context.
     * @return {WebGLRenderingContext}
     */
    public getContext() : WebGLRenderingContext;

    public getContextAttributes() : any;

    public forceContextLoss();

    /**
     * @deprecated Use {@link WebGLCapabilities#getMaxAnisotropy} instead.
     * @return {number}
     */
    public getMaxAnisotropy() : number;

    /**
     * @deprecated Use {@link WebGLCapabilities#precision} instead.
     * @return {string}
     */
    public getPrecision() : string;

    public getPixelRatio() : number;

    public setPixelRatio(value : number);

    public getSize() : any;

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     * @param {number} width
     * @param {number} height
     * @param {boolean} updateStyle
     */
    public setSize(width : number, height : number, updateStyle : boolean);

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public setViewport(x : number, y : number, width : number, height : number);

    /**
     * Sets the scissor area from (x, y) to (x + width, y + height).
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    public setScissor(x : number, y : number, width : number, height : number);

    /**
     * Enable the scissor test. When this is enabled, only the pixels within the defined scissor area will be affected by further renderer actions.
     * @param {boolean} enable
     */
    public setScissorTest(enable : boolean);

    /**
     * Returns a THREE.Color instance with the current clear color.
     * @return {Color}
     */
    public getClearColor() : Color;

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     * @param {Color} color
     * @param {number} alpha
     */
    public setClearColor(color : Color, alpha : number);

    public setClearColor(color : string, alpha : number);

    public setClearColor(color : number, alpha : number);

    /**
     * Returns a float with the current clear alpha. Ranges from 0 to 1.
     * @return {number}
     */
    public getClearAlpha() : number;

    public setClearAlpha(alpha : number);

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     * @param {boolean} color
     * @param {boolean} depth
     * @param {boolean} stencil
     */
    public clear(color : boolean, depth : boolean, stencil : boolean);

    public clearColor();

    public clearDepth();

    public clearStencil();

    public clearTarget(renderTarget : WebGLRenderTarget, color : boolean, depth : boolean, stencil : boolean);

    /**
     * @deprecated Use {@link WebGLState#reset} instead.
     */
    public resetGLState();

    public dispose();

    /**
     * Tells the shadow map plugin to update using the passed scene and camera parameters.
     * 
     * @param scene an instance of Scene
     * @param camera — an instance of Camera
     * @param {Object3D} object
     * @param {*} program
     * @param {Material} material
     */
    public renderBufferImmediate(object : Object3D, program : any, material : Material);

    public renderBufferDirect(camera : Camera, fog : Fog, material : Material, geometryGroup : any, object : Object3D);

    /**
     * Render a scene using a camera.
     * The render is done to the renderTarget (if specified) or to the canvas as usual.
     * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
     * @param {Scene} scene
     * @param {Camera} camera
     * @param {*} renderTarget
     * @param {boolean} forceClear
     */
    public render(scene : Scene, camera : Camera, renderTarget : RenderTarget, forceClear : boolean);

    /**
     * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
     * If cullFace is false, culling will be disabled.
     * @param {CullFace} cullFace "back", "front", "front_and_back", or false.
     * @param {FrontFaceDirection} frontFace "ccw" or "cw
     */
    public setFaceCulling(cullFace : CullFace, frontFace : FrontFaceDirection);

    /**
     * @deprecated
     * @param {Texture} texture
     * @param {number} slot
     */
    public setTexture(texture : Texture, slot : number);

    public setTexture2D(texture : Texture, slot : number);

    public setTextureCube(texture : Texture, slot : number);

    public getRenderTarget() : RenderTarget;

    /**
     * @deprecated Use {@link WebGLRenderer#getRenderTarget} instead.
     * @return {*}
     */
    public getCurrentRenderTarget() : RenderTarget;

    public setRenderTarget(renderTarget : RenderTarget);

    public readRenderTargetPixels(renderTarget : RenderTarget, x : number, y : number, width : number, height : number, buffer : any);

    /**
     * @deprecated
     */
    public gammaFactor : number;

    /**
     * @deprecated Use {@link WebGLShadowMap#enabled} instead.
     */
    public shadowMapEnabled : boolean;

    /**
     * @deprecated Use {@link WebGLShadowMap#type} instead.
     */
    public shadowMapType : ShadowMapType;

    /**
     * @deprecated Use {@link WebGLShadowMap#cullFace} instead.
     */
    public shadowMapCullFace : CullFace;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsFloatTextures() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsHalfFloatTextures() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsStandardDerivatives() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsCompressedTextureS3TC() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsCompressedTexturePVRTC() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsBlendMinMax() : any;

    /**
     * @deprecated Use {@link WebGLCapabilities#vertexTextures} instead.
     * @return {*}
     */
    public supportsVertexTextures() : any;

    /**
     * @deprecated Use {@link WebGLExtensions#get} instead.
     * @return {*}
     */
    public supportsInstancedArrays() : any;

    /**
     * @deprecated Use {@link WebGLRenderer#setScissorTest} instead.
     * @param {*} Boolean
     * @return {*}
     */
    public enableScissorTest(Boolean : any) : any;

    public constructor();

    /**
     * Resizes the output canvas to (width, height), and also sets the viewport to fit that size, starting in (0, 0).
     * @param {number} width
     * @param {number} height
     */
    public setSize(width : number, height : number);

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * @param {number} x
     * @param {number} y
     * @param {number} width
     */
    public setViewport(x : number, y : number, width : number);

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * @param {number} x
     * @param {number} y
     */
    public setViewport(x : number, y : number);

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     * @param {number} x
     */
    public setViewport(x : number);

    /**
     * Sets the viewport to render from (x, y) to (x + width, y + height).
     */
    public setViewport();

    /**
     * Sets the clear color, using color for the color and alpha for the opacity.
     * @param {Color} color
     */
    public setClearColor(color : Color);

    public setClearColor(color : string);

    public setClearColor(color : number);

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     * @param {boolean} color
     * @param {boolean} depth
     */
    public clear(color : boolean, depth : boolean);

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     * @param {boolean} color
     */
    public clear(color : boolean);

    /**
     * Tells the renderer to clear its color, depth or stencil drawing buffer(s).
     * Arguments default to true
     */
    public clear();

    /**
     * Render a scene using a camera.
     * The render is done to the renderTarget (if specified) or to the canvas as usual.
     * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
     * @param {Scene} scene
     * @param {Camera} camera
     * @param {*} renderTarget
     */
    public render(scene : Scene, camera : Camera, renderTarget : RenderTarget);

    /**
     * Render a scene using a camera.
     * The render is done to the renderTarget (if specified) or to the canvas as usual.
     * If forceClear is true, the canvas will be cleared before rendering, even if the renderer's autoClear property is false.
     * @param {Scene} scene
     * @param {Camera} camera
     */
    public render(scene : Scene, camera : Camera);

    /**
     * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
     * If cullFace is false, culling will be disabled.
     * @param {CullFace} cullFace "back", "front", "front_and_back", or false.
     * @param frontFace "ccw" or "cw
     */
    public setFaceCulling(cullFace : CullFace);

    /**
     * Used for setting the gl frontFace, cullFace states in the GPU, thus enabling/disabling face culling when rendering.
     * If cullFace is false, culling will be disabled.
     * @param cullFace "back", "front", "front_and_back", or false.
     * @param frontFace "ccw" or "cw
     */
    public setFaceCulling();
}

interface WebVRManager {
    enabled : boolean;

    setPoseTarget(object : Object3D);

    getCamera(camera : PerspectiveCamera) : ((PerspectiveCamera)|(ArrayCamera));

    submitFrame();

    dispose();
}

declare class RenderableObject {
    public constructor();

    public id : number;

    public object : any;

    public z : number;
}

declare class BufferGeometryLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public load(url : string, onLoad : (p1: BufferGeometry) => void, onProgress : (p1: any) => void, onError : (p1: any) => void);

    public parse(json : any) : BufferGeometry;

    public constructor();

    public load(url : string, onLoad : (p1: BufferGeometry) => void, onProgress : (p1: any) => void);

    public load(url : string, onLoad : (p1: BufferGeometry) => void);
}

/**
 * A 4x4 Matrix.
 * 
 * @example
 * // Simple rig for rotating around 3 axes
 * var m = new THREE.Matrix4();
 * var m1 = new THREE.Matrix4();
 * var m2 = new THREE.Matrix4();
 * var m3 = new THREE.Matrix4();
 * var alpha = 0;
 * var beta = Math.PI;
 * var gamma = Math.PI/2;
 * m1.makeRotationX( alpha );
 * m2.makeRotationY( beta );
 * m3.makeRotationZ( gamma );
 * m.multiplyMatrices( m1, m2 );
 * m.multiply( m3 );
 * @class
 * @extends *
 */
declare class Matrix4 implements Matrix {
    public constructor();

    /**
     * Float32Array with matrix values.
     */
    public elements : Float32Array;

    /**
     * Sets all fields of this matrix.
     * @param {number} n11
     * @param {number} n12
     * @param {number} n13
     * @param {number} n14
     * @param {number} n21
     * @param {number} n22
     * @param {number} n23
     * @param {number} n24
     * @param {number} n31
     * @param {number} n32
     * @param {number} n33
     * @param {number} n34
     * @param {number} n41
     * @param {number} n42
     * @param {number} n43
     * @param {number} n44
     * @return {Matrix4}
     */
    public set(n11 : number, n12 : number, n13 : number, n14 : number, n21 : number, n22 : number, n23 : number, n24 : number, n31 : number, n32 : number, n33 : number, n34 : number, n41 : number, n42 : number, n43 : number, n44 : number) : Matrix4;

    /**
     * Resets this matrix to identity.
     * @return {Matrix4}
     */
    public identity() : Matrix4;

    public clone() : Matrix4;

    public copy(m : Matrix4) : Matrix4;

    public copyPosition(m : Matrix4) : Matrix4;

    public extractBasis(xAxis : Vector3, yAxis : Vector3, zAxis : Vector3) : Matrix4;

    public makeBasis(xAxis : Vector3, yAxis : Vector3, zAxis : Vector3) : Matrix4;

    /**
     * Copies the rotation component of the supplied matrix m into this matrix rotation component.
     * @param {Matrix4} m
     * @return {Matrix4}
     */
    public extractRotation(m : Matrix4) : Matrix4;

    public makeRotationFromEuler(euler : Euler) : Matrix4;

    public makeRotationFromQuaternion(q : Quaternion) : Matrix4;

    /**
     * Constructs a rotation matrix, looking from eye towards center with defined up vector.
     * @param {Vector3} eye
     * @param {Vector3} target
     * @param {Vector3} up
     * @return {Matrix4}
     */
    public lookAt(eye : Vector3, target : Vector3, up : Vector3) : Matrix4;

    /**
     * Multiplies this matrix by m.
     * @param {Matrix4} m
     * @return {Matrix4}
     */
    public multiply(m : Matrix4) : Matrix4;

    public premultiply(m : Matrix4) : Matrix4;

    /**
     * Sets this matrix to a x b.
     * @param {Matrix4} a
     * @param {Matrix4} b
     * @return {Matrix4}
     */
    public multiplyMatrices(a : Matrix4, b : Matrix4) : Matrix4;

    /**
     * Sets this matrix to a x b and stores the result into the flat array r.
     * r can be either a regular Array or a TypedArray.
     * 
     * @deprecated This method has been removed completely.
     * @param {Matrix4} a
     * @param {Matrix4} b
     * @param {Array} r
     * @return {Matrix4}
     */
    public multiplyToArray(a : Matrix4, b : Matrix4, r : number[]) : Matrix4;

    /**
     * Multiplies this matrix by s.
     * @param {number} s
     * @return {Matrix4}
     */
    public multiplyScalar(s : number) : Matrix4;

    /**
     * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @param {number} offset
     * @param {number} length
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute, offset : number, length : number) : BufferAttribute;

    public applyToBufferAttribute(attribute : BufferAttribute) : BufferAttribute;

    /**
     * Computes determinant of this matrix.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
     * @return {number}
     */
    public determinant() : number;

    /**
     * Transposes this matrix.
     * @return {Matrix4}
     */
    public transpose() : Matrix4;

    /**
     * Sets the position component for this matrix from vector v.
     * @param {Vector3} v
     * @return {Matrix4}
     */
    public setPosition(v : Vector3) : Matrix4;

    /**
     * Sets this matrix to the inverse of matrix m.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
     * @param {Matrix4} m
     * @param {boolean} throwOnDegeneratee
     * @return {Matrix4}
     */
    public getInverse(m : Matrix4, throwOnDegeneratee : boolean) : Matrix4;

    /**
     * Multiplies the columns of this matrix by vector v.
     * @param {Vector3} v
     * @return {Matrix4}
     */
    public scale(v : Vector3) : Matrix4;

    public getMaxScaleOnAxis() : number;

    /**
     * Sets this matrix as translation transform.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {Matrix4}
     */
    public makeTranslation(x : number, y : number, z : number) : Matrix4;

    /**
     * Sets this matrix as rotation transform around x axis by theta radians.
     * 
     * @param {number} theta Rotation angle in radians.
     * @return {Matrix4}
     */
    public makeRotationX(theta : number) : Matrix4;

    /**
     * Sets this matrix as rotation transform around y axis by theta radians.
     * 
     * @param {number} theta Rotation angle in radians.
     * @return {Matrix4}
     */
    public makeRotationY(theta : number) : Matrix4;

    /**
     * Sets this matrix as rotation transform around z axis by theta radians.
     * 
     * @param {number} theta Rotation angle in radians.
     * @return {Matrix4}
     */
    public makeRotationZ(theta : number) : Matrix4;

    /**
     * Sets this matrix as rotation transform around axis by angle radians.
     * Based on http://www.gamedev.net/reference/articles/article1199.asp.
     * 
     * @param {Vector3} axis Rotation axis.
     * @param theta Rotation angle in radians.
     * @param {number} angle
     * @return {Matrix4}
     */
    public makeRotationAxis(axis : Vector3, angle : number) : Matrix4;

    /**
     * Sets this matrix as scale transform.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {Matrix4}
     */
    public makeScale(x : number, y : number, z : number) : Matrix4;

    /**
     * Sets this matrix to the transformation composed of translation, rotation and scale.
     * @param {Vector3} translation
     * @param {Quaternion} rotation
     * @param {Vector3} scale
     * @return {Matrix4}
     */
    public compose(translation : Vector3, rotation : Quaternion, scale : Vector3) : Matrix4;

    /**
     * Decomposes this matrix into the translation, rotation and scale components.
     * If parameters are not passed, new instances will be created.
     * @param {Vector3} translation
     * @param {Quaternion} rotation
     * @param {Vector3} scale
     * @return {Array}
     */
    public decompose(translation : Vector3, rotation : Quaternion, scale : Vector3) : any[];

    /**
     * Creates a frustum matrix.
     * @param {number} left
     * @param {number} right
     * @param {number} bottom
     * @param {number} top
     * @param {number} near
     * @param {number} far
     * @return {Matrix4}
     */
    public makePerspective(left : number, right : number, bottom : number, top : number, near : number, far : number) : Matrix4;

    /**
     * Creates a perspective projection matrix.
     * @param {number} fov
     * @param {number} aspect
     * @param {number} near
     * @param {number} far
     * @return {Matrix4}
     */
    public makePerspective(fov : number, aspect : number, near : number, far : number) : Matrix4;

    /**
     * Creates an orthographic projection matrix.
     * @param {number} left
     * @param {number} right
     * @param {number} top
     * @param {number} bottom
     * @param {number} near
     * @param {number} far
     * @return {Matrix4}
     */
    public makeOrthographic(left : number, right : number, top : number, bottom : number, near : number, far : number) : Matrix4;

    public equals(matrix : Matrix4) : boolean;

    public fromArray(array : number[], offset : number) : Matrix4;

    public toArray() : number[];

    /**
     * @deprecated Use {@link Matrix4#copyPosition} instead.
     * @param {Matrix4} m
     * @return {Matrix4}
     */
    public extractPosition(m : Matrix4) : Matrix4;

    /**
     * @deprecated Use {@link Matrix4#makeRotationFromQuaternion} instead.
     * @param {Quaternion} q
     * @return {Matrix4}
     */
    public setRotationFromQuaternion(q : Quaternion) : Matrix4;

    /**
     * @deprecated Use {@link Vector3#applyMatrix4} instead.
     * @param {*} v
     * @return {*}
     */
    public multiplyVector3(v : any) : any;

    /**
     * @deprecated Use {@link Vector4#applyMatrix4} instead.
     * @param {*} v
     * @return {*}
     */
    public multiplyVector4(v : any) : any;

    /**
     * @deprecated This method has been removed completely.
     * @param {Array} array
     * @return {Array}
     */
    public multiplyVector3Array(array : number[]) : number[];

    /**
     * @deprecated Use {@link Vector3#transformDirection} instead.
     * @param {*} v
     */
    public rotateAxis(v : any);

    /**
     * @deprecated Use {@link Vector3#applyMatrix4} instead.
     * @param {*} v
     */
    public crossVector(v : any);

    /**
     * @deprecated Use {@link Matrix4#toArray} instead.
     * @param {Array} array
     * @param {number} offset
     * @return {Array}
     */
    public flattenToArrayOffset(array : number[], offset : number) : number[];

    /**
     * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @param {number} offset
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute, offset : number) : BufferAttribute;

    /**
     * @deprecated Use {@link Matrix4#applyToBufferAttribute} instead.
     * @param {BufferAttribute} buffer
     * @return {BufferAttribute}
     */
    public applyToBuffer(buffer : BufferAttribute) : BufferAttribute;

    /**
     * Sets this matrix to the inverse of matrix m.
     * Based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm.
     * @param {Matrix4} m
     * @return {Matrix4}
     */
    public getInverse(m : Matrix4) : Matrix4;

    /**
     * Decomposes this matrix into the translation, rotation and scale components.
     * If parameters are not passed, new instances will be created.
     * @param {Vector3} translation
     * @param {Quaternion} rotation
     * @return {Array}
     */
    public decompose(translation : Vector3, rotation : Quaternion) : any[];

    /**
     * Decomposes this matrix into the translation, rotation and scale components.
     * If parameters are not passed, new instances will be created.
     * @param {Vector3} translation
     * @return {Array}
     */
    public decompose(translation : Vector3) : any[];

    /**
     * Decomposes this matrix into the translation, rotation and scale components.
     * If parameters are not passed, new instances will be created.
     * @return {Array}
     */
    public decompose() : any[];

    public fromArray(array : number[]) : Matrix4;
}

declare class Font {
    public constructor(jsondata : string);

    public data : string;

    public generateShapes(text : string, size : number, divisions : number) : any[];

    constructor();
}

declare class AnimationObjectGroup {
    public constructor(...args : any[]);

    public uuid : string;

    public stats : any;

    public add(...args : any[]);

    public remove(...args : any[]);

    public uncache(...args : any[]);

    constructor();
}

declare class OrbitControls {
    public constructor(object : Camera, domElement : HTMLElement);

    public object : Camera;

    public domElement : ((HTMLElement)|(HTMLDocument));

    public enabled : boolean;

    public target : Vector3;

    public center : Vector3;

    public enableZoom : boolean;

    public zoomSpeed : number;

    public minDistance : number;

    public maxDistance : number;

    public enableRotate : boolean;

    public rotateSpeed : number;

    public enablePan : boolean;

    public keyPanSpeed : number;

    public autoRotate : boolean;

    public autoRotateSpeed : number;

    public minPolarAngle : number;

    public maxPolarAngle : number;

    public minAzimuthAngle : number;

    public maxAzimuthAngle : number;

    public enableKeys : boolean;

    public keys : any;

    public mouseButtons : any;

    public enableDamping : boolean;

    public dampingFactor : number;

    public rotateLeft(angle : number);

    public rotateUp(angle : number);

    public panLeft(distance : number);

    public panUp(distance : number);

    public pan(deltaX : number, deltaY : number);

    public dollyIn(dollyScale : number);

    public dollyOut(dollyScale : number);

    public update();

    public reset();

    public dispose();

    public getPolarAngle() : number;

    public getAzimuthalAngle() : number;

    public addEventListener(type : string, listener : (p1: any) => void);

    public hasEventListener(type : string, listener : (p1: any) => void);

    public removeEventListener(type : string, listener : (p1: any) => void);

    public dispatchEvent(event : any);

    public constructor(object : Camera);

    public rotateLeft();

    public rotateUp();

    public panLeft();

    public panUp();

    constructor();
}

declare class TetrahedronBufferGeometry extends PolyhedronBufferGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * @deprecated THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Uint16Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare class LinearInterpolant extends Interpolant {
    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

    public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

    constructor();
}

declare class ShapePath {
    public constructor();

    public subPaths : any[];

    public currentPath : any;

    public moveTo(x : number, y : number);

    public lineTo(x : number, y : number);

    public quadraticCurveTo(aCPx : number, aCPy : number, aX : number, aY : number);

    public bezierCurveTo(aCP1x : number, aCP1y : number, aCP2x : number, aCP2y : number, aX : number, aY : number);

    public splineThru(pts : Vector2[]);

    public toShapes(isCCW : boolean, noHoles : any) : Shape[];
}

declare class SMAAPass {
    public constructor(width : number, height : number);

    public renderToScreen : boolean;

    constructor();
}

declare enum Shading {
  
}

interface MeshPhongMaterialParameters extends MaterialParameters {
    /**
     * geometry color in hexadecimal. Default is 0xffffff.
     */
    color? : ((Color)|(string)|(number));

    specular? : ((Color)|(string)|(number));

    shininess? : number;

    opacity? : number;

    map? : Texture;

    lightMap? : Texture;

    lightMapIntensity? : number;

    aoMap? : Texture;

    aoMapIntensity? : number;

    emissive? : ((Color)|(string)|(number));

    emissiveIntensity? : number;

    emissiveMap? : Texture;

    bumpMap? : Texture;

    bumpScale? : number;

    normalMap? : Texture;

    normalScale? : Vector2;

    displacementMap? : Texture;

    displacementScale? : number;

    displacementBias? : number;

    specularMap? : Texture;

    alphaMap? : Texture;

    envMap? : Texture;

    combine? : Combine;

    reflectivity? : number;

    refractionRatio? : number;

    wireframe? : boolean;

    wireframeLinewidth? : number;

    wireframeLinecap? : string;

    wireframeLinejoin? : string;

    skinning? : boolean;

    morphTargets? : boolean;

    morphNormals? : boolean;
}

/**
 * @deprecated Use {@link PointsMaterial} instead
 * @class
 * @extends PointsMaterial
 */
declare class ParticleSystemMaterial extends PointsMaterial {}

interface VRFov {
    leftTan : number;

    rightTan : number;

    upTan : number;

    downTan : number;
}

interface Renderer {
    domElement : HTMLCanvasElement;

    render(scene : Scene, camera : Camera);

    setSize(width : number, height : number, updateStyle : boolean);

    setSize(width : number, height : number);
}

/**
 * The geometry is created by sweeping and calculating vertexes around the Y axis (horizontal sweep) and the Z axis (vertical sweep). Thus, incomplete spheres (akin to 'sphere slices') can be created through the use of different values of phiStart, phiLength, thetaStart and thetaLength, in order to define the points in which we start (or end) calculating those vertices.
 * 
 * @param {number} radius — sphere radius. Default is 50.
 * @param {number} widthSegments — number of horizontal segments. Minimum value is 3, and the default is 8.
 * @param {number} heightSegments — number of vertical segments. Minimum value is 2, and the default is 6.
 * @param {number} phiStart — specify horizontal starting angle. Default is 0.
 * @param {number} phiLength — specify horizontal sweep angle size. Default is Math.PI * 2.
 * @param {number} thetaStart — specify vertical starting angle. Default is 0.
 * @param {number} thetaLength — specify vertical sweep angle size. Default is Math.PI.
 * @class
 * @extends Geometry
 */
declare class SphereGeometry extends Geometry {
    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number);

    public constructor(radius : number, widthSegments : number);

    public constructor(radius : number);

    constructor();
}

declare class DiscreteInterpolant extends Interpolant {
    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

    public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

    constructor();
}

declare class Int16BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

/**
 * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
 * @param {number} hex
 * @param {number} density
 * @class
 * @extends *
 */
declare class FogExp2 implements IFog {
    public constructor(hex : number, density : number);

    public name : string;

    public color : Color;

    /**
     * Defines how fast the fog will grow dense.
     * Default is 0.00025.
     */
    public density : number;

    public clone() : FogExp2;

    public toJSON() : any;

    public constructor(hex : number);

    public constructor(hex : string, density : number);

    public constructor(hex : string);

    constructor();
}

/**
 * Materials describe the appearance of objects. They are defined in a (mostly) renderer-independent way, so you don't have to rewrite materials if you decide to use a different renderer.
 * @class
 * @extends EventDispatcher
 */
declare class Material extends EventDispatcher {
    public constructor();

    /**
     * Sets the alpha value to be used when running an alpha test. Default is 0.
     */
    public alphaTest : number;

    /**
     * Blending destination. It's one of the blending mode constants defined in Three.js. Default is {@link OneMinusSrcAlphaFactor}.
     */
    public blendDst : BlendingDstFactor;

    /**
     * The tranparency of the .blendDst. Default is null.
     */
    public blendDstAlpha : number;

    /**
     * Blending equation to use when applying blending. It's one of the constants defined in Three.js. Default is {@link AddEquation}.
     */
    public blendEquation : BlendingEquation;

    /**
     * The tranparency of the .blendEquation. Default is null.
     */
    public blendEquationAlpha : number;

    /**
     * Which blending to use when displaying objects with this material. Default is {@link NormalBlending}.
     */
    public blending : Blending;

    /**
     * Blending source. It's one of the blending mode constants defined in Three.js. Default is {@link SrcAlphaFactor}.
     */
    public blendSrc : ((BlendingSrcFactor)|(BlendingDstFactor));

    /**
     * The tranparency of the .blendSrc. Default is null.
     */
    public blendSrcAlpha : number;

    /**
     * Changes the behavior of clipping planes so that only their intersection is clipped, rather than their union. Default is false.
     */
    public clipIntersection : boolean;

    /**
     * User-defined clipping planes specified as THREE.Plane objects in world space. These planes apply to the objects this material is attached to. Points in space whose signed distance to the plane is negative are clipped (not rendered). See the WebGL / clipping /intersection example. Default is null.
     */
    public clippingPlanes : any;

    /**
     * Defines whether to clip shadows according to the clipping planes specified on this material. Default is false.
     */
    public clipShadows : boolean;

    /**
     * Whether to render the material's color. This can be used in conjunction with a mesh's .renderOrder property to create invisible objects that occlude other objects. Default is true.
     */
    public colorWrite : boolean;

    /**
     * Which depth function to use. Default is {@link LessEqualDepth}. See the depth mode constants for all possible values.
     */
    public depthFunc : DepthModes;

    /**
     * Whether to have depth test enabled when rendering this material. Default is true.
     */
    public depthTest : boolean;

    /**
     * Whether rendering this material has any effect on the depth buffer. Default is true.
     * When drawing 2D overlays it can be useful to disable the depth writing in order to layer several things together without creating z-index artifacts.
     */
    public depthWrite : boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     */
    public fog : boolean;

    /**
     * Unique number of this material instance.
     */
    public id : number;

    /**
     * Used to check whether this or derived classes are materials. Default is true.
     * You should not change this, as it used internally for optimisation.
     */
    public isMaterial : boolean;

    /**
     * Whether the material is affected by lights. Default is true.
     */
    public lights : boolean;

    /**
     * Material name. Default is an empty string.
     */
    public name : string;

    /**
     * Specifies that the material needs to be updated, WebGL wise. Set it to true if you made changes that need to be reflected in WebGL.
     * This property is automatically set to true when instancing a new material.
     */
    public needsUpdate : boolean;

    /**
     * Opacity. Default is 1.
     */
    public opacity : number;

    /**
     * Enables/disables overdraw. If greater than zero, polygons are drawn slightly bigger in order to fix antialiasing gaps when using the CanvasRenderer. Default is 0.
     */
    public overdraw : number;

    /**
     * Whether to use polygon offset. Default is false. This corresponds to the POLYGON_OFFSET_FILL WebGL feature.
     */
    public polygonOffset : boolean;

    /**
     * Sets the polygon offset factor. Default is 0.
     */
    public polygonOffsetFactor : number;

    /**
     * Sets the polygon offset units. Default is 0.
     */
    public polygonOffsetUnits : number;

    /**
     * Override the renderer's default precision for this material. Can be "highp", "mediump" or "lowp". Defaults is null.
     */
    public precision : any;

    /**
     * Whether to premultiply the alpha (transparency) value. See WebGL / Materials / Transparency for an example of the difference. Default is false.
     */
    public premultipliedAlpha : boolean;

    /**
     * Whether to apply dithering to the color to remove the appearance of banding. Default is false.
     */
    public dithering : boolean;

    /**
     * Define whether the material is rendered with flat shading. Default is false.
     */
    public flatShading : boolean;

    /**
     * Defines which of the face sides will be rendered - front, back or both.
     * Default is THREE.FrontSide. Other options are THREE.BackSide and THREE.DoubleSide.
     */
    public side : Side;

    /**
     * Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.
     * When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
     * Default is false.
     */
    public transparent : boolean;

    /**
     * Value is the string 'Material'. This shouldn't be changed, and can be used to find all objects of this type in a scene.
     */
    public type : string;

    /**
     * UUID of this material instance. This gets automatically assigned, so this shouldn't be edited.
     */
    public uuid : string;

    /**
     * Defines whether vertex coloring is used. Default is THREE.NoColors. Other options are THREE.VertexColors and THREE.FaceColors.
     */
    public vertexColors : Colors;

    /**
     * Defines whether this material is visible. Default is true.
     */
    public visible : boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     */
    public userData : any;

    /**
     * Return a new material with the same parameters as this material.
     * @return {Material}
     */
    public clone() : Material;

    /**
     * Copy the parameters from the passed material into this material.
     * @param {Material} material
     * @return {Material}
     */
    public copy(material : Material) : Material;

    /**
     * This disposes the material. Textures of a material don't get disposed. These needs to be disposed by {@link Texture}.
     */
    public dispose();

    /**
     * Sets the properties based on the values.
     * @param {*} values A container with parameters.
     */
    public setValues(values : MaterialParameters);

    /**
     * Convert the material to three.js JSON format.
     * @param {*} meta Object containing metadata such as textures or images for the material.
     * @return {*}
     */
    public toJSON(meta : any) : any;

    /**
     * Call .dispatchEvent ( { type: 'update' }) on the material.
     */
    public update();

    /**
     * Convert the material to three.js JSON format.
     * @param meta Object containing metadata such as textures or images for the material.
     * @return {*}
     */
    public toJSON() : any;
}

interface LineBasicMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    linewidth? : number;

    linecap? : string;

    linejoin? : string;
}

declare class StringKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    constructor();
}

declare class DataTextureLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public load(url : string, onLoad : (p1: DataTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public constructor();

    public load(url : string, onLoad : (p1: DataTexture) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: DataTexture) => void);
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/BufferAttribute.js">src/core/BufferAttribute.js</a>
 * @param {*} array
 * @param {number} itemSize
 * @param {boolean} normalized
 * @class
 * @extends Object
 */
declare class BufferAttribute {
    public constructor(array : ArrayLike<number>, itemSize : number, normalized : boolean);

    public uuid : string;

    public array : ArrayLike<number>;

    public itemSize : number;

    public dynamic : boolean;

    public updateRange : any;

    public version : number;

    public normalized : boolean;

    public needsUpdate : boolean;

    public count : number;

    public onUpload : any;

    public setArray(array : ArrayBufferView);

    public setDynamic(dynamic : boolean) : BufferAttribute;

    public clone() : BufferAttribute;

    public copy(source : BufferAttribute) : BufferAttribute;

    public copyAt(index1 : number, attribute : BufferAttribute, index2 : number) : BufferAttribute;

    public copyArray(array : ArrayLike<number>) : BufferAttribute;

    public copyColorsArray(colors : any[]) : BufferAttribute;

    public copyIndicesArray(indices : any[]) : BufferAttribute;

    public copyVector2sArray(vectors : any[]) : BufferAttribute;

    public copyVector3sArray(vectors : any[]) : BufferAttribute;

    public copyVector4sArray(vectors : any[]) : BufferAttribute;

    public set(value : ArrayLike<number>, offset : number) : BufferAttribute;

    public getX(index : number) : number;

    public setX(index : number, x : number) : BufferAttribute;

    public getY(index : number) : number;

    public setY(index : number, y : number) : BufferAttribute;

    public getZ(index : number) : number;

    public setZ(index : number, z : number) : BufferAttribute;

    public getW(index : number) : number;

    public setW(index : number, z : number) : BufferAttribute;

    public setXY(index : number, x : number, y : number) : BufferAttribute;

    public setXYZ(index : number, x : number, y : number, z : number) : BufferAttribute;

    public setXYZW(index : number, x : number, y : number, z : number, w : number) : BufferAttribute;

    /**
     * @deprecated Use {@link BufferAttribute#count} instead.
     */
    public length : number;

    public constructor(array : ArrayLike<number>, itemSize : number);

    public setArray();

    public set(value : ArrayLike<number>) : BufferAttribute;

    public set(value : ArrayBufferView, offset : number) : BufferAttribute;

    public set(value : ArrayBufferView) : BufferAttribute;

    public constructor(array : number[], itemSize : number, normalized : boolean);

    public copyArray(array : number[]) : BufferAttribute;

    public set(value : number[], offset : number) : BufferAttribute;

    public constructor(array : number[], itemSize : number);

    public set(value : number[]) : BufferAttribute;

    constructor();
}

declare class OBJLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public regexp : any;

    public materials : Material[];

    public path : string;

    public load(url : string, onLoad : (p1: Group) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public parse(data : string) : Group;

    public setPath(value : string);

    public setMaterials(materials : MaterialCreator);

    public _createParserState() : any;

    public constructor();

    public load(url : string, onLoad : (p1: Group) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: Group) => void);
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class Math {
    constructor();

    public static DEG2RAD : number;

    public static RAD2DEG : number;

    public static generateUUID() : string;

    /**
     * Clamps the x to be between a and b.
     * 
     * @param {number} value Value to be clamped.
     * @param {number} min Minimum value
     * @param {number} max Maximum value.
     * @return {number}
     */
    public static clamp(value : number, min : number, max : number) : number;

    public static euclideanModulo(n : number, m : number) : number;

    /**
     * Linear mapping of x from range [a1, a2] to range [b1, b2].
     * 
     * @param {number} x Value to be mapped.
     * @param {number} a1 Minimum value for range A.
     * @param {number} a2 Maximum value for range A.
     * @param {number} b1 Minimum value for range B.
     * @param {number} b2 Maximum value for range B.
     * @return {number}
     */
    public static mapLinear(x : number, a1 : number, a2 : number, b1 : number, b2 : number) : number;

    public static smoothstep(x : number, min : number, max : number) : number;

    public static smootherstep(x : number, min : number, max : number) : number;

    /**
     * Random float from 0 to 1 with 16 bits of randomness.
     * Standard Math.random() creates repetitive patterns when applied over larger space.
     * 
     * @deprecated Use {@link Math#random}
     * @return {number}
     */
    public static random16() : number;

    /**
     * Random integer from low to high interval.
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    public static randInt(low : number, high : number) : number;

    /**
     * Random float from low to high interval.
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    public static randFloat(low : number, high : number) : number;

    /**
     * Random float from - range / 2 to range / 2 interval.
     * @param {number} range
     * @return {number}
     */
    public static randFloatSpread(range : number) : number;

    public static degToRad(degrees : number) : number;

    public static radToDeg(radians : number) : number;

    public static isPowerOfTwo(value : number) : boolean;

    /**
     * @deprecated Use {@link Math#floorPowerOfTwo}
     * @param {number} value
     * @return {number}
     */
    public static nearestPowerOfTwo(value : number) : number;

    /**
     * @deprecated Use {@link Math#ceilPowerOfTwo}
     * @param {number} value
     * @return {number}
     */
    public static nextPowerOfTwo(value : number) : number;

    public static floorPowerOfTwo(value : number) : number;

    public static ceilPowerOfTwo(value : number) : number;
}

declare class Line3 {
    public constructor(start : Vector3, end : Vector3);

    public start : Vector3;

    public end : Vector3;

    public set(start : Vector3, end : Vector3) : Line3;

    public clone() : Line3;

    public copy(line : Line3) : Line3;

    public getCenter(optionalTarget : Vector3) : Vector3;

    public delta(optionalTarget : Vector3) : Vector3;

    public distanceSq() : number;

    public distance() : number;

    public at(t : number, optionalTarget : Vector3) : Vector3;

    public closestPointToPointParameter(point : Vector3, clampToLine : boolean) : number;

    public closestPointToPoint(point : Vector3, clampToLine : boolean, optionalTarget : Vector3) : Vector3;

    public applyMatrix4(matrix : Matrix4) : Line3;

    public equals(line : Line3) : boolean;

    public constructor(start : Vector3);

    public constructor();

    public set(start : Vector3) : Line3;

    public set() : Line3;

    public getCenter() : Vector3;

    public delta() : Vector3;

    public at(t : number) : Vector3;

    public closestPointToPointParameter(point : Vector3) : number;

    public closestPointToPoint(point : Vector3, clampToLine : boolean) : Vector3;

    public closestPointToPoint(point : Vector3) : Vector3;
}

declare class CSS3DObject extends Object3D {
    public constructor(element : any);

    public element : any;

    constructor();
}

declare class WebGLGeometries {
    public constructor(gl : WebGLRenderingContext, extensions : any, _infoRender : any);

    public get(object : any) : any;

    constructor();
}

declare class FaceNormalsHelper extends LineSegments {
    public constructor(object : Object3D, size : number, hex : number, linewidth : number);

    public object : Object3D;

    public size : number;

    public update(object : Object3D);

    public constructor(object : Object3D, size : number, hex : number);

    public constructor(object : Object3D, size : number);

    public constructor(object : Object3D);

    public update();

    constructor();
}

declare class PositionalAudio extends Audio {
    public constructor(listener : AudioListener);

    public panner : PannerNode;

    public setRefDistance(value : number);

    public getRefDistance() : number;

    public setRolloffFactor(value : number);

    public getRolloffFactor() : number;

    public setDistanceModel(value : number);

    public getDistanceModel() : number;

    public setMaxDistance(value : number);

    public getMaxDistance() : number;

    constructor();
}

declare class Ray {
    public constructor(origin : Vector3, direction : Vector3);

    public origin : Vector3;

    public direction : Vector3;

    public set(origin : Vector3, direction : Vector3) : Ray;

    public clone() : Ray;

    public copy(ray : Ray) : Ray;

    public at(t : number, optionalTarget : Vector3) : Vector3;

    public lookAt(v : Vector3) : Vector3;

    public recast(t : number) : Ray;

    public closestPointToPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public distanceToPoint(point : Vector3) : number;

    public distanceSqToPoint(point : Vector3) : number;

    public distanceSqToSegment(v0 : Vector3, v1 : Vector3, optionalPointOnRay : Vector3, optionalPointOnSegment : Vector3) : number;

    public intersectSphere(sphere : Sphere, optionalTarget : Vector3) : Vector3;

    public intersectsSphere(sphere : Sphere) : boolean;

    public distanceToPlane(plane : Plane) : number;

    public intersectPlane(plane : Plane, optionalTarget : Vector3) : Vector3;

    public intersectsPlane(plane : Plane) : boolean;

    public intersectBox(box : Box3, optionalTarget : Vector3) : Vector3;

    public intersectsBox(box : Box3) : boolean;

    public intersectTriangle(a : Vector3, b : Vector3, c : Vector3, backfaceCulling : boolean, optionalTarget : Vector3) : Vector3;

    public applyMatrix4(matrix4 : Matrix4) : Ray;

    public equals(ray : Ray) : boolean;

    /**
     * @deprecated Use {@link Ray#intersectsBox} instead.
     * @param {*} b
     * @return {*}
     */
    public isIntersectionBox(b : any) : any;

    /**
     * @deprecated Use {@link Ray#intersectsPlane} instead.
     * @param {*} p
     * @return {*}
     */
    public isIntersectionPlane(p : any) : any;

    /**
     * @deprecated Use {@link Ray#intersectsSphere} instead.
     * @param {*} s
     * @return {*}
     */
    public isIntersectionSphere(s : any) : any;

    public constructor(origin : Vector3);

    public constructor();

    public at(t : number) : Vector3;

    public closestPointToPoint(point : Vector3) : Vector3;

    public distanceSqToSegment(v0 : Vector3, v1 : Vector3, optionalPointOnRay : Vector3) : number;

    public distanceSqToSegment(v0 : Vector3, v1 : Vector3) : number;

    public intersectSphere(sphere : Sphere) : Vector3;

    public intersectPlane(plane : Plane) : Vector3;

    public intersectBox(box : Box3) : Vector3;

    public intersectTriangle(a : Vector3, b : Vector3, c : Vector3, backfaceCulling : boolean) : Vector3;
}

declare class AxesHelper extends LineSegments {
    public constructor(size : number);

    public constructor();
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class ImageUtils {
    constructor();

    /**
     * @deprecated
     */
    public static crossOrigin : string;

    /**
     * @deprecated Use {@link TextureLoader} instead.
     * @param {string} url
     * @param {Mapping} mapping
     * @param {*} onLoad
     * @param {*} onError
     * @return {Texture}
     */
    public static loadTexture(url : string, mapping : Mapping, onLoad : (p1: Texture) => void, onError : (p1: string) => void) : Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader} instead.
     * @param {Array} array
     * @param {Mapping} mapping
     * @param {*} onLoad
     * @param {*} onError
     * @return {Texture}
     */
    public static loadTextureCube(array : string[], mapping : Mapping, onLoad : (p1: Texture) => void, onError : (p1: string) => void) : Texture;

    /**
     * @deprecated Use {@link TextureLoader} instead.
     * @param {string} url
     * @param {Mapping} mapping
     * @param {*} onLoad
     * @return {Texture}
     */
    public static loadTexture(url : string, mapping : Mapping, onLoad : (p1: Texture) => void) : Texture;

    /**
     * @deprecated Use {@link TextureLoader} instead.
     * @param {string} url
     * @param {Mapping} mapping
     * @return {Texture}
     */
    public static loadTexture(url : string, mapping : Mapping) : Texture;

    /**
     * @deprecated Use {@link TextureLoader} instead.
     * @param {string} url
     * @return {Texture}
     */
    public static loadTexture(url : string) : Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader} instead.
     * @param {Array} array
     * @param {Mapping} mapping
     * @param {*} onLoad
     * @return {Texture}
     */
    public static loadTextureCube(array : string[], mapping : Mapping, onLoad : (p1: Texture) => void) : Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader} instead.
     * @param {Array} array
     * @param {Mapping} mapping
     * @return {Texture}
     */
    public static loadTextureCube(array : string[], mapping : Mapping) : Texture;

    /**
     * @deprecated Use {@link CubeTextureLoader} instead.
     * @param {Array} array
     * @return {Texture}
     */
    public static loadTextureCube(array : string[]) : Texture;
}

declare class LightShadow {
    public constructor(camera : Camera);

    public camera : Camera;

    public bias : number;

    public radius : number;

    public mapSize : Vector2;

    public map : RenderTarget;

    public matrix : Matrix4;

    public copy(source : LightShadow) : LightShadow;

    public clone(recursive : boolean) : LightShadow;

    public toJSON() : any;

    public clone() : LightShadow;

    constructor();
}

/**
 * @deprecated THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Uint8ClampedAttribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare class LOD extends Object3D {
    public constructor();

    public levels : any[];

    public addLevel(object : Object3D, distance : number);

    public getObjectForDistance(distance : number) : Object3D;

    public raycast(raycaster : Raycaster, intersects : any);

    public update(camera : Camera);

    public toJSON(meta : any) : any;

    /**
     * @deprecated Use {@link LOD#levels} instead.
     */
    public objects : any[];

    public addLevel(object : Object3D);
}

declare class NumberKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    constructor();
}

declare class TransformControls extends Object3D {
    public constructor(object : Camera, domElement : HTMLElement);

    public object : Object3D;

    public update();

    public detach();

    public attach(object : Object3D);

    public getMode() : string;

    public setMode(mode : string);

    public setSnap(snap : any);

    public setSize(size : number);

    public setSpace(space : string);

    public constructor(object : Camera);

    constructor();
}

declare class Float32BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

interface MorphColor {
    name : string;

    colors : Color[];
}

/**
 * @deprecated THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Int16Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

declare class QuadraticBezierCurve3 extends Curve<Vector3> {
    public constructor(v0 : Vector3, v1 : Vector3, v2 : Vector3);

    public v0 : Vector3;

    public v1 : Vector3;

    public v2 : Vector3;

    constructor();
}

declare class RenderableVertex {
    public constructor();

    public position : Vector3;

    public positionWorld : Vector3;

    public positionScreen : Vector4;

    public visible : boolean;

    public copy(vertex : RenderableVertex);
}

declare class RenderableLine {
    public constructor();

    public id : number;

    public v1 : RenderableVertex;

    public v2 : RenderableVertex;

    public vertexColors : Color[];

    public material : Material;

    public z : number;
}

interface VREffectOffset {
    scale : number;

    offset : number;
}

interface MeshDepthMaterialParameters extends MaterialParameters {
    wireframe? : boolean;

    wireframeLinewidth? : number;
}

declare class VectorKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    constructor();
}

/**
 * Affects objects using MeshLambertMaterial or MeshPhongMaterial.
 * 
 * @example
 * // White directional light at half intensity shining from the top.
 * var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
 * directionalLight.position.set( 0, 1, 0 );
 * scene.add( directionalLight );
 * 
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/lights/DirectionalLight.js">src/lights/DirectionalLight.js</a>
 * @param {Color} color
 * @param {number} intensity
 * @class
 * @extends Light
 */
declare class DirectionalLight extends Light {
    public constructor(color : Color, intensity : number);

    /**
     * Target used for shadow camera orientation.
     */
    public target : Object3D;

    /**
     * Light's intensity.
     * Default — 1.0.
     */
    public intensity : number;

    public shadow : DirectionalLightShadow;

    public constructor(color : Color);

    public constructor();

    public constructor(color : string, intensity : number);

    public constructor(color : number, intensity : number);

    public constructor(color : string);

    public constructor(color : number);
}

declare class WebGLPrograms {
    public constructor(renderer : WebGLRenderer, capabilities : any);

    public programs : any[];

    public getParameters(material : ShaderMaterial, lights : any, fog : any, nClipPlanes : number, object : any) : any;

    public getProgramCode(material : ShaderMaterial, parameters : any) : string;

    public acquireProgram(material : ShaderMaterial, parameters : any, code : string) : WebGLProgram;

    public releaseProgram(program : WebGLProgram);

    constructor();
}

/**
 * @deprecated Use {@link MultiMaterial} instead.
 * @class
 * @extends MultiMaterial
 */
declare class MeshFaceMaterial extends MultiMaterial {}

declare class ClearMaskPass {
    public constructor();

    public enabled : boolean;

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number);
}

declare class TetrahedronGeometry extends PolyhedronGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

declare class CubeTexture extends Texture {
    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number, encoding : TextureEncoding);

    public images : any;

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(images : any[], mapping : Mapping, wrapS : Wrapping);

    public constructor(images : any[], mapping : Mapping);

    public constructor(images : any[]);

    public constructor();
}

declare class Triangle {
    public constructor(a : Vector3, b : Vector3, c : Vector3);

    public a : Vector3;

    public b : Vector3;

    public c : Vector3;

    public set(a : Vector3, b : Vector3, c : Vector3) : Triangle;

    public setFromPointsAndIndices(points : Vector3[], i0 : number, i1 : number, i2 : number) : Triangle;

    public clone() : Triangle;

    public copy(triangle : Triangle) : Triangle;

    public area() : number;

    public midpoint(optionalTarget : Vector3) : Vector3;

    public normal(optionalTarget : Vector3) : Vector3;

    public plane(optionalTarget : Vector3) : Plane;

    public barycoordFromPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public containsPoint(point : Vector3) : boolean;

    public closestPointToPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public equals(triangle : Triangle) : boolean;

    public static normal(a : Vector3, b : Vector3, c : Vector3, optionalTarget : Vector3) : Vector3;

    public static barycoordFromPoint(point : Vector3, a : Vector3, b : Vector3, c : Vector3, optionalTarget : Vector3) : Vector3;

    public static containsPoint(point : Vector3, a : Vector3, b : Vector3, c : Vector3) : boolean;

    public constructor(a : Vector3, b : Vector3);

    public constructor(a : Vector3);

    public constructor();

    public midpoint() : Vector3;

    public normal() : Vector3;

    public plane() : Plane;

    public barycoordFromPoint(point : Vector3) : Vector3;

    public closestPointToPoint(point : Vector3) : Vector3;

    public static normal(a : Vector3, b : Vector3, c : Vector3) : Vector3;
}

interface ShaderMaterialParameters extends MaterialParameters {
    defines? : any;

    uniforms? : any;

    vertexShader? : string;

    fragmentShader? : string;

    lineWidth? : number;

    wireframe? : boolean;

    wireframeLinewidth? : number;

    lights? : boolean;

    clipping? : boolean;

    skinning? : boolean;

    morphTargets? : boolean;

    morphNormals? : boolean;
}

declare class Sprite extends Object3D {
    public constructor(material : Material);

    public geometry : BufferGeometry;

    public material : SpriteMaterial;

    public raycast(raycaster : Raycaster, intersects : any);

    public constructor();
}

declare class VertexNormalsHelper extends LineSegments {
    public constructor(object : Object3D, size : number, hex : number, linewidth : number);

    public object : Object3D;

    public size : number;

    public update(object : Object3D);

    public constructor(object : Object3D, size : number, hex : number);

    public constructor(object : Object3D, size : number);

    public constructor(object : Object3D);

    public update();

    constructor();
}

/**
 * @param {number} fov Camera frustum vertical field of view. Default value is 50.
 * @param {number} aspect Camera frustum aspect ratio. Default value is 1.
 * @param {number} near Camera frustum near plane. Default value is 0.1.
 * @param {number} far Camera frustum far plane. Default value is 2000.
 * @class
 * @extends Camera
 */
declare class PerspectiveCamera extends Camera {
    public constructor(fov : number, aspect : number, near : number, far : number);

    public zoom : number;

    /**
     * Camera frustum vertical field of view, from bottom to top of view, in degrees.
     */
    public fov : number;

    /**
     * Camera frustum aspect ratio, window width divided by window height.
     */
    public aspect : number;

    /**
     * Camera frustum near plane.
     */
    public near : number;

    /**
     * Camera frustum far plane.
     */
    public far : number;

    public focus : number;

    public view : any;

    public filmGauge : number;

    public filmOffset : number;

    public setFocalLength(focalLength : number);

    public getFocalLength() : number;

    public getEffectiveFOV() : number;

    public getFilmWidth() : number;

    public getFilmHeight() : number;

    /**
     * Sets an offset in a larger frustum. This is useful for multi-window or multi-monitor/multi-machine setups.
     * For example, if you have 3x2 monitors and each monitor is 1920x1080 and the monitors are in grid like this:
     * 
     * +---+---+---+
     * | A | B | C |
     * +---+---+---+
     * | D | E | F |
     * +---+---+---+
     * 
     * then for each monitor you would call it like this:
     * 
     * var w = 1920;
     * var h = 1080;
     * var fullWidth = w * 3;
     * var fullHeight = h * 2;
     * 
     * // A
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
     * // B
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
     * // C
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
     * // D
     * camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
     * // E
     * camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
     * // F
     * camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h ); Note there is no reason monitors have to be the same size or in a grid.
     * 
     * @param {number} fullWidth full width of multiview setup
     * @param {number} fullHeight full height of multiview setup
     * @param {number} x horizontal offset of subcamera
     * @param {number} y vertical offset of subcamera
     * @param {number} width width of subcamera
     * @param {number} height height of subcamera
     */
    public setViewOffset(fullWidth : number, fullHeight : number, x : number, y : number, width : number, height : number);

    public clearViewOffset();

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    public updateProjectionMatrix();

    public toJSON(meta : any) : any;

    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength} and {@link PerspectiveCamera#filmGauge} instead.
     * @param {number} focalLength
     * @param {number} frameHeight
     */
    public setLens(focalLength : number, frameHeight : number);

    public constructor(fov : number, aspect : number, near : number);

    public constructor(fov : number, aspect : number);

    public constructor(fov : number);

    public constructor();

    public toJSON() : any;

    /**
     * @deprecated Use {@link PerspectiveCamera#setFocalLength} and {@link PerspectiveCamera#filmGauge} instead.
     * @param {number} focalLength
     */
    public setLens(focalLength : number);
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedBufferAttribute.js">src/core/InstancedBufferAttribute.js</a>
 * @param {*} data
 * @param {number} itemSize
 * @param {number} meshPerAttribute
 * @class
 * @extends BufferAttribute
 */
declare class InstancedBufferAttribute extends BufferAttribute {
    public constructor(data : ArrayLike<number>, itemSize : number, meshPerAttribute : number);

    public meshPerAttribute : number;

    public constructor(data : ArrayLike<number>, itemSize : number);

    public constructor(data : number[], itemSize : number, meshPerAttribute : number);

    public constructor(data : number[], itemSize : number);

    constructor();
}

declare enum PixelType {
  
}

declare class ShapeGeometry extends Geometry {
    public constructor(shape : Shape, options : any);

    public constructor(shapes : Shape[], options : any);

    public addShapeList(shapes : Shape[], options : any) : ShapeGeometry;

    public addShape(shape : Shape, options : any);

    public constructor(shape : Shape);

    public constructor(shapes : Shape[]);

    public addShape(shape : Shape);

    constructor();
}

declare class Mesh extends Object3D {
    public constructor(geometry : Geometry, material : Material);

    public geometry : ((Geometry)|(BufferGeometry));

    public material : ((Material)|(Material[]));

    public drawMode : TrianglesDrawModes;

    public morphTargetInfluences : number[];

    public morphTargetDictionary : any;

    public setDrawMode(drawMode : TrianglesDrawModes);

    public updateMorphTargets();

    public getMorphTargetIndexByName(name : string) : number;

    public raycast(raycaster : Raycaster, intersects : any);

    public constructor(geometry : Geometry);

    public constructor();

    public constructor(geometry : Geometry, material : Material[]);

    public constructor(geometry : BufferGeometry, material : Material[]);

    public constructor(geometry : BufferGeometry, material : Material);

    public constructor(geometry : BufferGeometry);
}

declare class PointLightShadow extends LightShadow {
    public camera : PerspectiveCamera;
}

declare class WebGLStencilBuffer {
    public constructor(gl : any, state : any);

    public setTest(stencilTest : boolean);

    public sertMask(stencilMask : number);

    public setFunc(stencilFunc : Function, stencilRef : any, stencilMask : number);

    public setOp(stencilFail : any, stencilZFail : any, stencilZPass : any);

    public setLocked(lock : boolean);

    public setClear(stencil : any);

    public reset();

    constructor();
}

declare class Cylindrical {
    public constructor(radius : number, theta : number, y : number);

    public radius : number;

    public theta : number;

    public y : number;

    public clone() : Cylindrical;

    public copy(other : Cylindrical) : Cylindrical;

    public set(radius : number, theta : number, y : number) : Cylindrical;

    public setFromVector3(vec3 : Vector3) : Cylindrical;

    public constructor(radius : number, theta : number);

    public constructor(radius : number);

    public constructor();
}

interface WebGLRendererParameters {
    /**
     * A Canvas where the renderer draws its output.
     */
    canvas? : HTMLCanvasElement;

    /**
     * shader precision. Can be "highp", "mediump" or "lowp".
     */
    precision? : string;

    /**
     * default is true.
     */
    alpha? : boolean;

    /**
     * default is true.
     */
    premultipliedAlpha? : boolean;

    /**
     * default is false.
     */
    antialias? : boolean;

    /**
     * default is true.
     */
    stencil? : boolean;

    /**
     * default is false.
     */
    preserveDrawingBuffer? : boolean;

    /**
     * default is 0x000000.
     */
    clearColor? : number;

    /**
     * default is 0.
     */
    clearAlpha? : number;

    devicePixelRatio? : number;

    /**
     * default is false.
     */
    logarithmicDepthBuffer? : boolean;
}

declare enum Side {
  
}

declare class FontLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public load(url : string, onLoad : (p1: Font) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public parse(json : string) : Font;

    public constructor();

    public load(url : string, onLoad : (p1: Font) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: Font) => void);

    public load(url : string);
}

declare class BoxBufferGeometry extends BufferGeometry {
    public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number, depthSegments : number);

    public parameters : any;

    public constructor(width : number, height : number, depth : number, widthSegments : number, heightSegments : number);

    public constructor(width : number, height : number, depth : number, widthSegments : number);

    public constructor(width : number, height : number, depth : number);

    constructor();
}

declare class CircleGeometry extends Geometry {
    public constructor(radius : number, segments : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radius : number, segments : number, thetaStart : number);

    public constructor(radius : number, segments : number);

    public constructor(radius : number);

    public constructor();
}

declare class CompressedTexture extends Texture {
    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, anisotropy : number, encoding : TextureEncoding);

    public image : any;

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, anisotropy : number);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat, type : TextureDataType);

    public constructor(mipmaps : ImageData[], width : number, height : number, format : PixelFormat);

    public constructor(mipmaps : ImageData[], width : number, height : number);

    constructor();
}

declare class LineCurve3 extends Curve<Vector3> {
    public constructor(v1 : Vector3, v2 : Vector3);

    public v1 : Vector3;

    public v2 : Vector3;

    constructor();
}

declare class LineBasicMaterial extends Material {
    public constructor(parameters : LineBasicMaterialParameters);

    public color : Color;

    public linewidth : number;

    public linecap : string;

    public linejoin : string;

    public setValues(parameters : LineBasicMaterialParameters);

    public constructor();
}

/**
 * @deprecated Use {@link PointsMaterial} instead
 * @class
 * @extends PointsMaterial
 */
declare class ParticleBasicMaterial extends PointsMaterial {}

declare class LensFlare extends Object3D {
    public constructor(texture : Texture, size : number, distance : number, blending : Blending, color : Color);

    public lensFlares : LensFlareProperty[];

    public positionScreen : Vector3;

    public customUpdateCallback : (p1: LensFlare) => void;

    public add(object : Object3D);

    public add(texture : Texture, size : number, distance : number, blending : Blending, color : Color);

    public updateLensFlares();

    public constructor(texture : Texture, size : number, distance : number, blending : Blending);

    public constructor(texture : Texture, size : number, distance : number);

    public constructor(texture : Texture, size : number);

    public constructor(texture : Texture);

    public constructor();

    public add(texture : Texture, size : number, distance : number, blending : Blending);

    public add(texture : Texture, size : number, distance : number);

    public add(texture : Texture, size : number);

    public add(texture : Texture);
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class UniformsUtils {
    constructor();

    public static merge(uniforms : any[]) : any;

    public static clone(uniforms_src : any) : any;
}

declare class DirectionalLightShadow extends LightShadow {
    public camera : OrthographicCamera;
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class ShapeUtils {
    constructor();

    public static area(contour : number[]) : number;

    public static triangulate(contour : number[], indices : boolean) : number[];

    public static triangulateShape(contour : number[], holes : any[]) : number[];

    public static isClockWise(pts : number[]) : boolean;
}

/**
 * This creates a Ambientlight with a color.
 * @param {Color} color Numeric value of the RGB component of the color or a Color instance.
 * @param {number} intensity
 * @class
 * @extends Light
 */
declare class AmbientLight extends Light {
    public constructor(color : Color, intensity : number);

    public castShadow : boolean;

    public constructor(color : Color);

    public constructor();

    public constructor(color : number, intensity : number);

    public constructor(color : string, intensity : number);

    public constructor(color : number);

    public constructor(color : string);
}

/**
 * @deprecated Use {@link PointsMaterial} instead
 * @class
 * @extends PointsMaterial
 */
declare class PointCloudMaterial extends PointsMaterial {}

declare enum ToneMapping {
  
}

declare class CircleBufferGeometry extends BufferGeometry {
    public constructor(radius : number, segments : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radius : number, segments : number, thetaStart : number);

    public constructor(radius : number, segments : number);

    public constructor(radius : number);

    public constructor();
}

declare class OrthographicTrackballControls extends EventDispatcher {
    public constructor(object : Camera, domElement : HTMLElement);

    public object : Camera;

    public domElement : HTMLElement;

    public enabled : boolean;

    public screen : any;

    public radius : number;

    public rotateSpeed : number;

    public zoomSpeed : number;

    public panSpeed : number;

    public noRotate : boolean;

    public noZoom : boolean;

    public noPan : boolean;

    public noRoll : boolean;

    public staticMoving : boolean;

    public dynamicDampingFactor : number;

    public keys : any;

    public target : Vector3;

    public position0 : Vector3;

    public target0 : Vector3;

    public up0 : Vector3;

    public left0 : number;

    public right0 : number;

    public top0 : number;

    public bottom0 : number;

    public update();

    public reset();

    public checkDistances();

    public zoomCamera();

    public panCamera();

    public rotateCamera();

    public handleResize();

    public handleEvent(event : any);

    public constructor(object : Camera);

    constructor();
}

/**
 * @deprecated THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Int32Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

interface MeshLambertMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    emissive? : ((Color)|(string)|(number));

    emissiveIntensity? : number;

    emissiveMap? : Texture;

    map? : Texture;

    lightMap? : Texture;

    lightMapIntensity? : number;

    aoMap? : Texture;

    aoMapIntensity? : number;

    specularMap? : Texture;

    alphaMap? : Texture;

    envMap? : Texture;

    combine? : Combine;

    reflectivity? : number;

    refractionRatio? : number;

    wireframe? : boolean;

    wireframeLinewidth? : number;

    wireframeLinecap? : string;

    wireframeLinejoin? : string;

    skinning? : boolean;

    morphTargets? : boolean;

    morphNormals? : boolean;
}

/**
 * @deprecated
 * @param {string} type
 * @param {*} value
 * @class
 * @extends Object
 */
declare class Uniform {
    public constructor(value : any);

    public constructor(type : string, value : any);

    /**
     * @deprecated
     */
    public type : string;

    public value : any;

    /**
     * @deprecated Use {@link Object3D#onBeforeRender} instead.
     */
    public dynamic : boolean;

    public onUpdateCallback : any;

    /**
     * @deprecated Use {@link Object3D#onBeforeRender} instead.
     * @param {Function} callback
     * @return {Uniform}
     */
    public onUpdate(callback : Function) : Uniform;

    constructor();
}

declare class VREffect {
    public constructor(renderer : Renderer, callback : (p1: string) => void);

    public render(scene : Scene, camera : Camera);

    public setSize(width : number, height : number);

    public setFullScreen(flag : boolean);

    public startFullscreen();

    public FovToNDCScaleOffset(fov : VRFov) : VREffectOffset;

    public FovPortToProjection(fov : VRFov, rightHanded : boolean, zNear : number, zFar : number) : Matrix4;

    public FovToProjection(fov : VRFov, rightHanded : boolean, zNear : number, zFar : number) : Matrix4;

    public constructor(renderer : Renderer);

    constructor();
}

declare class WebGLDepthBuffer {
    public constructor(gl : any, state : any);

    public setTest(depthTest : boolean);

    public sertMask(depthMask : number);

    public setFunc(depthFunc : Function);

    public setLocked(lock : boolean);

    public setClear(depth : any);

    public reset();

    constructor();
}

declare class SpritePlugin {
    public constructor(renderer : WebGLRenderer, sprites : any[]);

    public render(scene : Scene, camera : Camera, viewportWidth : number, viewportHeight : number);

    constructor();
}

declare class ConeBufferGeometry extends BufferGeometry {
    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number, thetaLength : number);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean, thetaStart : number);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number, openEnded : boolean);

    public constructor(radius : number, height : number, radialSegment : number, heightSegment : number);

    public constructor(radius : number, height : number, radialSegment : number);

    public constructor(radius : number, height : number);

    public constructor(radius : number);

    public constructor();
}

declare class AnimationClip {
    public constructor(name : string, duration : number, tracks : KeyframeTrack[]);

    public name : string;

    public tracks : KeyframeTrack[];

    public duration : number;

    public uuid : string;

    public results : any[];

    public resetDuration();

    public trim() : AnimationClip;

    public optimize() : AnimationClip;

    public static CreateFromMorphTargetSequence(name : string, morphTargetSequence : MorphTarget[], fps : number, noLoop : boolean) : AnimationClip;

    public static findByName(clipArray : AnimationClip[], name : string) : AnimationClip;

    public static CreateClipsFromMorphTargetSequences(morphTargets : MorphTarget[], fps : number, noLoop : boolean) : AnimationClip[];

    public static parse(json : any) : AnimationClip;

    public static parseAnimation(animation : any, bones : Bone[], nodeName : string) : AnimationClip;

    public static toJSON() : any;

    public constructor(name : string, duration : number);

    public constructor(name : string);

    public constructor();
}

declare class EllipseCurve extends Curve<Vector2> {
    public constructor(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

    public aX : number;

    public aY : number;

    public xRadius : number;

    public yRadius : number;

    public aStartAngle : number;

    public aEndAngle : number;

    public aClockwise : boolean;

    public aRotation : number;

    constructor();
}

interface IFog {
    name : string;

    color : Color;

    clone() : IFog;

    toJSON() : any;
}

/**
 * a 2d path representation, comprising of points, lines, and cubes, similar to the html5 2d canvas api. It extends CurvePath.
 * @param {Array} points
 * @class
 * @extends CurvePath
 */
declare class Path extends CurvePath<Vector2> {
    public constructor(points : Vector2[]);

    public currentPoint : Vector2;

    /**
     * @deprecated Use {@link Path#setFromPoints} instead.
     * @param {Array} vectors
     */
    public fromPoints(vectors : Vector2[]);

    public setFromPoints(vectors : Vector2[]);

    public moveTo(x : number, y : number);

    public lineTo(x : number, y : number);

    public quadraticCurveTo(aCPx : number, aCPy : number, aX : number, aY : number);

    public bezierCurveTo(aCP1x : number, aCP1y : number, aCP2x : number, aCP2y : number, aX : number, aY : number);

    public splineThru(pts : Vector2[]);

    public arc(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

    public absarc(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

    public ellipse(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

    public absellipse(aX : number, aY : number, xRadius : number, yRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean, aRotation : number);

    public constructor();
}

declare class CubicBezierCurve3 extends Curve<Vector3> {
    public constructor(v0 : Vector3, v1 : Vector3, v2 : Vector3, v3 : Vector3);

    public v0 : Vector3;

    public v1 : Vector3;

    public v2 : Vector3;

    public v3 : Vector3;

    constructor();
}

declare class MeshLambertMaterial extends Material {
    public constructor(parameters : MeshLambertMaterialParameters);

    public color : Color;

    public emissive : Color;

    public emissiveIntensity : number;

    public emissiveMap : Texture;

    public map : Texture;

    public lightMap : Texture;

    public lightMapIntensity : number;

    public aoMap : Texture;

    public aoMapIntensity : number;

    public specularMap : Texture;

    public alphaMap : Texture;

    public envMap : Texture;

    public combine : Combine;

    public reflectivity : number;

    public refractionRatio : number;

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public wireframeLinecap : string;

    public wireframeLinejoin : string;

    public skinning : boolean;

    public morphTargets : boolean;

    public morphNormals : boolean;

    public setValues(parameters : MeshLambertMaterialParameters);

    public constructor();
}

interface LoaderHandler {
    handlers : ((RegExp)|(AnyLoader))[];

    add(regex : RegExp, loader : AnyLoader);

    get(file : string) : AnyLoader;
}

declare class DataTexture extends Texture {
    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, anisotropy : number, encoding : TextureEncoding);

    public image : ImageData;

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, anisotropy : number);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping, wrapS : Wrapping);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType, mapping : Mapping);

    public constructor(data : any, width : number, height : number, format : PixelFormat, type : TextureDataType);

    public constructor(data : any, width : number, height : number, format : PixelFormat);

    public constructor(data : any, width : number, height : number);

    constructor();
}

declare enum PathActions {
    MOVE_TO, LINE_TO, QUADRATIC_CURVE_TO, BEZIER_CURVE_TO, CSPLINE_THRU, ARC, ELLIPSE
}

/**
 * This constructor sets following properties to the correct type: matrixWorldInverse, projectionMatrix and projectionMatrixInverse.
 * @class
 * @extends Object3D
 */
declare class Camera extends Object3D {
    public constructor();

    /**
     * This is the inverse of matrixWorld. MatrixWorld contains the Matrix which has the world transform of the Camera.
     */
    public matrixWorldInverse : Matrix4;

    /**
     * This is the matrix which contains the projection.
     */
    public projectionMatrix : Matrix4;

    public getWorldDirection(optionalTarget : Vector3) : Vector3;

    public getWorldDirection() : Vector3;
}

declare class PropertyBinding {
    public constructor(rootNode : any, path : string, parsedPath : any);

    public path : string;

    public parsedPath : any;

    public node : any;

    public rootNode : any;

    public getValue(targetArray : any, offset : number) : any;

    public setValue(sourceArray : any, offset : number);

    public bind();

    public unbind();

    public BindingType : any;

    public Versioning : any;

    public GetterByBindingType : Function[];

    public SetterByBindingTypeAndVersioning : Array<Function[]>;

    public static create(root : any, path : any, parsedPath : any) : ((PropertyBinding)|(PropertyBinding.Composite));

    public static parseTrackName(trackName : string) : any;

    public static findNode(root : any, nodeName : string) : any;

    public constructor(rootNode : any, path : string);

    public static create(root : any, path : any) : ((PropertyBinding)|(PropertyBinding.Composite));

    constructor();
}

/**
 * This is an automatically generated object type (see the source definition).
 * @class
 * @extends Object
 */
declare class ShaderChunk {
    public static $getStatic(name : string) : string;

    public static alphamap_fragment : string;

    public static alphamap_pars_fragment : string;

    public static alphatest_fragment : string;

    public static aomap_fragment : string;

    public static aomap_pars_fragment : string;

    public static begin_vertex : string;

    public static beginnormal_vertex : string;

    public static bsdfs : string;

    public static bumpmap_pars_fragment : string;

    public static clipping_planes_fragment : string;

    public static clipping_planes_pars_fragment : string;

    public static clipping_planes_pars_vertex : string;

    public static clipping_planes_vertex : string;

    public static color_fragment : string;

    public static color_pars_fragment : string;

    public static color_pars_vertex : string;

    public static color_vertex : string;

    public static common : string;

    public static cube_frag : string;

    public static cube_vert : string;

    public static cube_uv_reflection_fragment : string;

    public static defaultnormal_vertex : string;

    public static depth_frag : string;

    public static depth_vert : string;

    public static distanceRGBA_frag : string;

    public static distanceRGBA_vert : string;

    public static displacementmap_vertex : string;

    public static displacementmap_pars_vertex : string;

    public static emissivemap_fragment : string;

    public static emissivemap_pars_fragment : string;

    public static encodings_pars_fragment : string;

    public static encodings_fragment : string;

    public static envmap_fragment : string;

    public static envmap_pars_fragment : string;

    public static envmap_pars_vertex : string;

    public static envmap_vertex : string;

    public static equirect_frag : string;

    public static equirect_vert : string;

    public static fog_fragment : string;

    public static fog_pars_fragment : string;

    public static linedashed_frag : string;

    public static linedashed_vert : string;

    public static lightmap_fragment : string;

    public static lightmap_pars_fragment : string;

    public static lights_lambert_vertex : string;

    public static lights_pars : string;

    public static lights_phong_fragment : string;

    public static lights_phong_pars_fragment : string;

    public static lights_physical_fragment : string;

    public static lights_physical_pars_fragment : string;

    public static lights_template : string;

    public static logdepthbuf_fragment : string;

    public static logdepthbuf_pars_fragment : string;

    public static logdepthbuf_pars_vertex : string;

    public static logdepthbuf_vertex : string;

    public static map_fragment : string;

    public static map_pars_fragment : string;

    public static map_particle_fragment : string;

    public static map_particle_pars_fragment : string;

    public static meshbasic_frag : string;

    public static meshbasic_vert : string;

    public static meshlambert_frag : string;

    public static meshlambert_vert : string;

    public static meshphong_frag : string;

    public static meshphong_vert : string;

    public static meshphysical_frag : string;

    public static meshphysical_vert : string;

    public static metalnessmap_fragment : string;

    public static metalnessmap_pars_fragment : string;

    public static morphnormal_vertex : string;

    public static morphtarget_pars_vertex : string;

    public static morphtarget_vertex : string;

    public static normal_flip : string;

    public static normal_frag : string;

    public static normal_fragment : string;

    public static normal_vert : string;

    public static normalmap_pars_fragment : string;

    public static packing : string;

    public static points_frag : string;

    public static points_vert : string;

    public static shadow_frag : string;

    public static shadow_vert : string;

    public static premultiplied_alpha_fragment : string;

    public static project_vertex : string;

    public static roughnessmap_fragment : string;

    public static roughnessmap_pars_fragment : string;

    public static shadowmap_pars_fragment : string;

    public static shadowmap_pars_vertex : string;

    public static shadowmap_vertex : string;

    public static shadowmask_pars_fragment : string;

    public static skinbase_vertex : string;

    public static skinning_pars_vertex : string;

    public static skinning_vertex : string;

    public static skinnormal_vertex : string;

    public static specularmap_fragment : string;

    public static specularmap_pars_fragment : string;

    public static tonemapping_fragment : string;

    public static tonemapping_pars_fragment : string;

    public static uv2_pars_fragment : string;

    public static uv2_pars_vertex : string;

    public static uv2_vertex : string;

    public static uv_pars_fragment : string;

    public static uv_pars_vertex : string;

    public static uv_vertex : string;

    public static worldpos_vertex : string;
}

declare class PolyhedronGeometry extends Geometry {
    public constructor(vertices : number[], indices : number[], radius : number, detail : number);

    public parameters : any;

    public boundingSphere : Sphere;

    public constructor(vertices : number[], indices : number[], radius : number);

    public constructor(vertices : number[], indices : number[]);

    constructor();
}

declare class Layers {
    public constructor();

    public mask : number;

    public set(channel : number);

    public enable(channel : number);

    public toggle(channel : number);

    public disable(channel : number);

    public test(layers : Layers) : boolean;
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class GeometryUtils {
    constructor();

    /**
     * @deprecated Use {@link Geometry#merge} instead.
     * @param {*} geometry1
     * @param {*} geometry2
     * @param {*} materialIndexOffset
     * @return {*}
     */
    public static merge(geometry1 : any, geometry2 : any, materialIndexOffset : any) : any;

    /**
     * @deprecated Use {@link Geometry#center} instead.
     * @param {*} geometry
     * @return {*}
     */
    public static center(geometry : any) : any;

    /**
     * @deprecated Use {@link Geometry#merge} instead.
     * @param {*} geometry1
     * @param {*} geometry2
     * @return {*}
     */
    public static merge(geometry1 : any, geometry2 : any) : any;
}

declare class KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    public name : string;

    public times : any[];

    public values : any[];

    public ValueTypeName : string;

    public TimeBufferType : Float32Array;

    public ValueBufferType : Float32Array;

    public DefaultInterpolation : InterpolationModes;

    public InterpolantFactoryMethodDiscrete(result : any) : DiscreteInterpolant;

    public InterpolantFactoryMethodLinear(result : any) : LinearInterpolant;

    public InterpolantFactoryMethodSmooth(result : any) : CubicInterpolant;

    public setInterpolation(interpolation : InterpolationModes);

    public getInterpolation() : InterpolationModes;

    public getValuesize() : number;

    public shift(timeOffset : number) : KeyframeTrack;

    public scale(timeScale : number) : KeyframeTrack;

    public trim(startTime : number, endTime : number) : KeyframeTrack;

    public validate() : boolean;

    public optimize() : KeyframeTrack;

    public static parse(json : any) : KeyframeTrack;

    public static toJSON(track : KeyframeTrack) : any;

    constructor();
}

declare class MeshBasicMaterial extends Material {
    public constructor(parameters : MeshBasicMaterialParameters);

    public color : Color;

    public map : Texture;

    public aoMap : Texture;

    public aoMapIntensity : number;

    public specularMap : Texture;

    public alphaMap : Texture;

    public envMap : Texture;

    public combine : Combine;

    public reflectivity : number;

    public refractionRatio : number;

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public wireframeLinecap : string;

    public wireframeLinejoin : string;

    public skinning : boolean;

    public morphTargets : boolean;

    public setValues(parameters : MeshBasicMaterialParameters);

    public constructor();
}

declare class ColladaLoader {
    public constructor();

    public load(url : string, onLoad : (p1: ColladaModel) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public setCrossOrigin(value : any);

    public parse(text : string) : ColladaModel;

    public load(url : string, onLoad : (p1: ColladaModel) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: ColladaModel) => void);
}

/**
 * @deprecated THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.
 * @param {*} array
 * @param {number} itemSize
 * @class
 * @extends BufferAttribute
 */
declare class Uint32Attribute extends BufferAttribute {
    public constructor(array : any, itemSize : number);

    constructor();
}

interface Shader {
    uniforms : any;

    vertexShader : string;

    fragmentShader : string;
}

/**
 * A point light that can cast shadow in one direction.
 * @param {Color} color
 * @param {number} intensity
 * @param {number} distance
 * @param {number} angle
 * @param {number} exponent
 * @param {number} decay
 * @class
 * @extends Light
 */
declare class SpotLight extends Light {
    public constructor(color : Color, intensity : number, distance : number, angle : number, exponent : number, decay : number);

    /**
     * Spotlight focus points at target.position.
     * Default position — (0,0,0).
     */
    public target : Object3D;

    /**
     * Light's intensity.
     * Default — 1.0.
     */
    public intensity : number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * Default — 0.0.
     */
    public distance : number;

    public angle : number;

    /**
     * Rapidity of the falloff of light from its target direction.
     * Default — 10.0.
     */
    public exponent : number;

    public decay : number;

    public shadow : SpotLightShadow;

    public power : number;

    public penumbra : number;

    public constructor(color : Color, intensity : number, distance : number, angle : number, exponent : number);

    public constructor(color : Color, intensity : number, distance : number, angle : number);

    public constructor(color : Color, intensity : number, distance : number);

    public constructor(color : Color, intensity : number);

    public constructor(color : Color);

    public constructor();

    public constructor(color : number, intensity : number, distance : number, angle : number, exponent : number, decay : number);

    public constructor(color : string, intensity : number, distance : number, angle : number, exponent : number, decay : number);

    public constructor(color : number, intensity : number, distance : number, angle : number, exponent : number);

    public constructor(color : string, intensity : number, distance : number, angle : number, exponent : number);

    public constructor(color : string, intensity : number, distance : number, angle : number);

    public constructor(color : number, intensity : number, distance : number, angle : number);

    public constructor(color : number, intensity : number, distance : number);

    public constructor(color : string, intensity : number, distance : number);

    public constructor(color : number, intensity : number);

    public constructor(color : string, intensity : number);

    public constructor(color : number);

    public constructor(color : string);
}

interface MeshStandardMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    roughness? : number;

    metalness? : number;

    map? : Texture;

    lightMap? : Texture;

    lightMapIntensity? : number;

    aoMap? : Texture;

    aoMapIntensity? : number;

    emissive? : ((Color)|(string)|(number));

    emissiveIntensity? : number;

    emissiveMap? : Texture;

    bumpMap? : Texture;

    bumpScale? : number;

    normalMap? : Texture;

    normalScale? : Vector2;

    displacementMap? : Texture;

    displacementScale? : number;

    displacementBias? : number;

    roughnessMap? : Texture;

    metalnessMap? : Texture;

    alphaMap? : Texture;

    envMap? : Texture;

    envMapIntensity? : number;

    refractionRatio? : number;

    wireframe? : boolean;

    wireframeLinewidth? : number;

    skinning? : boolean;

    morphTargets? : boolean;

    morphNormals? : boolean;
}

declare class Box3 {
    public constructor(min : Vector3, max : Vector3);

    public max : Vector3;

    public min : Vector3;

    public set(min : Vector3, max : Vector3) : Box3;

    public setFromArray(array : ArrayLike<number>) : Box3;

    public setFromPoints(points : Vector3[]) : Box3;

    public setFromCenterAndSize(center : Vector3, size : Vector3) : Box3;

    public setFromObject(object : Object3D) : Box3;

    public clone() : Box3;

    public copy(box : Box3) : Box3;

    public makeEmpty() : Box3;

    public isEmpty() : boolean;

    public getCenter(optionalTarget : Vector3) : Vector3;

    public getSize(optionalTarget : Vector3) : Vector3;

    public expandByPoint(point : Vector3) : Box3;

    public expandByVector(vector : Vector3) : Box3;

    public expandByScalar(scalar : number) : Box3;

    public expandByObject(object : Object3D) : Box3;

    public containsPoint(point : Vector3) : boolean;

    public containsBox(box : Box3) : boolean;

    public getParameter(point : Vector3) : Vector3;

    public intersectsBox(box : Box3) : boolean;

    public intersectsSphere(sphere : Sphere) : boolean;

    public intersectsPlane(plane : Plane) : boolean;

    public clampPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public distanceToPoint(point : Vector3) : number;

    public getBoundingSphere(optionalTarget : Sphere) : Sphere;

    public intersect(box : Box3) : Box3;

    public union(box : Box3) : Box3;

    public applyMatrix4(matrix : Matrix4) : Box3;

    public translate(offset : Vector3) : Box3;

    public equals(box : Box3) : boolean;

    /**
     * @deprecated Use {@link Box3#isEmpty} instead.
     * @return {*}
     */
    public empty() : any;

    /**
     * @deprecated Use {@link Box3#intersectsBox} instead.
     * @param {*} b
     * @return {*}
     */
    public isIntersectionBox(b : any) : any;

    /**
     * @deprecated Use {@link Box3#intersectsSphere} instead.
     * @param {*} s
     * @return {*}
     */
    public isIntersectionSphere(s : any) : any;

    public constructor(min : Vector3);

    public constructor();

    public getCenter() : Vector3;

    public getSize() : Vector3;

    public clampPoint(point : Vector3) : Vector3;

    public getBoundingSphere() : Sphere;

    public setFromArray(array : number[]) : Box3;
}

declare class FBXLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public load(url : string, onLoad : (p1: Group) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public parse(FBXText : string, resourceDirectory : string) : Group;

    public constructor();

    public load(url : string, onLoad : (p1: Group) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: Group) => void);
}

declare class AudioBuffer {
    public constructor(context : any);

    public context : any;

    public ready : boolean;

    public readyCallbacks : Function[];

    public load(file : string) : AudioBuffer;

    public onReady(callback : Function);

    constructor();
}

declare class Spherical {
    public constructor(radius : number, phi : number, theta : number);

    public radius : number;

    public phi : number;

    public theta : number;

    public set(radius : number, phi : number, theta : number) : Spherical;

    public clone() : Spherical;

    public copy(other : Spherical) : Spherical;

    public makeSafe();

    public setFromVector3(vec3 : Vector3) : Spherical;

    public constructor(radius : number, phi : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * Abstract base class for lights.
 * @param {number} hex
 * @param {number} intensity
 * @class
 * @extends Object3D
 */
declare class Light extends Object3D {
    public constructor(hex : number, intensity : number);

    public color : Color;

    public intensity : number;

    public receiveShadow : boolean;

    public shadow : LightShadow;

    /**
     * @deprecated Use shadow.camera.fov instead.
     */
    public shadowCameraFov : any;

    /**
     * @deprecated Use shadow.camera.left instead.
     */
    public shadowCameraLeft : any;

    /**
     * @deprecated Use shadow.camera.right instead.
     */
    public shadowCameraRight : any;

    /**
     * @deprecated Use shadow.camera.top instead.
     */
    public shadowCameraTop : any;

    /**
     * @deprecated Use shadow.camera.bottom instead.
     */
    public shadowCameraBottom : any;

    /**
     * @deprecated Use shadow.camera.near instead.
     */
    public shadowCameraNear : any;

    /**
     * @deprecated Use shadow.camera.far instead.
     */
    public shadowCameraFar : any;

    /**
     * @deprecated Use shadow.bias instead.
     */
    public shadowBias : any;

    /**
     * @deprecated Use shadow.mapSize.width instead.
     */
    public shadowMapWidth : any;

    /**
     * @deprecated Use shadow.mapSize.height instead.
     */
    public shadowMapHeight : any;

    public constructor(hex : number);

    public constructor();

    public constructor(hex : string, intensity : number);

    public constructor(hex : string);
}

/**
 * @deprecated Use {@link BoxHelper} instead.
 * @param {Object3D} object
 * @param {number} hex
 * @class
 * @extends Mesh
 */
declare class BoundingBoxHelper extends Mesh {
    public constructor(object : Object3D, hex : number);

    public object : Object3D;

    public box : Box3;

    public update();

    public constructor(object : Object3D);

    public constructor();
}

declare class MeshStandardMaterial extends Material {
    public constructor(parameters : MeshStandardMaterialParameters);

    public defines : any;

    public color : Color;

    public roughness : number;

    public metalness : number;

    public map : Texture;

    public lightMap : Texture;

    public lightMapIntensity : number;

    public aoMap : Texture;

    public aoMapIntensity : number;

    public emissive : Color;

    public emissiveIntensity : number;

    public emissiveMap : Texture;

    public bumpMap : Texture;

    public bumpScale : number;

    public normalMap : Texture;

    public normalScale : number;

    public displacementMap : Texture;

    public displacementScale : number;

    public displacementBias : number;

    public roughnessMap : Texture;

    public metalnessMap : Texture;

    public alphaMap : Texture;

    public envMap : Texture;

    public envMapIntensity : number;

    public refractionRatio : number;

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public skinning : boolean;

    public morphTargets : boolean;

    public morphNormals : boolean;

    public setValues(parameters : MeshStandardMaterialParameters);

    public constructor();
}

interface SpriteMaterialParameters extends MaterialParameters {
    color? : ((Color)|(string)|(number));

    map? : Texture;

    rotation? : number;
}

declare class LineCurve extends Curve<Vector2> {
    public constructor(v1 : Vector2, v2 : Vector2);

    public v1 : Vector2;

    public v2 : Vector2;

    constructor();
}

declare class WebGLRenderLists {
    public dispose();

    /**
     * 
     * returns {<String> : <WebGLRenderList>}
     * @param {Scene} scene
     * @param {Camera} camera
     * @return {WebGLRenderList}
     */
    public get(scene : Scene, camera : Camera) : WebGLRenderList;
}

declare class OctahedronGeometry extends PolyhedronGeometry {
    public constructor(radius : number, detail : number);

    public constructor(radius : number);

    public constructor();
}

declare class CameraHelper extends LineSegments {
    public constructor(camera : Camera);

    public camera : Camera;

    public pointMap : any;

    public update();

    constructor();
}

declare class WebGLTextures {
    public constructor(gl : any, extensions : any, state : any, properties : any, capabilities : any, paramThreeToGL : Function, info : any);

    public setTexture2D(texture : any, slot : number);

    public setTextureCube(texture : any, slot : number);

    public setTextureCubeDynamic(texture : any, slot : number);

    public setupRenderTarget(renderTarget : any);

    public updateRenderTargetMipmap(renderTarget : any);

    constructor();
}

declare enum PixelFormat {
  
}

declare class Int8BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

declare class CTMLoader extends Loader {
    public constructor();

    /**
     * load multiple CTM parts defined in JSON.
     * @param {string} url(required)
     * @param {*} callback(required)
     * @param {*} parameters
     * @return {*}
     */
    public loadParts(url : string, callback : () => any, parameters : any) : any;

    /**
     * Load CTMLoader compressed models
     * @param {string} url(required)
     * @param {*} callback(required)
     * @param {*} parameters
     * @return {*}
     */
    public load(url : string, callback : (p1: any) => any, parameters : any) : any;

    /**
     * create buffergeometry by ctm file.
     * @param {string} file(required)
     * @param {*} callback(required)
     * @return {*}
     */
    public createModel(file : string, callback : () => any) : any;

    /**
     * load multiple CTM parts defined in JSON.
     * @param {string} url(required)
     * @param {*} callback(required)
     * @param parameters
     * @return {*}
     */
    public loadParts(url : string, callback : () => any) : any;

    /**
     * Load CTMLoader compressed models
     * @param {string} url(required)
     * @param {*} callback(required)
     * @param parameters
     * @return {*}
     */
    public load(url : string, callback : (p1: any) => any) : any;
}

declare class RingGeometry extends Geometry {
    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number, thetaStart : number);

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number, phiSegments : number);

    public constructor(innerRadius : number, outerRadius : number, thetaSegments : number);

    public constructor(innerRadius : number, outerRadius : number);

    public constructor(innerRadius : number);

    public constructor();
}

declare class Audio {
    public constructor(listener : AudioListener);

    public type : string;

    public context : AudioContext;

    public source : AudioBufferSourceNode;

    public gain : GainNode;

    public autoplay : boolean;

    public startTime : number;

    public playbackRate : number;

    public hasPlaybackControl : boolean;

    public isPlaying : boolean;

    public sourceType : string;

    public filters : any[];

    public getOutput() : GainNode;

    public setNodeSource(audioNode : AudioBufferSourceNode) : Audio;

    public setBuffer(audioBuffer : AudioBuffer) : Audio;

    public play() : Audio;

    public pause() : Audio;

    public stop() : Audio;

    public connect() : Audio;

    public disconnect() : Audio;

    public getFilters() : any[];

    public setFilter(value : any[]) : Audio;

    public getFilter() : any;

    public setFilter(filter : any) : Audio;

    public setPlaybackRate(value : number) : Audio;

    public getPlaybackRate() : number;

    public onEnded();

    public getLoop() : boolean;

    public setLoop(value : boolean);

    public getVolume() : number;

    public setVolume(value : number) : Audio;

    /**
     * @deprecated Use {@link AudioLoader} instead.
     * @param {string} file
     * @return {Audio}
     */
    public load(file : string) : Audio;

    constructor();
}

declare enum Blending {
  
}

/**
 * Handles and keeps track of loaded and pending data.
 * @param {() => void} onLoad
 * @param {*} onProgress
 * @param {() => void} onError
 * @class
 * @extends Object
 */
declare class LoadingManager {
    public constructor(onLoad : () => void, onProgress : (p1: string, p2: number, p3: number) => void, onError : () => void);

    public onStart : () => void;

    /**
     * Will be called when load starts.
     * The default is a function with empty body.
     */
    public onLoad : () => void;

    /**
     * Will be called while load progresses.
     * The default is a function with empty body.
     */
    public onProgress : (p1: any, p2: number, p3: number) => void;

    /**
     * Will be called when each element in the scene completes loading.
     * The default is a function with empty body.
     */
    public onError : () => void;

    public itemStart(url : string);

    public itemEnd(url : string);

    public itemError(url : string);

    public constructor(onLoad : () => void, onProgress : (p1: string, p2: number, p3: number) => void);

    public constructor(onLoad : () => void);

    public constructor();
}

declare namespace GeometryUtils {}
declare class CanvasTexture extends Texture {
    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(canvas : HTMLImageElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(canvas : HTMLImageElement, mapping : Mapping);

    public constructor(canvas : HTMLImageElement);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(canvas : HTMLCanvasElement, mapping : Mapping);

    public constructor(canvas : HTMLVideoElement, mapping : Mapping);

    public constructor(canvas : HTMLVideoElement);

    public constructor(canvas : HTMLCanvasElement);

    constructor();
}

declare class BooleanKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[]);

    constructor();
}

declare class LineDashedMaterial extends Material {
    public constructor(parameters : LineDashedMaterialParameters);

    public color : Color;

    public linewidth : number;

    public scale : number;

    public dashSize : number;

    public gapSize : number;

    public setValues(parameters : LineDashedMaterialParameters);

    public constructor();
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBufferAttribute.js">src/core/InterleavedBufferAttribute.js</a>
 * @param {InterleavedBuffer} interleavedBuffer
 * @param {number} itemSize
 * @param {number} offset
 * @param {boolean} normalized
 * @class
 * @extends Object
 */
declare class InterleavedBufferAttribute {
    public constructor(interleavedBuffer : InterleavedBuffer, itemSize : number, offset : number, normalized : boolean);

    public uuid : string;

    public data : InterleavedBuffer;

    public itemSize : number;

    public offset : number;

    public count : number;

    public normalized : boolean;

    public array : any[];

    public getX(index : number) : number;

    public setX(index : number, x : number) : InterleavedBufferAttribute;

    public getY(index : number) : number;

    public setY(index : number, y : number) : InterleavedBufferAttribute;

    public getZ(index : number) : number;

    public setZ(index : number, z : number) : InterleavedBufferAttribute;

    public getW(index : number) : number;

    public setW(index : number, z : number) : InterleavedBufferAttribute;

    public setXY(index : number, x : number, y : number) : InterleavedBufferAttribute;

    public setXYZ(index : number, x : number, y : number, z : number) : InterleavedBufferAttribute;

    public setXYZW(index : number, x : number, y : number, z : number, w : number) : InterleavedBufferAttribute;

    /**
     * @deprecated Use {@link InterleavedBufferAttribute#count} instead.
     */
    public length : number;

    public constructor(interleavedBuffer : InterleavedBuffer, itemSize : number, offset : number);

    constructor();
}

declare enum ShadowMapType {
  
}

/**
 * @deprecated Use {@link Sprite} instead.
 * @class
 * @extends Sprite
 */
declare class Particle extends Sprite {}

declare enum DepthPackingStrategies {
  
}

interface PathAction {
    action : PathActions;

    args : any;
}

declare class Euler {
    public constructor(x : number, y : number, z : number, order : string);

    public x : number;

    public y : number;

    public z : number;

    public order : string;

    public onChangeCallback : any;

    public set(x : number, y : number, z : number, order : string) : Euler;

    public clone() : Euler;

    public copy(euler : Euler) : Euler;

    public setFromRotationMatrix(m : Matrix4, order : string, update : boolean) : Euler;

    public setFromQuaternion(q : Quaternion, order : string, update : boolean) : Euler;

    public setFromVector3(v : Vector3, order : string) : Euler;

    public reorder(newOrder : string) : Euler;

    public equals(euler : Euler) : boolean;

    public fromArray(xyzo : any[]) : Euler;

    public toArray(array : number[], offset : number) : number[];

    public toVector3(optionalResult : Vector3) : Vector3;

    public onChange(callback : Function);

    public static RotationOrders : string[];

    public static DefaultOrder : string;

    public constructor(x : number, y : number, z : number);

    public constructor(x : number, y : number);

    public constructor(x : number);

    public constructor();

    public set(x : number, y : number, z : number) : Euler;

    public setFromRotationMatrix(m : Matrix4, order : string) : Euler;

    public setFromRotationMatrix(m : Matrix4) : Euler;

    public setFromQuaternion(q : Quaternion, order : string) : Euler;

    public setFromQuaternion(q : Quaternion) : Euler;

    public setFromVector3(v : Vector3) : Euler;

    public toArray(array : number[]) : number[];

    public toArray() : number[];

    public toVector3() : Vector3;
}

declare enum CompressedPixelFormat {
  
}

interface WebGLCapabilitiesParameters {
    precision? : any;

    logarithmicDepthBuffer? : any;
}

/**
 * 2D vector.
 * 
 * ( class Vector2 implements Vector<Vector2> )
 * @param {number} x
 * @param {number} y
 * @class
 * @extends *
 */
declare class Vector2 implements Vector {
    public constructor(x : number, y : number);

    public x : number;

    public y : number;

    public width : number;

    public height : number;

    /**
     * Sets value of this vector.
     * @param {number} x
     * @param {number} y
     * @return {Vector2}
     */
    public set(x : number, y : number) : Vector2;

    public setScalar(scalar : number) : Vector2;

    /**
     * Sets X component of this vector.
     * @param {number} x
     * @return {Vector2}
     */
    public setX(x : number) : Vector2;

    /**
     * Sets Y component of this vector.
     * @param {number} y
     * @return {Vector2}
     */
    public setY(y : number) : Vector2;

    /**
     * Sets a component of this vector.
     * @param {number} index
     * @param {number} value
     */
    public setComponent(index : number, value : number);

    /**
     * Gets a component of this vector.
     * @param {number} index
     * @return {number}
     */
    public getComponent(index : number) : number;

    /**
     * Clones this vector.
     * @return {Vector2}
     */
    public clone() : Vector2;

    /**
     * Copies value of v to this vector.
     * @param {Vector2} v
     * @return {Vector2}
     */
    public copy(v : Vector2) : Vector2;

    /**
     * Adds v to this vector.
     * @param {Vector2} v
     * @return {Vector2}
     */
    public add(v : Vector2) : Vector2;

    /**
     * Sets this vector to a + b.
     * @param {number} s
     * @return {Vector2}
     */
    public addScalar(s : number) : Vector2;

    public addVectors(a : Vector2, b : Vector2) : Vector2;

    public addScaledVector(v : Vector2, s : number) : Vector2;

    /**
     * Subtracts v from this vector.
     * @param {Vector2} v
     * @return {Vector2}
     */
    public sub(v : Vector2) : Vector2;

    /**
     * Sets this vector to a - b.
     * @param {Vector2} a
     * @param {Vector2} b
     * @return {Vector2}
     */
    public subVectors(a : Vector2, b : Vector2) : Vector2;

    public multiply(v : Vector2) : Vector2;

    /**
     * Multiplies this vector by scalar s.
     * @param {number} scalar
     * @return {Vector2}
     */
    public multiplyScalar(scalar : number) : Vector2;

    public divide(v : Vector2) : Vector2;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0 ) if s == 0.
     * @param {number} s
     * @return {Vector2}
     */
    public divideScalar(s : number) : Vector2;

    public min(v : Vector2) : Vector2;

    public max(v : Vector2) : Vector2;

    public clamp(min : Vector2, max : Vector2) : Vector2;

    public clampScalar(min : number, max : number) : Vector2;

    public clampLength(min : number, max : number) : Vector2;

    public floor() : Vector2;

    public ceil() : Vector2;

    public round() : Vector2;

    public roundToZero() : Vector2;

    /**
     * Inverts this vector.
     * @return {Vector2}
     */
    public negate() : Vector2;

    /**
     * Computes dot product of this vector and v.
     * @param {Vector2} v
     * @return {number}
     */
    public dot(v : Vector2) : number;

    /**
     * Computes squared length of this vector.
     * @return {number}
     */
    public lengthSq() : number;

    /**
     * Computes length of this vector.
     * @return {number}
     */
    public length() : number;

    /**
     * @deprecated Use {@link Vector2#manhattanLength} instead.
     * @return {number}
     */
    public lengthManhattan() : number;

    /**
     * Normalizes this vector.
     * @return {Vector2}
     */
    public normalize() : Vector2;

    /**
     * computes the angle in radians with respect to the positive x-axis
     * @return {number}
     */
    public angle() : number;

    /**
     * Computes distance of this vector to v.
     * @param {Vector2} v
     * @return {number}
     */
    public distanceTo(v : Vector2) : number;

    /**
     * Computes squared distance of this vector to v.
     * @param {Vector2} v
     * @return {number}
     */
    public distanceToSquared(v : Vector2) : number;

    /**
     * @deprecated Use {@link Vector2#manhattanDistanceTo} instead.
     * @param {Vector2} v
     * @return {number}
     */
    public distanceToManhattan(v : Vector2) : number;

    /**
     * Normalizes this vector and multiplies it by l.
     * @param {number} length
     * @return {Vector2}
     */
    public setLength(length : number) : Vector2;

    public lerp(v : Vector2, alpha : number) : Vector2;

    public lerpVectors(v1 : Vector2, v2 : Vector2, alpha : number) : Vector2;

    /**
     * Checks for strict equality of this vector and v.
     * @param {Vector2} v
     * @return {boolean}
     */
    public equals(v : Vector2) : boolean;

    public fromArray(xy : number[], offset : number) : Vector2;

    public toArray(xy : number[], offset : number) : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number, offset : number) : Vector2;

    public rotateAround(center : Vector2, angle : number) : Vector2;

    /**
     * Computes the Manhattan length of this vector.
     * 
     * @return {number} {number}
     * 
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    public manhattanLength() : number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     * 
     * @param {Vector2} v
     * 
     * @return {number} {number}
     * 
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     * @param {Vector2} v
     */
    public manhattanDistanceTo(v : Vector2) : number;

    public constructor(x : number);

    public constructor();

    public fromArray(xy : number[]) : Vector2;

    public toArray(xy : number[]) : number[];

    public toArray() : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number) : Vector2;
}

declare class CubicInterpolant extends Interpolant {
    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

    public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

    constructor();
}

interface MorphTarget {
    name : string;

    vertices : Vector3[];
}

declare class Group extends Object3D {
    public constructor();
}

declare class ObjectLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public texturePass : string;

    public crossOrigin : string;

    public load(url : string, onLoad : (p1: Object3D) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: Error) => void);

    public setTexturePath(value : string);

    public setCrossOrigin(crossOrigin : string);

    public parse<T extends Object3D>(json : any, onLoad : (p1: Object3D) => void) : T;

    public parseGeometries(json : any) : any[];

    public parseMaterials(json : any, textures : Texture[]) : Material[];

    public parseAnimations(json : any) : AnimationClip[];

    public parseImages(json : any, onLoad : () => void) : any;

    public parseTextures(json : any, images : any) : Texture[];

    public parseObject<T extends Object3D>(data : any, geometries : any[], materials : Material[]) : T;

    public constructor();

    public load(url : string, onLoad : (p1: Object3D) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: Object3D) => void);

    public load(url : string);

    public parse<T extends Object3D>(json : any) : T;

    public load(url : string, onLoad : (p1: Object3D) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);
}

declare class TorusKnotBufferGeometry extends BufferGeometry {
    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number, heightScale : number);

    public parameters : any;

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number);

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number);

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

    public constructor(radius : number, tube : number, radialSegments : number);

    public constructor(radius : number, tube : number);

    public constructor(radius : number);

    public constructor();
}

declare class Plane {
    public constructor(normal : Vector3, constant : number);

    public normal : Vector3;

    public constant : number;

    public set(normal : Vector3, constant : number) : Plane;

    public setComponents(x : number, y : number, z : number, w : number) : Plane;

    public setFromNormalAndCoplanarPoint(normal : Vector3, point : Vector3) : Plane;

    public setFromCoplanarPoints(a : Vector3, b : Vector3, c : Vector3) : Plane;

    public clone() : Plane;

    public copy(plane : Plane) : Plane;

    public normalize() : Plane;

    public negate() : Plane;

    public distanceToPoint(point : Vector3) : number;

    public distanceToSphere(sphere : Sphere) : number;

    public projectPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public orthoPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public intersectLine(line : Line3, optionalTarget : Vector3) : Vector3;

    public intersectsLine(line : Line3) : boolean;

    public intersectsBox(box : Box3) : boolean;

    public coplanarPoint(optionalTarget : boolean) : Vector3;

    public applyMatrix4(matrix : Matrix4, optionalNormalMatrix : Matrix3) : Plane;

    public translate(offset : Vector3) : Plane;

    public equals(plane : Plane) : boolean;

    /**
     * @deprecated Use {@link Plane#intersectsLine} instead.
     * @param {*} l
     * @return {*}
     */
    public isIntersectionLine(l : any) : any;

    public constructor(normal : Vector3);

    public constructor();

    public projectPoint(point : Vector3) : Vector3;

    public orthoPoint(point : Vector3) : Vector3;

    public intersectLine(line : Line3) : Vector3;

    public coplanarPoint() : Vector3;

    public applyMatrix4(matrix : Matrix4) : Plane;
}

declare class ColorKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    constructor();
}

interface HSL {
    h : number;

    s : number;

    l : number;
}

/**
 * ( interface Matrix&lt;T&gt; )
 * @class
 * @extends Object
 */
interface Matrix {
    /**
     * Float32Array with matrix values.
     */
    elements : Float32Array;

    /**
     * identity():T;
     * @return {*}
     */
    identity() : Matrix;

    /**
     * copy(m:T):T;
     * @param {*} m
     * @return {*}
     */
    copy(m : Matrix) : Matrix;

    /**
     * multiplyScalar(s:number):T;
     * @param {number} s
     * @return {*}
     */
    multiplyScalar(s : number) : Matrix;

    determinant() : number;

    /**
     * getInverse(matrix:T, throwOnInvertible?:boolean):T;
     * @param {*} matrix
     * @param {boolean} throwOnInvertible
     * @return {*}
     */
    getInverse(matrix : Matrix, throwOnInvertible : boolean) : Matrix;

    /**
     * transpose():T;
     * @return {*}
     */
    transpose() : Matrix;

    /**
     * clone():T;
     * @return {*}
     */
    clone() : Matrix;

    /**
     * getInverse(matrix:T, throwOnInvertible?:boolean):T;
     * @param {*} matrix
     * @return {*}
     */
    getInverse(matrix : Matrix) : Matrix;
}

declare namespace ColorKeywords {}
/**
 * Defines a 2d shape plane using paths.
 * @param {Array} points
 * @class
 * @extends Path
 */
declare class Shape extends Path {
    public constructor(points : Vector2[]);

    public holes : Path[];

    /**
     * @deprecated Use {@link ExtrudeGeometry} instead.
     * @param {*} options
     * @return {ExtrudeGeometry}
     */
    public extrude(options : any) : ExtrudeGeometry;

    /**
     * @deprecated Use {@link ShapeGeometry} instead.
     * @param {*} options
     * @return {ShapeGeometry}
     */
    public makeGeometry(options : any) : ShapeGeometry;

    public getPointsHoles(divisions : number) : Vector2[][];

    /**
     * @deprecated Use {@link Shape#extractPoints} instead.
     * @param {number} divisions
     * @return {Shape.ExtractAllPoints}
     */
    public extractAllPoints(divisions : number) : any;

    public extractPoints(divisions : number) : Vector2[];

    public constructor();

    /**
     * @deprecated Use {@link ExtrudeGeometry} instead.
     * @return {ExtrudeGeometry}
     */
    public extrude() : ExtrudeGeometry;

    /**
     * @deprecated Use {@link ShapeGeometry} instead.
     * @return {ShapeGeometry}
     */
    public makeGeometry() : ShapeGeometry;
}

declare class ColladaModel {
    public animations : any[];

    public kinematics : any;

    public scene : Scene;

    public library : any;
}

interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    reflectivity? : number;

    clearCoat? : number;

    clearCoatRoughness? : number;
}

declare class CubeCamera extends Object3D {
    public constructor(near : number, far : number, cubeResolution : number);

    public renderTarget : WebGLRenderTargetCube;

    /**
     * @deprecated Use {@link CubeCamera#update} instead
     * @param {*} renderer
     * @param {Scene} scene
     */
    public updateCubeMap(renderer : Renderer, scene : Scene);

    public update(renderer : Renderer, scene : Scene);

    public constructor(near : number, far : number);

    public constructor(near : number);

    public constructor();
}

declare class RenderPass {
    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : Color, clearAlpha : number);

    public scene : Scene;

    public camera : Camera;

    public overrideMaterial : Material;

    public clearColor : ((Color)|(string)|(number));

    public clearAlpha : number;

    public oldClearColor : Color;

    public oldClearAlpha : number;

    public enabled : boolean;

    public clear : boolean;

    public needsSwap : boolean;

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : Color);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material);

    public constructor(scene : Scene, camera : Camera);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : string, clearAlpha : number);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : number, clearAlpha : number);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : number);

    public constructor(scene : Scene, camera : Camera, overrideMaterial : Material, clearColor : string);

    constructor();
}

declare class SpotLightShadow extends LightShadow {
    public camera : PerspectiveCamera;

    public update(light : Light);
}

/**
 * Projects points between spaces.
 * @class
 * @extends Object
 */
declare class Projector {
    public constructor();

    public projectVector(vector : Vector3, camera : Camera) : Vector3;

    public unprojectVector(vector : Vector3, camera : Camera) : Vector3;

    /**
     * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
     * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
     * 
     * @param {Scene} scene scene to project.
     * @param {Camera} camera camera to use in the projection.
     * @param sort select whether to sort elements using the Painter's algorithm.
     * @param {boolean} sortObjects
     * @param {boolean} sortElements
     * @return {Projector.ProjectScene}
     */
    public projectScene(scene : Scene, camera : Camera, sortObjects : boolean, sortElements : boolean) : any;

    /**
     * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
     * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
     * 
     * @param {Scene} scene scene to project.
     * @param {Camera} camera camera to use in the projection.
     * @param sort select whether to sort elements using the Painter's algorithm.
     * @param {boolean} sortObjects
     * @return {Projector.ProjectScene}
     */
    public projectScene(scene : Scene, camera : Camera, sortObjects : boolean) : any;
}

declare class LatheGeometry extends Geometry {
    public constructor(points : Vector2[], segments : number, phiStart : number, phiLength : number);

    public parameters : any;

    public constructor(points : Vector2[], segments : number, phiStart : number);

    public constructor(points : Vector2[], segments : number);

    public constructor(points : Vector2[]);

    constructor();
}

/**
 * 3D vector.
 * 
 * @example
 * var a = new THREE.Vector3( 1, 0, 0 );
 * var b = new THREE.Vector3( 0, 1, 0 );
 * var c = new THREE.Vector3();
 * c.crossVectors( a, b );
 * 
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js">src/math/Vector3.js</a>
 * 
 * ( class Vector3 implements Vector<Vector3> )
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @class
 * @extends *
 */
declare class Vector3 implements Vector {
    public constructor(x : number, y : number, z : number);

    public x : number;

    public y : number;

    public z : number;

    /**
     * Sets value of this vector.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @return {Vector3}
     */
    public set(x : number, y : number, z : number) : Vector3;

    /**
     * Sets all values of this vector.
     * @param {number} scalar
     * @return {Vector3}
     */
    public setScalar(scalar : number) : Vector3;

    /**
     * Sets x value of this vector.
     * @param {number} x
     * @return {Vector3}
     */
    public setX(x : number) : Vector3;

    /**
     * Sets y value of this vector.
     * @param {number} y
     * @return {Vector3}
     */
    public setY(y : number) : Vector3;

    /**
     * Sets z value of this vector.
     * @param {number} z
     * @return {Vector3}
     */
    public setZ(z : number) : Vector3;

    public setComponent(index : number, value : number);

    public getComponent(index : number) : number;

    /**
     * Clones this vector.
     * @return {Vector3}
     */
    public clone() : Vector3;

    /**
     * Copies value of v to this vector.
     * @param {Vector3} v
     * @return {Vector3}
     */
    public copy(v : Vector3) : Vector3;

    /**
     * Adds v to this vector.
     * @param {Vector3} a
     * @return {Vector3}
     */
    public add(a : Vector3) : Vector3;

    public addScalar(s : number) : Vector3;

    public addScaledVector(v : Vector3, s : number) : Vector3;

    /**
     * Sets this vector to a + b.
     * @param {Vector3} a
     * @param {Vector3} b
     * @return {Vector3}
     */
    public addVectors(a : Vector3, b : Vector3) : Vector3;

    /**
     * Subtracts v from this vector.
     * @param {Vector3} a
     * @return {Vector3}
     */
    public sub(a : Vector3) : Vector3;

    public subScalar(s : number) : Vector3;

    /**
     * Sets this vector to a - b.
     * @param {Vector3} a
     * @param {Vector3} b
     * @return {Vector3}
     */
    public subVectors(a : Vector3, b : Vector3) : Vector3;

    public multiply(v : Vector3) : Vector3;

    /**
     * Multiplies this vector by scalar s.
     * @param {number} s
     * @return {Vector3}
     */
    public multiplyScalar(s : number) : Vector3;

    public multiplyVectors(a : Vector3, b : Vector3) : Vector3;

    public applyEuler(euler : Euler) : Vector3;

    public applyAxisAngle(axis : Vector3, angle : number) : Vector3;

    public applyMatrix3(m : Matrix3) : Vector3;

    public applyMatrix4(m : Matrix4) : Vector3;

    public applyQuaternion(q : Quaternion) : Vector3;

    public project(camrea : Camera) : Vector3;

    public unproject(camera : Camera) : Vector3;

    public transformDirection(m : Matrix4) : Vector3;

    public divide(v : Vector3) : Vector3;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     * @param {number} s
     * @return {Vector3}
     */
    public divideScalar(s : number) : Vector3;

    public min(v : Vector3) : Vector3;

    public max(v : Vector3) : Vector3;

    public clamp(min : Vector3, max : Vector3) : Vector3;

    public clampScalar(min : number, max : number) : Vector3;

    public clampLength(min : number, max : number) : Vector3;

    public floor() : Vector3;

    public ceil() : Vector3;

    public round() : Vector3;

    public roundToZero() : Vector3;

    /**
     * Inverts this vector.
     * @return {Vector3}
     */
    public negate() : Vector3;

    /**
     * Computes dot product of this vector and v.
     * @param {Vector3} v
     * @return {number}
     */
    public dot(v : Vector3) : number;

    /**
     * Computes squared length of this vector.
     * @return {number}
     */
    public lengthSq() : number;

    /**
     * Computes length of this vector.
     * @return {number}
     */
    public length() : number;

    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     * 
     * @deprecated Use {@link Vector3#manhattanLength} instead.
     * @return {number}
     */
    public lengthManhattan() : number;

    /**
     * Computes the Manhattan length of this vector.
     * 
     * @return {number} {number}
     * 
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    public manhattanLength() : number;

    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     * 
     * @param {Vector3} v
     * 
     * @return {number} {number}
     * 
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     * @param {Vector3} v
     */
    public manhattanDistanceTo(v : Vector3) : number;

    /**
     * Normalizes this vector.
     * @return {Vector3}
     */
    public normalize() : Vector3;

    /**
     * Normalizes this vector and multiplies it by l.
     * @param {number} l
     * @return {Vector3}
     */
    public setLength(l : number) : Vector3;

    public lerp(v : Vector3, alpha : number) : Vector3;

    public lerpVectors(v1 : Vector3, v2 : Vector3, alpha : number) : Vector3;

    /**
     * Sets this vector to cross product of itself and v.
     * @param {Vector3} a
     * @return {Vector3}
     */
    public cross(a : Vector3) : Vector3;

    /**
     * Sets this vector to cross product of a and b.
     * @param {Vector3} a
     * @param {Vector3} b
     * @return {Vector3}
     */
    public crossVectors(a : Vector3, b : Vector3) : Vector3;

    public projectOnVector(v : Vector3) : Vector3;

    public projectOnPlane(planeNormal : Vector3) : Vector3;

    public reflect(vector : Vector3) : Vector3;

    public angleTo(v : Vector3) : number;

    /**
     * Computes distance of this vector to v.
     * @param {Vector3} v
     * @return {number}
     */
    public distanceTo(v : Vector3) : number;

    /**
     * Computes squared distance of this vector to v.
     * @param {Vector3} v
     * @return {number}
     */
    public distanceToSquared(v : Vector3) : number;

    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo} instead.
     * @param {Vector3} v
     * @return {number}
     */
    public distanceToManhattan(v : Vector3) : number;

    public setFromSpherical(s : Spherical) : Vector3;

    public setFromMatrixPosition(m : Matrix4) : Vector3;

    public setFromMatrixScale(m : Matrix4) : Vector3;

    public setFromMatrixColumn(matrix : Matrix4, index : number) : Vector3;

    /**
     * Checks for strict equality of this vector and v.
     * @param {Vector3} v
     * @return {boolean}
     */
    public equals(v : Vector3) : boolean;

    public fromArray(xyz : number[], offset : number) : Vector3;

    public toArray(xyz : number[], offset : number) : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number, offset : number) : Vector3;

    /**
     * @deprecated Use {@link Vector3#setFromMatrixPosition} instead.
     * @param {Matrix4} m
     * @return {Vector3}
     */
    public getPositionFromMatrix(m : Matrix4) : Vector3;

    /**
     * @deprecated Use {@link Vector3#setFromMatrixScale} instead.
     * @param {Matrix4} m
     * @return {Vector3}
     */
    public getScaleFromMatrix(m : Matrix4) : Vector3;

    /**
     * @deprecated Use {@link Vector3#setFromMatrixColumn} instead.
     * @param {number} index
     * @param {Matrix4} matrix
     * @return {Vector3}
     */
    public getColumnFromMatrix(index : number, matrix : Matrix4) : Vector3;

    public constructor(x : number, y : number);

    public constructor(x : number);

    public constructor();

    public fromArray(xyz : number[]) : Vector3;

    public toArray(xyz : number[]) : number[];

    public toArray() : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number) : Vector3;
}

declare class WebGLShadowMap {
    public constructor(_renderer : Renderer, _lights : any[], _objects : any[], capabilities : any);

    public enabled : boolean;

    public autoUpdate : boolean;

    public needsUpdate : boolean;

    public type : ShadowMapType;

    public renderReverseSided : boolean;

    public renderSingleSided : boolean;

    public render(scene : Scene, camera : Camera);

    /**
     * @deprecated Use {@link WebGLShadowMap#renderReverseSided} instead.
     */
    public cullFace : any;

    constructor();
}

declare class Uint16BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

declare class WebGLRenderList {
    public opaque : Array<RenderItem>;

    public transparent : Array<any>;

    public init();

    public push(object : Object3D, geometry : Geometry, material : Material, z : number, group : Group);

    public sort();

    public push(object : Object3D, geometry : BufferGeometry, material : Material, z : number, group : Group);
}

declare class DepthTexture extends Texture {
    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, anisotropy : number);

    public image : any;

    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping, wrapS : Wrapping);

    public constructor(width : number, heighht : number, type : TextureDataType, mapping : Mapping);

    public constructor(width : number, heighht : number, type : TextureDataType);

    public constructor(width : number, heighht : number);

    constructor();
}

/**
 * @deprecated Use an Array instead.
 * @param {Array} materials
 * @class
 * @extends Material
 */
declare class MultiMaterial extends Material {
    public constructor(materials : Material[]);

    public isMultiMaterial : boolean;

    public materials : Material[];

    public toJSON(meta : any) : any;

    public constructor();
}

declare namespace PropertyBinding {
    export class Composite {
        public constructor(targetGroup : any, path : any, parsedPath : any);

        public getValue(array : any, offset : number) : any;

        public setValue(array : any, offset : number);

        public bind();

        public unbind();

        public constructor(targetGroup : any, path : any);

        constructor();
    }
}
declare namespace PropertyBinding {}
/**
 * 4D vector.
 * 
 * ( class Vector4 implements Vector<Vector4> )
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} w
 * @class
 * @extends *
 */
declare class Vector4 implements Vector {
    public constructor(x : number, y : number, z : number, w : number);

    public x : number;

    public y : number;

    public z : number;

    public w : number;

    /**
     * Sets value of this vector.
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @return {Vector4}
     */
    public set(x : number, y : number, z : number, w : number) : Vector4;

    /**
     * Sets all values of this vector.
     * @param {number} scalar
     * @return {Vector4}
     */
    public setScalar(scalar : number) : Vector4;

    /**
     * Sets X component of this vector.
     * @param {number} x
     * @return {Vector4}
     */
    public setX(x : number) : Vector4;

    /**
     * Sets Y component of this vector.
     * @param {number} y
     * @return {Vector4}
     */
    public setY(y : number) : Vector4;

    /**
     * Sets Z component of this vector.
     * @param {number} z
     * @return {Vector4}
     */
    public setZ(z : number) : Vector4;

    /**
     * Sets w component of this vector.
     * @param {number} w
     * @return {Vector4}
     */
    public setW(w : number) : Vector4;

    public setComponent(index : number, value : number);

    public getComponent(index : number) : number;

    /**
     * Clones this vector.
     * @return {Vector4}
     */
    public clone() : Vector4;

    /**
     * Copies value of v to this vector.
     * @param {Vector4} v
     * @return {Vector4}
     */
    public copy(v : Vector4) : Vector4;

    /**
     * Adds v to this vector.
     * @param {Vector4} v
     * @return {Vector4}
     */
    public add(v : Vector4) : Vector4;

    public addScalar(s : number) : Vector4;

    /**
     * Sets this vector to a + b.
     * @param {Vector4} a
     * @param {Vector4} b
     * @return {Vector4}
     */
    public addVectors(a : Vector4, b : Vector4) : Vector4;

    public addScaledVector(v : Vector4, s : number) : Vector4;

    /**
     * Subtracts v from this vector.
     * @param {Vector4} v
     * @return {Vector4}
     */
    public sub(v : Vector4) : Vector4;

    public subScalar(s : number) : Vector4;

    /**
     * Sets this vector to a - b.
     * @param {Vector4} a
     * @param {Vector4} b
     * @return {Vector4}
     */
    public subVectors(a : Vector4, b : Vector4) : Vector4;

    /**
     * Multiplies this vector by scalar s.
     * @param {number} s
     * @return {Vector4}
     */
    public multiplyScalar(s : number) : Vector4;

    public applyMatrix4(m : Matrix4) : Vector4;

    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     * @param {number} s
     * @return {Vector4}
     */
    public divideScalar(s : number) : Vector4;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
     * @param {Quaternion} q is assumed to be normalized
     * @return {Vector4}
     */
    public setAxisAngleFromQuaternion(q : Quaternion) : Vector4;

    /**
     * http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
     * @param {Matrix3} m assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
     * @return {Vector4}
     */
    public setAxisAngleFromRotationMatrix(m : Matrix3) : Vector4;

    public min(v : Vector4) : Vector4;

    public max(v : Vector4) : Vector4;

    public clamp(min : Vector4, max : Vector4) : Vector4;

    public clampScalar(min : number, max : number) : Vector4;

    public floor() : Vector4;

    public ceil() : Vector4;

    public round() : Vector4;

    public roundToZero() : Vector4;

    /**
     * Inverts this vector.
     * @return {Vector4}
     */
    public negate() : Vector4;

    /**
     * Computes dot product of this vector and v.
     * @param {Vector4} v
     * @return {number}
     */
    public dot(v : Vector4) : number;

    /**
     * Computes squared length of this vector.
     * @return {number}
     */
    public lengthSq() : number;

    /**
     * Computes length of this vector.
     * @return {number}
     */
    public length() : number;

    /**
     * @deprecated Use {@link Vector4#manhattanLength} instead.
     * @return {number}
     */
    public lengthManhattan() : number;

    /**
     * Computes the Manhattan length of this vector.
     * 
     * @return {number} {number}
     * 
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    public manhattanLength() : number;

    /**
     * Normalizes this vector.
     * @return {Vector4}
     */
    public normalize() : Vector4;

    /**
     * Normalizes this vector and multiplies it by l.
     * @param {number} length
     * @return {Vector4}
     */
    public setLength(length : number) : Vector4;

    /**
     * Linearly interpolate between this vector and v with alpha factor.
     * @param {Vector4} v
     * @param {number} alpha
     * @return {Vector4}
     */
    public lerp(v : Vector4, alpha : number) : Vector4;

    public lerpVectors(v1 : Vector4, v2 : Vector4, alpha : number) : Vector4;

    /**
     * Checks for strict equality of this vector and v.
     * @param {Vector4} v
     * @return {boolean}
     */
    public equals(v : Vector4) : boolean;

    public fromArray(xyzw : number[], offset : number) : Vector4;

    public toArray(xyzw : number[], offset : number) : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number, offset : number) : Vector4;

    public constructor(x : number, y : number, z : number);

    public constructor(x : number, y : number);

    public constructor(x : number);

    public constructor();

    public fromArray(xyzw : number[]) : Vector4;

    public toArray(xyzw : number[]) : number[];

    public toArray() : number[];

    public fromBufferAttribute(attribute : BufferAttribute, index : number) : Vector4;
}

declare class Int32BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 * @param {LoadingManager} manager
 * @class
 * @extends Object
 */
declare class ImageLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public crossOrigin : string;

    public withCredentials : string;

    public path : string;

    /**
     * Begin loading from url
     * @param {string} url
     * @param {*} onLoad
     * @param {*} onProgress
     * @param {*} onError
     * @return {HTMLImageElement}
     */
    public load(url : string, onLoad : (p1: HTMLImageElement) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : HTMLImageElement;

    public setCrossOrigin(crossOrigin : string) : ImageLoader;

    public setWithCredentials(value : string) : ImageLoader;

    public setPath(value : string) : ImageLoader;

    public constructor();

    /**
     * Begin loading from url
     * @param {string} url
     * @param {*} onLoad
     * @param {*} onProgress
     * @return {HTMLImageElement}
     */
    public load(url : string, onLoad : (p1: HTMLImageElement) => void, onProgress : (p1: ProgressEvent) => void) : HTMLImageElement;

    /**
     * Begin loading from url
     * @param {string} url
     * @param {*} onLoad
     * @return {HTMLImageElement}
     */
    public load(url : string, onLoad : (p1: HTMLImageElement) => void) : HTMLImageElement;

    /**
     * Begin loading from url
     * @param {string} url
     * @return {HTMLImageElement}
     */
    public load(url : string) : HTMLImageElement;
}

declare class LineSegments extends Line {
    public constructor(geometry : Geometry, material : any, mode : number);

    public constructor(geometry : Geometry, material : any);

    public constructor(geometry : Geometry);

    public constructor();

    public constructor(geometry : BufferGeometry, material : any, mode : number);

    public constructor(geometry : BufferGeometry, material : any);

    public constructor(geometry : BufferGeometry);
}

interface IUniform {
    value : any;
}

/**
 * @param {number} radiusTop — Radius of the cylinder at the top.
 * @param {number} radiusBottom — Radius of the cylinder at the bottom.
 * @param {number} height — Height of the cylinder.
 * @param {number} radiusSegments — Number of segmented faces around the circumference of the cylinder.
 * @param {number} heightSegments — Number of rows of faces along the height of the cylinder.
 * @param {boolean} openEnded - A Boolean indicating whether or not to cap the ends of the cylinder.
 * @param {number} thetaStart
 * @param {number} thetaLength
 * @class
 * @extends Geometry
 */
declare class CylinderGeometry extends Geometry {
    public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean, thetaStart : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number, openEnded : boolean);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number, heightSegments : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number, radiusSegments : number);

    public constructor(radiusTop : number, radiusBottom : number, height : number);

    public constructor(radiusTop : number, radiusBottom : number);

    public constructor(radiusTop : number);

    public constructor();
}

declare class QuaternionLinearInterpolant extends Interpolant {
    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number, resultBuffer : any);

    public interpolate_(i1 : number, t0 : number, t : number, t1 : number) : any;

    public constructor(parameterPositions : any, samplesValues : any, sampleSize : number);

    constructor();
}

declare class MeshNormalMaterial extends Material {
    public constructor(parameters : MeshNormalMaterialParameters);

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public morphTargets : boolean;

    public setValues(parameters : MeshNormalMaterialParameters);

    public constructor();
}

declare class PropertyMixer {
    public constructor(binding : any, typeName : string, valueSize : number);

    public binding : any;

    public valueSize : number;

    public buffer : any;

    public cumulativeWeight : number;

    public useCount : number;

    public referenceCount : number;

    public accumulate(accuIndex : number, weight : number);

    public apply(accuIndex : number);

    public saveOriginalState();

    public restoreOriginalState();

    constructor();
}

interface Intersection {
    distance : number;

    distanceToRay : number;

    point : Vector3;

    index : number;

    face : Face3;

    faceIndex : number;

    object : Object3D;
}

declare class LensFlarePlugin {
    public constructor(renderer : WebGLRenderer, flares : any[]);

    public render(scene : Scene, camera : Camera, viewportWidth : number, viewportHeight : number);

    constructor();
}

declare class Skeleton {
    public constructor(bones : Bone[], boneInverses : Matrix4[]);

    /**
     * @deprecated This property has been removed completely.
     */
    public useVertexTexture : boolean;

    public identityMatrix : Matrix4;

    public bones : Bone[];

    public boneTextureWidth : number;

    public boneTextureHeight : number;

    public boneMatrices : Float32Array;

    public boneTexture : DataTexture;

    public boneInverses : Matrix4[];

    public calculateInverses(bone : Bone);

    public pose();

    public update();

    public clone() : Skeleton;

    public constructor(bones : Bone[]);

    constructor();
}

declare class RenderableFace {
    public constructor();

    public id : number;

    public v1 : RenderableVertex;

    public v2 : RenderableVertex;

    public v3 : RenderableVertex;

    public normalModel : Vector3;

    public vertexNormalsModel : Vector3[];

    public vertexNormalsLength : number;

    public color : Color;

    public material : Material;

    public uvs : Vector2[][];

    public z : number;
}

declare class Float64BufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

declare class FilmPass extends Pass {
    public constructor(noiseIntensity : number, scanlinesIntensity : number, scanlinesCount : number, grayscale : boolean);

    public scene : Scene;

    public camera : Camera;

    public uniforms : IUniform;

    public material : Material;

    public quad : Mesh;

    constructor();
}

declare class FirstPersonControls {
    public constructor(object : Camera, domElement : HTMLElement);

    public object : Object3D;

    public target : Vector3;

    public domElement : ((HTMLCanvasElement)|(HTMLDocument));

    public enabled : boolean;

    public movementSpeed : number;

    public lookSpeed : number;

    public noFly : boolean;

    public lookVertical : boolean;

    public autoForward : boolean;

    public activeLook : boolean;

    public heightSpeed : boolean;

    public heightCoef : number;

    public heightMin : number;

    public heightMax : number;

    public constrainVertical : boolean;

    public verticalMin : number;

    public verticalMax : number;

    public autoSpeedFactor : number;

    public mouseX : number;

    public mouseY : number;

    public lat : number;

    public lon : number;

    public phi : number;

    public theta : number;

    public moveForward : boolean;

    public moveBackward : boolean;

    public moveLeft : boolean;

    public moveRight : boolean;

    public freeze : any;

    public mouseDragOn : boolean;

    public update(delta : number);

    public dispose();

    public constructor(object : Camera);

    constructor();
}

declare class BoxHelper extends LineSegments {
    public constructor(object : Object3D, color : Color);

    public update(object : Object3D);

    public constructor(object : Object3D);

    public constructor();

    public update();
}

declare class TorusKnotGeometry extends Geometry {
    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number, heightScale : number);

    public parameters : any;

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number, q : number);

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, p : number);

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

    public constructor(radius : number, tube : number, radialSegments : number);

    public constructor(radius : number, tube : number);

    public constructor(radius : number);

    public constructor();
}

declare class CubeTextureLoader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public corssOrigin : string;

    public path : string;

    public load(urls : Array<string>, onLoad : (p1: CubeTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : CubeTexture;

    public setCrossOrigin(crossOrigin : string) : CubeTextureLoader;

    public setPath(path : string) : CubeTextureLoader;

    public constructor();

    public load(urls : Array<string>, onLoad : (p1: CubeTexture) => void, onProgress : (p1: ProgressEvent) => void) : CubeTexture;

    public load(urls : Array<string>, onLoad : (p1: CubeTexture) => void) : CubeTexture;

    public load(urls : Array<string>) : CubeTexture;

    public load(urls : string[], onLoad : (p1: CubeTexture) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : CubeTexture;

    public load(urls : string[], onLoad : (p1: CubeTexture) => void, onProgress : (p1: ProgressEvent) => void) : CubeTexture;

    public load(urls : string[], onLoad : (p1: CubeTexture) => void) : CubeTexture;

    public load(urls : string[]) : CubeTexture;
}

/**
 * @param {Geometry} geometry An instance of Geometry or BufferGeometry.
 * @param {Material} material An instance of Material (optional).
 * @class
 * @extends Object3D
 */
declare class Points extends Object3D {
    public constructor(geometry : Geometry, material : Material);

    /**
     * An instance of Geometry or BufferGeometry, where each vertex designates the position of a particle in the system.
     */
    public geometry : ((Geometry)|(BufferGeometry));

    /**
     * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
     */
    public material : Material;

    public raycast(raycaster : Raycaster, intersects : any);

    public constructor(geometry : Geometry);

    public constructor();

    public constructor(geometry : BufferGeometry, material : Material);

    public constructor(geometry : BufferGeometry);
}

declare class Uint8ClampedBufferAttribute extends BufferAttribute {
    public constructor(array : java.lang.Iterable<number>, itemSize : number);

    public constructor(array : ArrayBuffer, itemSize : number);

    public constructor(array : ArrayLike<number>, itemSize : number);

    public constructor(array : number[], itemSize : number);

    constructor();
}

/**
 * Creates eventDispatcher object. It needs to be call with '.call' to add the functionality to an object.
 * @class
 * @extends Object
 */
declare class EventDispatcher {
    public constructor();

    /**
     * Adds a listener to an event type.
     * @param {string} type The type of the listener that gets removed.
     * @param {*} listener The listener function that gets removed.
     */
    public addEventListener(type : string, listener : (p1: Event) => void);

    /**
     * Adds a listener to an event type.
     * @param {string} type The type of the listener that gets removed.
     * @param {*} listener The listener function that gets removed.
     */
    public hasEventListener(type : string, listener : (p1: Event) => void);

    /**
     * Removes a listener from an event type.
     * @param {string} type The type of the listener that gets removed.
     * @param {*} listener The listener function that gets removed.
     */
    public removeEventListener(type : string, listener : (p1: Event) => void);

    /**
     * Fire an event type.
     * @param type The type of event that gets fired.
     * @param {EventDispatcher.EventData} event
     */
    public dispatchEvent(event : any);
}

interface ColladaLoaderReturnType {}

/**
 * A loader for loading objects in JSON format.
 * @param {LoadingManager} manager
 * @class
 * @extends Loader
 */
declare class JSONLoader extends Loader {
    public constructor(manager : LoadingManager);

    public manager : LoadingManager;

    public withCredentials : boolean;

    public load(url : string, onLoad : (p1: Geometry, p2: Material[]) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void);

    public setTexturePath(value : string);

    public parse(json : any, texturePath : string) : any;

    public constructor();

    public load(url : string, onLoad : (p1: Geometry, p2: Material[]) => void, onProgress : (p1: ProgressEvent) => void);

    public load(url : string, onLoad : (p1: Geometry, p2: Material[]) => void);

    public load(url : string);

    public parse(json : any) : any;
}

declare class QuaternionKeyframeTrack extends KeyframeTrack {
    public constructor(name : string, times : any[], values : any[], interpolation : InterpolationModes);

    constructor();
}

interface LensFlareProperty {
    texture : Texture;

    size : number;

    distance : number;

    x : number;

    y : number;

    z : number;

    scale : number;

    rotation : number;

    opacity : number;

    color : Color;

    blending : Blending;
}

declare class TorusBufferGeometry extends BufferGeometry {
    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number, arc : number);

    public parameters : any;

    public constructor(radius : number, tube : number, radialSegments : number, tubularSegments : number);

    public constructor(radius : number, tube : number, radialSegments : number);

    public constructor(radius : number, tube : number);

    public constructor(radius : number);

    public constructor();
}

/**
 * @param {boolean} autoStart Automatically start the clock.
 * @class
 * @extends Object
 */
declare class Clock {
    public constructor(autoStart : boolean);

    /**
     * If set, starts the clock automatically when the first update is called.
     */
    public autoStart : boolean;

    /**
     * When the clock is running, It holds the starttime of the clock.
     * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     */
    public startTime : number;

    /**
     * When the clock is running, It holds the previous time from a update.
     * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     */
    public oldTime : number;

    /**
     * When the clock is running, It holds the time elapsed between the start of the clock to the previous update.
     * This parameter is in seconds of three decimal places.
     */
    public elapsedTime : number;

    /**
     * This property keeps track whether the clock is running or not.
     */
    public running : boolean;

    /**
     * Starts clock.
     */
    public start();

    /**
     * Stops clock.
     */
    public stop();

    /**
     * Get the seconds passed since the clock started.
     * @return {number}
     */
    public getElapsedTime() : number;

    /**
     * Get the seconds passed since the last call to this method.
     * @return {number}
     */
    public getDelta() : number;

    public constructor();
}

declare class StereoCamera extends Camera {
    public constructor();

    public aspect : number;

    public eyeSep : number;

    public cameraL : PerspectiveCamera;

    public cameraR : PerspectiveCamera;

    public update(camera : PerspectiveCamera);
}

declare class DodecahedronGeometry extends Geometry {
    public constructor(radius : number, detail : number);

    public parameters : any;

    public constructor(radius : number);

    public constructor();
}

/**
 * @deprecated use {@link Vector3} instead.
 * @class
 * @extends Vector3
 */
declare class Vertex extends Vector3 {}

declare class Raycaster {
    public constructor(origin : Vector3, direction : Vector3, near : number, far : number);

    public ray : Ray;

    public near : number;

    public far : number;

    public params : RaycasterParameters;

    public precision : number;

    public linePrecision : number;

    public set(origin : Vector3, direction : Vector3);

    public setFromCamera(coords : any, camera : Camera);

    public intersectObject(object : Object3D, recursive : boolean) : Intersection[];

    public intersectObjects(objects : Object3D[], recursive : boolean) : Intersection[];

    public constructor(origin : Vector3, direction : Vector3, near : number);

    public constructor(origin : Vector3, direction : Vector3);

    public constructor(origin : Vector3);

    public constructor();

    public intersectObject(object : Object3D) : Intersection[];

    public intersectObjects(objects : Object3D[]) : Intersection[];
}

declare class WebGLRenderTarget extends EventDispatcher {
    public constructor(width : number, height : number, options : WebGLRenderTargetOptions);

    public uuid : string;

    public width : number;

    public height : number;

    public scissor : Vector4;

    public scissorTest : boolean;

    public viewport : Vector4;

    public texture : Texture;

    public depthBuffer : boolean;

    public stencilBuffer : boolean;

    public depthTexture : Texture;

    /**
     * @deprecated Use {@link Texture#wrapS} instead.
     */
    public wrapS : any;

    /**
     * @deprecated Use {@link Texture#wrapT} instead.
     */
    public wrapT : any;

    /**
     * @deprecated Use {@link Texture#magFilter} instead.
     */
    public magFilter : any;

    /**
     * @deprecated Use {@link Texture#minFilter} instead.
     */
    public minFilter : any;

    /**
     * @deprecated Use {@link Texture#anisotropy} instead.
     */
    public anisotropy : any;

    /**
     * @deprecated Use {@link Texture#offset} instead.
     */
    public offset : any;

    /**
     * @deprecated Use {@link Texture#repeat} instead.
     */
    public repeat : any;

    /**
     * @deprecated Use {@link Texture#format} instead.
     */
    public format : any;

    /**
     * @deprecated Use {@link Texture#type} instead.
     */
    public type : any;

    /**
     * @deprecated Use {@link Texture#generateMipmaps} instead.
     */
    public generateMipmaps : any;

    public setSize(width : number, height : number);

    public clone() : WebGLRenderTarget;

    public copy(source : WebGLRenderTarget) : WebGLRenderTarget;

    public dispose();

    public constructor(width : number, height : number);

    constructor();
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InterleavedBuffer.js">src/core/InterleavedBuffer.js</a>
 * @param {*} array
 * @param {number} stride
 * @class
 * @extends Object
 */
declare class InterleavedBuffer {
    public constructor(array : ArrayLike<number>, stride : number);

    public array : ArrayLike<number>;

    public stride : number;

    public dynamic : boolean;

    public updateRange : any;

    public version : number;

    public length : number;

    public count : number;

    public needsUpdate : boolean;

    public setArray(array : ArrayBufferView);

    public setDynamic(dynamic : boolean) : InterleavedBuffer;

    public copy(source : InterleavedBuffer) : InterleavedBuffer;

    public copyAt(index1 : number, attribute : InterleavedBufferAttribute, index2 : number) : InterleavedBuffer;

    public set(value : ArrayLike<number>, index : number) : InterleavedBuffer;

    public clone() : InterleavedBuffer;

    public setArray();

    public constructor(array : number[], stride : number);

    public set(value : number[], index : number) : InterleavedBuffer;

    constructor();
}

/**
 * Affects objects using {@link MeshLambertMaterial} or {@link MeshPhongMaterial}.
 * 
 * @example
 * var light = new THREE.PointLight( 0xff0000, 1, 100 );
 * light.position.set( 50, 50, 50 );
 * scene.add( light );
 * @param {Color} color
 * @param {number} intensity
 * @param {number} distance
 * @param {number} decay
 * @class
 * @extends Light
 */
declare class PointLight extends Light {
    public constructor(color : Color, intensity : number, distance : number, decay : number);

    public intensity : number;

    /**
     * If non-zero, light will attenuate linearly from maximum intensity at light position down to zero at distance.
     * Default — 0.0.
     */
    public distance : number;

    public decay : number;

    public shadow : PointLightShadow;

    public power : number;

    public constructor(color : Color, intensity : number, distance : number);

    public constructor(color : Color, intensity : number);

    public constructor(color : Color);

    public constructor();

    public constructor(color : string, intensity : number, distance : number, decay : number);

    public constructor(color : number, intensity : number, distance : number, decay : number);

    public constructor(color : string, intensity : number, distance : number);

    public constructor(color : number, intensity : number, distance : number);

    public constructor(color : number, intensity : number);

    public constructor(color : string, intensity : number);

    public constructor(color : string);

    public constructor(color : number);
}

declare enum Wrapping {
  
}

declare class VRControls {
    public constructor(camera : Camera, callback : (p1: string) => void);

    /**
     * Update VR Instance Tracking
     */
    public update();

    public zeroSensor();

    public scale : number;

    public constructor(camera : Camera);

    constructor();
}

declare class WebGLProgram {
    public constructor(renderer : WebGLRenderer, code : string, material : ShaderMaterial, parameters : WebGLRendererParameters);

    public id : number;

    public code : string;

    public usedTimes : number;

    public program : any;

    public vertexShader : WebGLShader;

    public fragmentShader : WebGLShader;

    /**
     * @deprecated Use {@link WebGLProgram#getUniforms} instead.
     */
    public uniforms : any;

    /**
     * @deprecated Use {@link WebGLProgram#getAttributes} instead.
     */
    public attributes : any;

    public getUniforms() : WebGLUniforms;

    public getAttributes() : any;

    public destroy();

    constructor();
}

declare class MaterialCreator {
    public constructor(baseUrl : string, options : any);

    public baseUrl : string;

    public options : any;

    public materialsInfo : any;

    public materials : any;

    public materialsArray : Material[];

    public nameLookup : any;

    public side : number;

    public wrap : number;

    public setCrossOrigin(value : boolean);

    public setManager(value : any);

    public setMaterials(materialsInfo : any);

    public convert(materialsInfo : any) : any;

    public preload();

    public getIndex(materialName : string) : Material;

    public getAsArray() : Material[];

    public create(materialName : string) : Material;

    public createMaterial_(materialName : string) : Material;

    public getTextureParams(value : string, matParams : any) : any;

    public loadTexture(url : string, mapping : any, onLoad : (p1: BufferGeometry) => void, onProgress : (p1: ProgressEvent) => void, onError : (p1: ErrorEvent) => void) : Texture;

    public constructor(baseUrl : string);

    public constructor();

    public loadTexture(url : string, mapping : any, onLoad : (p1: BufferGeometry) => void, onProgress : (p1: ProgressEvent) => void) : Texture;

    public loadTexture(url : string, mapping : any, onLoad : (p1: BufferGeometry) => void) : Texture;
}

declare class DDSLoader extends CompressedTextureLoader {
    public constructor();

    public parse(buffer : string, loadMipmaps : boolean) : Dds;
}

declare class SplineCurve extends Curve<Vector2> {
    public constructor(points : Vector2[]);

    public points : Vector2[];

    public constructor();
}

declare class ArrayCamera extends PerspectiveCamera {
    public constructor(cameras : PerspectiveCamera[]);

    public cameras : PerspectiveCamera[];

    public isArrayCamera : boolean;

    public constructor();
}

declare class AudioListener {
    public constructor();

    public type : string;

    public context : AudioContext;

    public gain : GainNode;

    public getInput() : GainNode;

    public removeFilter();

    public setFilter(value : any);

    public getFilter() : any;

    public setMasterVolume(value : number);

    public getMasterVolume() : number;
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class Cache {
    constructor();

    public static enabled : boolean;

    public static files : any;

    public static add(key : string, file : any);

    public static get(key : string) : any;

    public static remove(key : string);

    public static clear();
}

declare class PlaneBufferGeometry extends BufferGeometry {
    public constructor(width : number, height : number, widthSegments : number, heightSegments : number);

    public parameters : any;

    public constructor(width : number, height : number, widthSegments : number);

    public constructor(width : number, height : number);

    constructor();
}

declare class ShaderMaterial extends Material {
    public constructor(parameters : ShaderMaterialParameters);

    public defines : any;

    public uniforms : any;

    public vertexShader : string;

    public fragmentShader : string;

    public linewidth : number;

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public lights : boolean;

    public clipping : boolean;

    public skinning : boolean;

    public morphTargets : boolean;

    public morphNormals : boolean;

    /**
     * @deprecated Use {@link ShaderMaterial#extensions.derivatives} instead.
     */
    public derivatives : any;

    public extensions : any;

    public defaultAttributeValues : any;

    public index0AttributeName : string;

    public setValues(parameters : ShaderMaterialParameters);

    public toJSON(meta : any) : any;

    public constructor();
}

/**
 * @deprecated Use {@link BoxGeometry} instead.
 * @class
 * @extends BoxGeometry
 */
declare class CubeGeometry extends BoxGeometry {}

/**
 * Base class for geometries
 * 
 * # Example
 * var geometry = new THREE.Geometry();
 * geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) );
 * geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) );
 * geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) );
 * geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
 * geometry.computeBoundingSphere();
 * 
 * @see https://github.com/mrdoob/three.js/blob/master/src/core/Geometry.js
 * @class
 * @extends EventDispatcher
 */
declare class Geometry extends EventDispatcher {
    public constructor();

    /**
     * Unique number of this geometry instance
     */
    public id : number;

    public uuid : string;

    /**
     * Name for this geometry. Default is an empty string.
     */
    public name : string;

    public type : string;

    /**
     * The array of vertices hold every position of points of the model.
     * To signal an update in this array, Geometry.verticesNeedUpdate needs to be set to true.
     */
    public vertices : Vector3[];

    /**
     * Array of vertex colors, matching number and order of vertices.
     * Used in ParticleSystem, Line and Ribbon.
     * Meshes use per-face-use-of-vertex colors embedded directly in faces.
     * To signal an update in this array, Geometry.colorsNeedUpdate needs to be set to true.
     */
    public colors : Color[];

    /**
     * Array of triangles or/and quads.
     * The array of faces describe how each vertex in the model is connected with each other.
     * To signal an update in this array, Geometry.elementsNeedUpdate needs to be set to true.
     */
    public faces : Face3[];

    /**
     * Array of face UV layers.
     * Each UV layer is an array of UV matching order and number of vertices in faces.
     * To signal an update in this array, Geometry.uvsNeedUpdate needs to be set to true.
     */
    public faceVertexUvs : Vector2[][][];

    /**
     * Array of morph targets. Each morph target is a Javascript object:
     * 
     * { name: "targetName", vertices: [ new THREE.Vector3(), ... ] }
     * 
     * Morph vertices match number and order of primary vertices.
     */
    public morphTargets : MorphTarget[];

    /**
     * Array of morph normals. Morph normals have similar structure as morph targets, each normal set is a Javascript object:
     * 
     * morphNormal = { name: "NormalName", normals: [ new THREE.Vector3(), ... ] }
     */
    public morphNormals : MorphNormals[];

    /**
     * Array of skinning weights, matching number and order of vertices.
     */
    public skinWeights : number[];

    /**
     * Array of skinning indices, matching number and order of vertices.
     */
    public skinIndices : number[];

    /**
     * 
     */
    public lineDistances : number[];

    /**
     * Bounding box.
     */
    public boundingBox : Box3;

    /**
     * Bounding sphere.
     */
    public boundingSphere : Sphere;

    /**
     * Set to true if the vertices array has been updated.
     */
    public verticesNeedUpdate : boolean;

    /**
     * Set to true if the faces array has been updated.
     */
    public elementsNeedUpdate : boolean;

    /**
     * Set to true if the uvs array has been updated.
     */
    public uvsNeedUpdate : boolean;

    /**
     * Set to true if the normals array has been updated.
     */
    public normalsNeedUpdate : boolean;

    /**
     * Set to true if the colors array has been updated.
     */
    public colorsNeedUpdate : boolean;

    /**
     * Set to true if the linedistances array has been updated.
     */
    public lineDistancesNeedUpdate : boolean;

    /**
     * 
     */
    public groupsNeedUpdate : boolean;

    /**
     * Bakes matrix transform directly into vertex coordinates.
     * @param {Matrix4} matrix
     * @return {Geometry}
     */
    public applyMatrix(matrix : Matrix4) : Geometry;

    public rotateX(angle : number) : Geometry;

    public rotateY(angle : number) : Geometry;

    public rotateZ(angle : number) : Geometry;

    public translate(x : number, y : number, z : number) : Geometry;

    public scale(x : number, y : number, z : number) : Geometry;

    public lookAt(vector : Vector3);

    public fromBufferGeometry(geometry : BufferGeometry) : Geometry;

    public center() : Vector3;

    public normalize() : Geometry;

    /**
     * Computes face normals.
     */
    public computeFaceNormals();

    /**
     * Computes vertex normals by averaging face normals.
     * Face normals must be existing / computed beforehand.
     * @param {boolean} areaWeighted
     */
    public computeVertexNormals(areaWeighted : boolean);

    /**
     * Compute vertex normals, but duplicating face normals.
     */
    public computeFlatVertexNormals();

    /**
     * Computes morph normals.
     */
    public computeMorphNormals();

    public computeLineDistances();

    /**
     * Computes bounding box of the geometry, updating {@link Geometry.boundingBox} attribute.
     */
    public computeBoundingBox();

    /**
     * Computes bounding sphere of the geometry, updating Geometry.boundingSphere attribute.
     * Neither bounding boxes or bounding spheres are computed by default. They need to be explicitly computed, otherwise they are null.
     */
    public computeBoundingSphere();

    public merge(geometry : Geometry, matrix : Matrix, materialIndexOffset : number);

    public mergeMesh(mesh : Mesh);

    /**
     * Checks for duplicate vertices using hashmap.
     * Duplicated vertices are removed and faces' vertices are updated.
     * @return {number}
     */
    public mergeVertices() : number;

    public setFromPoints(points : any) : Geometry;

    public sortFacesByMaterialIndex();

    public toJSON() : any;

    /**
     * Creates a new clone of the Geometry.
     * @return {Geometry}
     */
    public clone() : Geometry;

    public copy(source : Geometry) : Geometry;

    /**
     * Removes The object from memory.
     * Don't forget to call this method when you remove an geometry because it can cuase meomory leaks.
     */
    public dispose();

    public bones : Bone[];

    public animation : AnimationClip;

    public animations : AnimationClip[];

    public addEventListener(type : string, listener : (p1: Event) => void);

    public hasEventListener(type : string, listener : (p1: Event) => void);

    public removeEventListener(type : string, listener : (p1: Event) => void);

    public dispatchEvent(event : any);

    /**
     * Computes vertex normals by averaging face normals.
     * Face normals must be existing / computed beforehand.
     */
    public computeVertexNormals();

    public merge(geometry : Geometry, matrix : Matrix);

    public merge(geometry : Geometry);

    public setFromPoints(points : any) : Geometry;

    public setFromPoints(points : Vector2[]) : Geometry;

    public setFromPoints(points : Vector3[]) : Geometry;
}

declare class WebGLProperties {
    public constructor();

    public get(object : any) : any;

    public delete(object : any);

    public clear();
}

declare class ShapeBufferGeometry extends BufferGeometry {
    public constructor(shapes : Shape, curveSegments : number);

    public constructor(shapes : Shape);

    public constructor(shapes : Shape[], curveSegments : number);

    public constructor(shapes : Shape[]);

    constructor();
}

declare class QuadraticBezierCurve extends Curve<Vector2> {
    public constructor(v0 : Vector2, v1 : Vector2, v2 : Vector2);

    public v0 : Vector2;

    public v1 : Vector2;

    public v2 : Vector2;

    constructor();
}

declare class Sphere {
    public constructor(center : Vector3, radius : number);

    public center : Vector3;

    public radius : number;

    public set(center : Vector3, radius : number) : Sphere;

    public setFromPoints(points : Vector3[], optionalCenter : Vector3) : Sphere;

    public clone() : Sphere;

    public copy(sphere : Sphere) : Sphere;

    public empty() : boolean;

    public containsPoint(point : Vector3) : boolean;

    public distanceToPoint(point : Vector3) : number;

    public intersectsSphere(sphere : Sphere) : boolean;

    public intersectsBox(box : Box3) : boolean;

    public intersectsPlane(plane : Plane) : boolean;

    public clampPoint(point : Vector3, optionalTarget : Vector3) : Vector3;

    public getBoundingBox(optionalTarget : Box3) : Box3;

    public applyMatrix4(matrix : Matrix4) : Sphere;

    public translate(offset : Vector3) : Sphere;

    public equals(sphere : Sphere) : boolean;

    public constructor(center : Vector3);

    public constructor();

    public setFromPoints(points : Vector3[]) : Sphere;

    public clampPoint(point : Vector3) : Vector3;

    public getBoundingBox() : Box3;
}

declare class SkinnedMesh extends Mesh {
    public constructor(geometry : Geometry, material : MeshBasicMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : MeshDepthMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : MultiMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : MeshLambertMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : MeshNormalMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : MeshPhongMaterial, useVertexTexture : boolean);

    public constructor(geometry : Geometry, material : ShaderMaterial, useVertexTexture : boolean);

    public bindMode : string;

    public bindMatrix : Matrix4;

    public bindMatrixInverse : Matrix4;

    public skeleton : Skeleton;

    public bind(skeleton : Skeleton, bindMatrix : Matrix4);

    public pose();

    public normalizeSkinWeights();

    public updateMatrixWorld(force : boolean);

    public constructor(geometry : Geometry, material : MeshBasicMaterial);

    public constructor(geometry : Geometry);

    public constructor();

    public constructor(geometry : Geometry, material : MeshDepthMaterial);

    public constructor(geometry : Geometry, material : MultiMaterial);

    public constructor(geometry : Geometry, material : MeshLambertMaterial);

    public constructor(geometry : Geometry, material : MeshNormalMaterial);

    public constructor(geometry : Geometry, material : MeshPhongMaterial);

    public constructor(geometry : Geometry, material : ShaderMaterial);

    public bind(skeleton : Skeleton);

    public updateMatrixWorld();

    public constructor(geometry : BufferGeometry, material : MeshBasicMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MeshDepthMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MultiMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MeshLambertMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MeshNormalMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MeshPhongMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : ShaderMaterial, useVertexTexture : boolean);

    public constructor(geometry : BufferGeometry, material : MeshBasicMaterial);

    public constructor(geometry : BufferGeometry);

    public constructor(geometry : BufferGeometry, material : MeshDepthMaterial);

    public constructor(geometry : BufferGeometry, material : MultiMaterial);

    public constructor(geometry : BufferGeometry, material : MeshLambertMaterial);

    public constructor(geometry : BufferGeometry, material : MeshNormalMaterial);

    public constructor(geometry : BufferGeometry, material : MeshPhongMaterial);

    public constructor(geometry : BufferGeometry, material : ShaderMaterial);
}

declare class PlaneGeometry extends Geometry {
    public constructor(width : number, height : number, widthSegments : number, heightSegments : number);

    public parameters : any;

    public constructor(width : number, height : number, widthSegments : number);

    public constructor(width : number, height : number);

    constructor();
}

declare class WebGLState {
    public constructor(gl : any, extensions : any, paramThreeToGL : Function);

    public buffers : any;

    public init();

    public initAttributes();

    public enableAttribute(attribute : string);

    public enableAttributeAndDivisor(attribute : string, meshPerAttribute : any, extension : any);

    public disableUnusedAttributes();

    public enable(id : string);

    public disable(id : string);

    public getCompressedTextureFormats() : any[];

    public setBlending(blending : number, blendEquation : number, blendSrc : number, blendDst : number, blendEquationAlpha : number, blendSrcAlpha : number, blendDstAlpha : number);

    public setColorWrite(colorWrite : number);

    public setDepthTest(depthTest : number);

    public setDepthWrite(depthWrite : number);

    public setDepthFunc(depthFunc : Function);

    public setStencilTest(stencilTest : boolean);

    public setStencilWrite(stencilWrite : any);

    public setStencilFunc(stencilFunc : Function, stencilRef : any, stencilMask : number);

    public setStencilOp(stencilFail : any, stencilZFail : any, stencilZPass : any);

    public setFlipSided(flipSided : number);

    public setCullFace(cullFace : CullFace);

    public setLineWidth(width : number);

    public setPolygonOffset(polygonoffset : number, factor : number, units : number);

    public setScissorTest(scissorTest : boolean);

    public getScissorTest() : boolean;

    public activeTexture(webglSlot : any);

    public bindTexture(webglType : any, webglTexture : any);

    public compressedTexImage2D();

    public texImage2D();

    public clearColor(r : number, g : number, b : number, a : number);

    public clearDepth(depth : number);

    public clearStencil(stencil : any);

    public scissor(scissor : any);

    public viewport(viewport : any);

    public reset();

    constructor();
}

declare enum InterpolationModes {
  
}

/**
 * @param {number} left Camera frustum left plane.
 * @param {number} right Camera frustum right plane.
 * @param {number} top Camera frustum top plane.
 * @param {number} bottom Camera frustum bottom plane.
 * @param {number} near Camera frustum near plane.
 * @param {number} far Camera frustum far plane.
 * @class
 * @extends Camera
 */
declare class OrthographicCamera extends Camera {
    public constructor(left : number, right : number, top : number, bottom : number, near : number, far : number);

    public zoom : number;

    public view : any;

    /**
     * Camera frustum left plane.
     */
    public left : number;

    /**
     * Camera frustum right plane.
     */
    public right : number;

    /**
     * Camera frustum top plane.
     */
    public top : number;

    /**
     * Camera frustum bottom plane.
     */
    public bottom : number;

    /**
     * Camera frustum near plane.
     */
    public near : number;

    /**
     * Camera frustum far plane.
     */
    public far : number;

    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    public updateProjectionMatrix();

    public setViewOffset(fullWidth : number, fullHeight : number, offsetX : number, offsetY : number, width : number, height : number);

    public clearViewOffset();

    public toJSON(meta : any) : any;

    public constructor(left : number, right : number, top : number, bottom : number, near : number);

    public constructor(left : number, right : number, top : number, bottom : number);

    public toJSON() : any;

    constructor();
}

declare class SkeletonHelper extends LineSegments {
    public constructor(bone : Object3D);

    public bones : Bone[];

    public root : Object3D;

    public getBoneList(object : Object3D) : Bone[];

    public update();

    constructor();
}

interface RaycasterParameters {
    Mesh? : any;

    Line? : any;

    LOD? : any;

    Points? : any;

    Sprite? : any;
}

interface MeshNormalMaterialParameters extends MaterialParameters {
    /**
     * Render geometry as wireframe. Default is false (i.e. render as smooth shaded).
     */
    wireframe? : boolean;

    /**
     * Controls wireframe thickness. Default is 1.
     */
    wireframeLinewidth? : number;

    morphTargets? : boolean;
}

declare class EffectComposer {
    public constructor(renderer : WebGLRenderer, renderTarget : WebGLRenderTarget);

    public renderTarget1 : WebGLRenderTarget;

    public renderTarget2 : WebGLRenderTarget;

    public writeBuffer : WebGLRenderTarget;

    public readBuffer : WebGLRenderTarget;

    public passes : any[];

    public copyPass : ShaderPass;

    public swapBuffers();

    public addPass(pass : any);

    public insertPass(pass : any, index : number);

    public render(delta : number);

    public reset(renderTarget : WebGLRenderTarget);

    public setSize(width : number, height : number);

    public constructor(renderer : WebGLRenderer);

    public render();

    public reset();

    constructor();
}

declare class GridHelper extends LineSegments {
    public constructor(size : number, divisions : number, color1 : Color, color2 : Color);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {Color} color1
     * @param {Color} color2
     */
    public setColors(color1 : Color, color2 : Color);

    public constructor(size : number, divisions : number, color1 : Color);

    public constructor(size : number, divisions : number);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {Color} color1
     */
    public setColors(color1 : Color);

    /**
     * @deprecated Colors should be specified in the constructor.
     */
    public setColors();

    public constructor(size : number, divisions : number, color1 : number, color2 : Color);

    public constructor(size : number, divisions : number, color1 : number, color2 : number);

    public constructor(size : number, divisions : number, color1 : Color, color2 : number);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {number} color1
     * @param {Color} color2
     */
    public setColors(color1 : number, color2 : Color);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {Color} color1
     * @param {number} color2
     */
    public setColors(color1 : Color, color2 : number);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {number} color1
     * @param {number} color2
     */
    public setColors(color1 : number, color2 : number);

    public constructor(size : number, divisions : number, color1 : number);

    /**
     * @deprecated Colors should be specified in the constructor.
     * @param {number} color1
     */
    public setColors(color1 : number);

    constructor();
}

declare class MaskPass {
    public constructor(scene : Scene, camera : Camera);

    public scene : Scene;

    public camera : Camera;

    public enabled : boolean;

    public clear : boolean;

    public needsSwap : boolean;

    public inverse : boolean;

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number);

    constructor();
}

/**
 * This is an automatically generated object type (see the source definition).
 * @class
 * @extends Object
 */
declare class ShaderLib {
    public static $getStatic(name : string) : Shader;

    public static basic : Shader;

    public static lambert : Shader;

    public static phong : Shader;

    public static standard : Shader;

    public static points : Shader;

    public static dashed : Shader;

    public static depth : Shader;

    public static normal : Shader;

    public static cube : Shader;

    public static equirect : Shader;

    public static depthRGBA : Shader;

    public static distanceRGBA : Shader;

    public static physical : Shader;
}

declare class MeshDepthMaterial extends Material {
    public constructor(parameters : MeshDepthMaterialParameters);

    public wireframe : boolean;

    public wireframeLinewidth : number;

    public setValues(parameters : MeshDepthMaterialParameters);

    public constructor();
}

/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 * @param {Plane} p0
 * @param {Plane} p1
 * @param {Plane} p2
 * @param {Plane} p3
 * @param {Plane} p4
 * @param {Plane} p5
 * @class
 * @extends Object
 */
declare class Frustum {
    public constructor(p0 : Plane, p1 : Plane, p2 : Plane, p3 : Plane, p4 : Plane, p5 : Plane);

    /**
     * Array of 6 vectors.
     */
    public planes : Plane[];

    public set(p0 : number, p1 : number, p2 : number, p3 : number, p4 : number, p5 : number) : Frustum;

    public clone() : Frustum;

    public copy(frustum : Frustum) : Frustum;

    public setFromMatrix(m : Matrix4) : Frustum;

    public intersectsObject(object : Object3D) : boolean;

    public intersectsObject(sprite : Sprite) : boolean;

    public intersectsSphere(sphere : Sphere) : boolean;

    public intersectsBox(box : Box3) : boolean;

    public containsPoint(point : Vector3) : boolean;

    public constructor(p0 : Plane, p1 : Plane, p2 : Plane, p3 : Plane, p4 : Plane);

    public constructor(p0 : Plane, p1 : Plane, p2 : Plane, p3 : Plane);

    public constructor(p0 : Plane, p1 : Plane, p2 : Plane);

    public constructor(p0 : Plane, p1 : Plane);

    public constructor(p0 : Plane);

    public constructor();

    public set(p0 : number, p1 : number, p2 : number, p3 : number, p4 : number) : Frustum;

    public set(p0 : number, p1 : number, p2 : number, p3 : number) : Frustum;

    public set(p0 : number, p1 : number, p2 : number) : Frustum;

    public set(p0 : number, p1 : number) : Frustum;

    public set(p0 : number) : Frustum;

    public set() : Frustum;
}

interface TextGeometryParameters {
    font? : Font;

    size? : number;

    height? : number;

    curveSegments? : number;

    bevelEnabled? : boolean;

    bevelThickness? : number;

    bevelSize? : number;
}

declare enum DepthModes {
  
}

declare namespace UniformsUtils {}
declare class SphereBufferGeometry extends BufferGeometry {
    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number, thetaLength : number);

    public parameters : any;

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number, thetaStart : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number, phiLength : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number, phiStart : number);

    public constructor(radius : number, widthSegments : number, heightSegments : number);

    public constructor(radius : number, widthSegments : number);

    public constructor(radius : number);

    constructor();
}

/**
 * Base class for implementing loaders.
 * 
 * Events:
 * load
 * Dispatched when the image has completed loading
 * content — loaded image
 * 
 * error
 * 
 * Dispatched when the image can't be loaded
 * message — error message
 * @class
 * @extends Object
 */
declare class Loader {
    public constructor();

    /**
     * Will be called when load starts.
     * The default is a function with empty body.
     */
    public onLoadStart : () => void;

    /**
     * Will be called while load progresses.
     * The default is a function with empty body.
     */
    public onLoadProgress : () => void;

    /**
     * Will be called when load completes.
     * The default is a function with empty body.
     */
    public onLoadComplete : () => void;

    /**
     * default — null.
     * If set, assigns the crossOrigin attribute of the image to the value of crossOrigin, prior to starting the load.
     */
    public crossOrigin : string;

    /**
     * @deprecated Use THREE.LoaderUtils.extractUrlBase() instead.
     * @param {string} url
     * @return {string}
     */
    public extractUrlBase(url : string) : string;

    public initMaterials(materials : Material[], texturePath : string) : Material[];

    public createMaterial(m : Material, texturePath : string, crossOrigin : string) : boolean;

    public static Handlers : LoaderHandler;

    public createMaterial(m : Material, texturePath : string) : boolean;
}

declare namespace ShapeUtils {}
/**
 * @param {number} a Vertex A index.
 * @param {number} b Vertex B index.
 * @param {number} c Vertex C index.
 * @param {Vector3} normal Face normal or array of vertex normals.
 * @param {Color} color Face color or array of vertex colors.
 * @param {number} materialIndex Material index.
 * @class
 * @extends Object
 */
declare class Face3 {
    public constructor(a : number, b : number, c : number, normal : Vector3, color : Color, materialIndex : number);

    public constructor(a : number, b : number, c : number, normal : Vector3, vertexColors : Color[], materialIndex : number);

    public constructor(a : number, b : number, c : number, vertexNormals : Vector3[], color : Color, materialIndex : number);

    public constructor(a : number, b : number, c : number, vertexNormals : Vector3[], vertexColors : Color[], materialIndex : number);

    /**
     * Vertex A index.
     */
    public a : number;

    /**
     * Vertex B index.
     */
    public b : number;

    /**
     * Vertex C index.
     */
    public c : number;

    /**
     * Face normal.
     */
    public normal : Vector3;

    /**
     * Array of 4 vertex normals.
     */
    public vertexNormals : Vector3[];

    /**
     * Face color.
     */
    public color : Color;

    /**
     * Array of 4 vertex normals.
     */
    public vertexColors : Color[];

    /**
     * Material index (points to {@link Geometry.materials}).
     */
    public materialIndex : number;

    public clone() : Face3;

    public copy(source : Face3) : Face3;

    public constructor(a : number, b : number, c : number, normal : Vector3, color : Color);

    public constructor(a : number, b : number, c : number, normal : Vector3);

    public constructor(a : number, b : number, c : number);

    public constructor(a : number, b : number, c : number, normal : Vector3, vertexColors : Color[]);

    public constructor(a : number, b : number, c : number, vertexNormals : Vector3[], color : Color);

    public constructor(a : number, b : number, c : number, vertexNormals : Vector3[]);

    public constructor(a : number, b : number, c : number, vertexNormals : Vector3[], vertexColors : Color[]);

    constructor();
}

declare namespace Math {}
declare class Texture extends EventDispatcher {
    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number, encoding : TextureEncoding);

    public id : number;

    public uuid : string;

    public name : string;

    public sourceFile : string;

    public image : any;

    public mipmaps : ImageData[];

    public mapping : Mapping;

    public wrapS : Wrapping;

    public wrapT : Wrapping;

    public magFilter : TextureFilter;

    public minFilter : TextureFilter;

    public anisotropy : number;

    public format : PixelFormat;

    public type : TextureDataType;

    public offset : Vector2;

    public repeat : Vector2;

    public center : Vector2;

    public rotation : number;

    public generateMipmaps : boolean;

    public premultiplyAlpha : boolean;

    public flipY : boolean;

    public unpackAlignment : number;

    public encoding : TextureEncoding;

    public version : number;

    public needsUpdate : boolean;

    public onUpdate : () => void;

    public static DEFAULT_IMAGE : any;

    public static DEFAULT_MAPPING : any;

    public clone() : Texture;

    public copy(source : Texture) : Texture;

    public toJSON(meta : any) : any;

    public dispose();

    public transformUv(uv : Vector);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(image : HTMLImageElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(image : HTMLImageElement, mapping : Mapping);

    public constructor(image : HTMLImageElement);

    public constructor();

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number, encoding : TextureEncoding);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number, encoding : TextureEncoding);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType, anisotropy : number);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat, type : TextureDataType);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter, format : PixelFormat);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter, minFilter : TextureFilter);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping, magFilter : TextureFilter);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping, wrapT : Wrapping);

    public constructor(image : HTMLVideoElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(image : HTMLCanvasElement, mapping : Mapping, wrapS : Wrapping);

    public constructor(image : HTMLVideoElement, mapping : Mapping);

    public constructor(image : HTMLCanvasElement, mapping : Mapping);

    public constructor(image : HTMLCanvasElement);

    public constructor(image : HTMLVideoElement);
}

declare namespace CurveUtils {}
declare class MorphBlendMesh extends Mesh {
    public constructor(geometry : Geometry, material : Material);

    public animationsMap : any;

    public animationsList : MorphBlendMeshAnimation[];

    public createAnimation(name : string, start : number, end : number, fps : number);

    public autoCreateAnimations(fps : number);

    public setAnimationDirectionForward(name : string);

    public setAnimationDirectionBackward(name : string);

    public setAnimationFPS(name : string, fps : number);

    public setAnimationDuration(name : string, duration : number);

    public setAnimationWeight(name : string, weight : number);

    public setAnimationTime(name : string, time : number);

    public getAnimationTime(name : string) : number;

    public getAnimationDuration(name : string) : number;

    public playAnimation(name : string);

    public stopAnimation(name : string);

    public update(delta : number);

    constructor();
}

/**
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/InstancedInterleavedBuffer.js">src/core/InstancedInterleavedBuffer.js</a>
 * @param {*} array
 * @param {number} stride
 * @param {number} meshPerAttribute
 * @class
 * @extends InterleavedBuffer
 */
declare class InstancedInterleavedBuffer extends InterleavedBuffer {
    public constructor(array : ArrayLike<number>, stride : number, meshPerAttribute : number);

    public meshPerAttribute : number;

    public constructor(array : ArrayLike<number>, stride : number);

    public constructor(array : number[], stride : number, meshPerAttribute : number);

    public constructor(array : number[], stride : number);

    constructor();
}

declare class ArcCurve extends EllipseCurve {
    public constructor(aX : number, aY : number, aRadius : number, aStartAngle : number, aEndAngle : number, aClockwise : boolean);

    constructor();
}

declare class AnimationAction {
    public loop : boolean;

    public time : number;

    public timeScale : number;

    public weight : number;

    public repetitions : number;

    public paused : boolean;

    public enabled : boolean;

    public clampWhenFinished : boolean;

    public zeroSlopeAtStart : boolean;

    public zeroSlopeAtEnd : boolean;

    public play() : AnimationAction;

    public stop() : AnimationAction;

    public reset() : AnimationAction;

    public isRunning() : boolean;

    public startAt(time : number) : AnimationAction;

    public setLoop(mode : AnimationActionLoopStyles, repetitions : number) : AnimationAction;

    public setEffectiveWeight(weight : number) : AnimationAction;

    public getEffectiveWeight() : number;

    public fadeIn(duration : number) : AnimationAction;

    public fadeOut(duration : number) : AnimationAction;

    public crossFadeFrom(fadeOutAction : AnimationAction, duration : number, warp : boolean) : AnimationAction;

    public crossFadeTo(fadeInAction : AnimationAction, duration : number, warp : boolean) : AnimationAction;

    public stopFading() : AnimationAction;

    public setEffectiveTimeScale(timeScale : number) : AnimationAction;

    public getEffectiveTimeScale() : number;

    public setDuration(duration : number) : AnimationAction;

    public syncWith(action : AnimationAction) : AnimationAction;

    public halt(duration : number) : AnimationAction;

    public warp(statTimeScale : number, endTimeScale : number, duration : number) : AnimationAction;

    public stopWarping() : AnimationAction;

    public getMixer() : AnimationMixer;

    public getClip() : AnimationClip;

    public getRoot() : any;
}

/**
 * @deprecated Use {@link EdgesGeometry}
 * @param {Object3D} object
 * @param {number} hex
 * @param {number} thresholdAngle
 * @class
 * @extends LineSegments
 */
declare class EdgesHelper extends LineSegments {
    public constructor(object : Object3D, hex : number, thresholdAngle : number);

    public constructor(object : Object3D, hex : number);

    public constructor(object : Object3D);

    constructor();
}

declare enum Mapping {
  
}

declare class WebGLUniforms {
    public constructor(gl : any, program : WebGLProgram, renderer : WebGLRenderer);

    public renderer : WebGLRenderer;

    public setValue(gl : any, value : any, renderer : any);

    public set(gl : any, object : any, name : string);

    public setOptional(gl : any, object : any, name : string);

    public static upload(gl : any, seq : any, values : any[], renderer : any);

    public static seqWithValue(seq : any, values : any[]) : any[];

    public static splitDynamic(seq : any, values : any[]) : any[];

    public static evalDynamic(seq : any, values : any[], object : any, camera : any) : any[];

    public setValue(gl : any, value : any);

    constructor();
}

declare class Bone extends Object3D {
    public constructor(skin : SkinnedMesh);

    public skin : SkinnedMesh;

    constructor();
}

declare class CubicBezierCurve extends Curve<Vector2> {
    public constructor(v0 : Vector2, v1 : Vector2, v2 : Vector2, v3 : Vector2);

    public v0 : Vector2;

    public v1 : Vector2;

    public v2 : Vector2;

    public v3 : Vector2;

    constructor();
}

declare class Pass {
    public enabled : boolean;

    public needsSwap : boolean;

    public clear : boolean;

    public renderToScreen : boolean;

    public setSize(width : number, height : number);

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number, maskActive : boolean);

    public render(renderer : WebGLRenderer, writeBuffer : WebGLRenderTarget, readBuffer : WebGLRenderTarget, delta : number);
}

interface RenderItem {
    id : number;

    object : Object3D;

    geometry : ((Geometry)|(BufferGeometry));

    material : Material;

    program : WebGLProgram;

    renderOrder : number;

    z : number;

    group : Group;
}

declare namespace AnimationUtils {}
/**
 * @deprecated Use {@link Face3} instead.
 * @class
 * @extends Face3
 */
declare class Face4 extends Face3 {}

/**
 * Represents a color. See also {@link ColorUtils}.
 * 
 * @example
 * var color = new THREE.Color( 0xff0000 );
 * 
 * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/math/Color.js">src/math/Color.js</a>
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @class
 * @extends Object
 */
declare class Color {
    public constructor(color : Color);

    public constructor(color : string);

    public constructor(color : number);

    public constructor(r : number, g : number, b : number);

    /**
     * Red channel value between 0 and 1. Default is 1.
     */
    public r : number;

    /**
     * Green channel value between 0 and 1. Default is 1.
     */
    public g : number;

    /**
     * Blue channel value between 0 and 1. Default is 1.
     */
    public b : number;

    public set(color : Color) : Color;

    public set(color : number) : Color;

    public set(color : string) : Color;

    public setScalar(scalar : number) : Color;

    public setHex(hex : number) : Color;

    /**
     * Sets this color from RGB values.
     * @param {number} r Red channel value between 0 and 1.
     * @param {number} g Green channel value between 0 and 1.
     * @param {number} b Blue channel value between 0 and 1.
     * @return {Color}
     */
    public setRGB(r : number, g : number, b : number) : Color;

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     * 
     * @param {number} h Hue channel value between 0 and 1.
     * @param {number} s Saturation value channel between 0 and 1.
     * @param {number} l Value channel value between 0 and 1.
     * @return {Color}
     */
    public setHSL(h : number, s : number, l : number) : Color;

    /**
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     * @param {string} style
     * @return {Color}
     */
    public setStyle(style : string) : Color;

    /**
     * Clones this color.
     * @return {Color}
     */
    public clone() : Color;

    /**
     * Copies given color.
     * @param {Color} color Color to copy.
     * @return {Color}
     */
    public copy(color : Color) : Color;

    /**
     * Copies given color making conversion from gamma to linear space.
     * @param {Color} color Color to copy.
     * @param {number} gammaFactor
     * @return {Color}
     */
    public copyGammaToLinear(color : Color, gammaFactor : number) : Color;

    /**
     * Copies given color making conversion from linear to gamma space.
     * @param {Color} color Color to copy.
     * @param {number} gammaFactor
     * @return {Color}
     */
    public copyLinearToGamma(color : Color, gammaFactor : number) : Color;

    /**
     * Converts this color from gamma to linear space.
     * @return {Color}
     */
    public convertGammaToLinear() : Color;

    /**
     * Converts this color from linear to gamma space.
     * @return {Color}
     */
    public convertLinearToGamma() : Color;

    /**
     * Returns the hexadecimal value of this color.
     * @return {number}
     */
    public getHex() : number;

    /**
     * Returns the string formated hexadecimal value of this color.
     * @return {string}
     */
    public getHexString() : string;

    public getHSL() : HSL;

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     * @return {string}
     */
    public getStyle() : string;

    public offsetHSL(h : number, s : number, l : number) : Color;

    public add(color : Color) : Color;

    public addColors(color1 : Color, color2 : Color) : Color;

    public addScalar(s : number) : Color;

    public sub(color : Color) : Color;

    public multiply(color : Color) : Color;

    public multiplyScalar(s : number) : Color;

    public lerp(color : Color, alpha : number) : Color;

    public equals(color : Color) : boolean;

    public fromArray(rgb : number[], offset : number) : Color;

    public toArray(array : number[], offset : number) : number[];

    public constructor();

    /**
     * Copies given color making conversion from gamma to linear space.
     * @param {Color} color Color to copy.
     * @return {Color}
     */
    public copyGammaToLinear(color : Color) : Color;

    /**
     * Copies given color making conversion from linear to gamma space.
     * @param {Color} color Color to copy.
     * @return {Color}
     */
    public copyLinearToGamma(color : Color) : Color;

    public fromArray(rgb : number[]) : Color;

    public toArray(array : number[]) : number[];

    public toArray() : number[];
}

declare class WireframeGeometry extends BufferGeometry {
    public constructor(geometry : Geometry);

    public constructor(geometry : BufferGeometry);

    constructor();
}

/**
 * Utility class.
 * @extends Object
 * @class
 */
declare class ColorKeywords {
    constructor();

    public static aliceblue : number;

    public static antiquewhite : number;

    public static aqua : number;

    public static aquamarine : number;

    public static azure : number;

    public static beige : number;

    public static bisque : number;

    public static black : number;

    public static blanchedalmond : number;

    public static blue : number;

    public static blueviolet : number;

    public static brown : number;

    public static burlywood : number;

    public static cadetblue : number;

    public static chartreuse : number;

    public static chocolate : number;

    public static coral : number;

    public static cornflowerblue : number;

    public static cornsilk : number;

    public static crimson : number;

    public static cyan : number;

    public static darkblue : number;

    public static darkcyan : number;

    public static darkgoldenrod : number;

    public static darkgray : number;

    public static darkgreen : number;

    public static darkgrey : number;

    public static darkkhaki : number;

    public static darkmagenta : number;

    public static darkolivegreen : number;

    public static darkorange : number;

    public static darkorchid : number;

    public static darkred : number;

    public static darksalmon : number;

    public static darkseagreen : number;

    public static darkslateblue : number;

    public static darkslategray : number;

    public static darkslategrey : number;

    public static darkturquoise : number;

    public static darkviolet : number;

    public static deeppink : number;

    public static deepskyblue : number;

    public static dimgray : number;

    public static dimgrey : number;

    public static dodgerblue : number;

    public static firebrick : number;

    public static floralwhite : number;

    public static forestgreen : number;

    public static fuchsia : number;

    public static gainsboro : number;

    public static ghostwhite : number;

    public static gold : number;

    public static goldenrod : number;

    public static gray : number;

    public static green : number;

    public static greenyellow : number;

    public static grey : number;

    public static honeydew : number;

    public static hotpink : number;

    public static indianred : number;

    public static indigo : number;

    public static ivory : number;

    public static khaki : number;

    public static lavender : number;

    public static lavenderblush : number;

    public static lawngreen : number;

    public static lemonchiffon : number;

    public static lightblue : number;

    public static lightcoral : number;

    public static lightcyan : number;

    public static lightgoldenrodyellow : number;

    public static lightgray : number;

    public static lightgreen : number;

    public static lightgrey : number;

    public static lightpink : number;

    public static lightsalmon : number;

    public static lightseagreen : number;

    public static lightskyblue : number;

    public static lightslategray : number;

    public static lightslategrey : number;

    public static lightsteelblue : number;

    public static lightyellow : number;

    public static lime : number;

    public static limegreen : number;

    public static linen : number;

    public static magenta : number;

    public static maroon : number;

    public static mediumaquamarine : number;

    public static mediumblue : number;

    public static mediumorchid : number;

    public static mediumpurple : number;

    public static mediumseagreen : number;

    public static mediumslateblue : number;

    public static mediumspringgreen : number;

    public static mediumturquoise : number;

    public static mediumvioletred : number;

    public static midnightblue : number;

    public static mintcream : number;

    public static mistyrose : number;

    public static moccasin : number;

    public static navajowhite : number;

    public static navy : number;

    public static oldlace : number;

    public static olive : number;

    public static olivedrab : number;

    public static orange : number;

    public static orangered : number;

    public static orchid : number;

    public static palegoldenrod : number;

    public static palegreen : number;

    public static paleturquoise : number;

    public static palevioletred : number;

    public static papayawhip : number;

    public static peachpuff : number;

    public static peru : number;

    public static pink : number;

    public static plum : number;

    public static powderblue : number;

    public static purple : number;

    public static red : number;

    public static rosybrown : number;

    public static royalblue : number;

    public static saddlebrown : number;

    public static salmon : number;

    public static sandybrown : number;

    public static seagreen : number;

    public static seashell : number;

    public static sienna : number;

    public static silver : number;

    public static skyblue : number;

    public static slateblue : number;

    public static slategray : number;

    public static slategrey : number;

    public static snow : number;

    public static springgreen : number;

    public static steelblue : number;

    public static tan : number;

    public static teal : number;

    public static thistle : number;

    public static tomato : number;

    public static turquoise : number;

    public static violet : number;

    public static wheat : number;

    public static white : number;

    public static whitesmoke : number;

    public static yellow : number;

    public static yellowgreen : number;
}

declare enum Colors {
  
}

declare class ShadowMaterial extends ShaderMaterial {
    public constructor(parameters : ShaderMaterialParameters);

    public constructor();
}


