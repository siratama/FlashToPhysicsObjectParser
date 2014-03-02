package com.dango_itimi.physics;

#if js
import createjs.easeljs.Rectangle;
import createjs.easeljs.MovieClip;
#else
import flash.geom.Rectangle;
import flash.display.MovieClip;
#end

class PhysicsObject {

	public var originalX(default, null):Float;
	public var originalY(default, null):Float;
	public var width(default, null):Float;
	public var height(default, null):Float;

	public var degree(default, null):Float;
	public var radian(default, null):Float;

	public function new(shapeInstance:MovieClip){

		degree = shapeInstance.rotation;
		radian = Math.PI / 180 * degree;

		shapeInstance.rotation = 0;

		#if js
		var nominalBounds = untyped shapeInstance.nominalBounds; //HTML5Canvas document nominalBounds property
		width = nominalBounds.width * shapeInstance.scaleX;
		height = nominalBounds.height * shapeInstance.scaleY;
		#else
		var bounds = shapeInstance.getBounds(shapeInstance.parent);
		width = bounds.width;
		height = bounds.height;
		#end

		originalX = shapeInstance.x;
		originalY = shapeInstance.y;
		shapeInstance.rotation = degree;
	}
}