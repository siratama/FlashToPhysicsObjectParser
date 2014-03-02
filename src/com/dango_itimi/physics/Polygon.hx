package com.dango_itimi.physics;

#if js
import createjs.easeljs.Point;
import createjs.easeljs.MovieClip;
#else
import flash.geom.Point;
import flash.display.MovieClip;
#end

class Polygon extends PhysicsObject {

	//vertex property name is 'VERTEX_MOVIE_CLIP_HEAD_NAME + number'
	//ex) p0, p1, p2, ...
	public static inline var VERTEX_MOVIE_CLIP_HEAD_NAME:String = "p";

	public var vertices(default, null):Array<Point>;

	public function new(shapeInstance:MovieClip){

	    super(shapeInstance);

		vertices = [];

		var numChildren:Int =
			#if js shapeInstance.getNumChildren(); #else shapeInstance.numChildren; #end

		for(i in 0...numChildren){

			var vertex:MovieClip = cast shapeInstance.getChildByName(VERTEX_MOVIE_CLIP_HEAD_NAME + i);
			if(vertex != null)
				vertices.push(new Point(vertex.x, vertex.y));
		}

		if(numChildren != vertices.length){
			throw this + "vertex property number error";
		}
	}
}