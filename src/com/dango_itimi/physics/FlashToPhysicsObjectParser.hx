package com.dango_itimi.physics;

#if js
import createjs.easeljs.MovieClip;
import createjs.easeljs.DisplayObject;
#else
import flash.display.MovieClip;
import flash.display.DisplayObject;
#end

class FlashToPhysicsObjectParser {

	public var boxSet:Array<DisplayObject>;
	public var circleSet:Array<DisplayObject>;
	public var polygonSet:Array<DisplayObject>;

	//first key: Class
	//second key: Class.property
	public var boxMap(default, null):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>;
	public var circleMap(default, null):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>;
	public var polygonMap(default, null):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>;

	public function new() {

		boxSet = [];
		circleSet = [];
		polygonSet = [];

		boxMap = new Map();
		circleMap = new Map();
		polygonMap = new Map();
	}
	public function addDisplayObject(physicsObjectType:PhysicsObjectType, displayObject:DisplayObject){

	    getSet(physicsObjectType).push(displayObject);
	}
	private function getSet(physicsObjectType:PhysicsObjectType):Array<DisplayObject>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: boxSet;
			case PhysicsObjectType.CIRCLE: circleSet;
			case PhysicsObjectType.POLYGON: polygonSet;
		}
	}
	public function execute() {

		createMap(PhysicsObject, boxSet, boxMap);
		createMap(PhysicsObject, circleSet, circleMap);
		createMap(Polygon, polygonSet, polygonMap);
	}
	private function createMap(physicsObjectClass:Class<PhysicsObject>, displayObjectSet:Array<DisplayObject>, map:Map<DisplayObject, Map<DisplayObject, PhysicsObject>>){

		for (i in 0...displayObjectSet.length){

			var displayObject = displayObjectSet[i];
			var physicsObjectMap:Map<DisplayObject, PhysicsObject> = new Map();
			map.set(displayObject, physicsObjectMap);

			parse(physicsObjectClass, displayObject, physicsObjectMap);
		}
	}
	private function parse(physicsObjectClass:Class<PhysicsObject>, displayObject:DisplayObject, physicsObjectMap:Map<DisplayObject, PhysicsObject>) {

		var movieClip:MovieClip = cast displayObject;
		var numChildren:Int =
			#if js movieClip.getNumChildren(); #else movieClip.numChildren; #end

		for (i in 0...numChildren) {
			var shapeInstance:MovieClip = cast movieClip.getChildAt(i);
			var physicsObject:PhysicsObject = Type.createInstance(physicsObjectClass, [shapeInstance]);
			physicsObjectMap.set(shapeInstance, physicsObject);
		}
	}

	//
	public function getPhysicsObject(physicsObjectType:PhysicsObjectType, displayObject:DisplayObject, displayObjectProperty:DisplayObject):PhysicsObject {

		var map = getMap(physicsObjectType);
		return map[displayObject][displayObjectProperty];
	}
	private function getMap(physicsObjectType:PhysicsObjectType):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: boxMap;
			case PhysicsObjectType.CIRCLE: circleMap;
			case PhysicsObjectType.POLYGON: polygonMap;
		}
	}
}

