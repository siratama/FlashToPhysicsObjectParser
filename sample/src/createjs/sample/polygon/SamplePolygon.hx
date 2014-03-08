package sample.polygon;
@:native("lib.samplepolygonSamplePolygon")
extern class SamplePolygon extends createjs.easeljs.Container{
	public var nominalBounds:createjs.easeljs.Rectangle;


	public var flipper:SamplePolygon_flipper;
}
extern class SamplePolygon_flipper extends createjs.easeljs.MovieClip{


	public var p0:createjs.easeljs.MovieClip;
	public var p1:createjs.easeljs.MovieClip;
	public var p2:createjs.easeljs.MovieClip;
	public var p3:createjs.easeljs.MovieClip;
}
