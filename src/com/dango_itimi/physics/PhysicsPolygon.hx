package com.dango_itimi.physics;

#if js
import createjs.easeljs.Point;
import createjs.easeljs.MovieClip;
#else
import flash.geom.Point;
import flash.display.MovieClip;
#end

class PhysicsPolygon extends PhysicsObject {

	//vertex property name is 'VERTEX_MOVIE_CLIP_HEAD_NAME + number'
	//ex) p0, p1, p2, ...
	public static var VERTEX_MOVIE_CLIP_HEAD_NAME:String = "p";

	public var vertices(default, null):Array<Point>;

	public function new(shapeInstance:MovieClip){

	    super(shapeInstance);
		vertices = [];

		var numChildren:Int =
			#if js shapeInstance.getNumChildren(); #else shapeInstance.numChildren; #end

		for(i in 0...numChildren){

			var vertex:MovieClip =
				#if js
				Reflect.field(shapeInstance, VERTEX_MOVIE_CLIP_HEAD_NAME + i);
				#else
				cast shapeInstance.getChildByName(VERTEX_MOVIE_CLIP_HEAD_NAME + i);
				#end

			if(vertex != null)
				vertices.push(new Point(vertex.x, vertex.y));
		}
	}
	override public function toString():String{

		var str = super.toString();
		str += "\n{";
		for(vertex in vertices){
		    str += '{${vertex.x}, ${vertex.y}} ';
		}
		str += "}";
		return str;
	}

	@:generic public function convertVertices<T:{function new(x:Float, y:Float):Void;}>(convertedClass:Class<T>):Array<T>{

		return [
			for(vertex in vertices) Type.createInstance(convertedClass, [vertex.x, vertex.y])
		];
	}
}


