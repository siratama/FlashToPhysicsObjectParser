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

	public var anonymousBoxSet(default, null):Array<PhysicsObject>;
	public var anonymousCircleSet(default, null):Array<PhysicsObject>;
	public var anonymousPolygonSet(default, null):Array<PhysicsObject>;

	//Anonymous instance property name
	// Flash document: "instance" + "Number"
	// HTML5 canvas document: "instance" or "instance" + "_" + "SerialNumber"
	private static inline var ANONYMOUS_INSTANCE:String = "instance";

	public function new() {

		boxSet = [];
		circleSet = [];
		polygonSet = [];

		boxMap = new Map();
		circleMap = new Map();
		polygonMap = new Map();

		anonymousBoxSet = [];
		anonymousCircleSet = [];
		anonymousPolygonSet = [];
	}
	public function addDisplayObject(physicsObjectType:PhysicsObjectType, displayObjectClass:Class<DisplayObject>):DisplayObject{

		var displayObject = Type.createInstance(displayObjectClass, []);
	    getSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	private function getSet(physicsObjectType:PhysicsObjectType):Array<DisplayObject>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: boxSet;
			case PhysicsObjectType.CIRCLE: circleSet;
			case PhysicsObjectType.POLYGON: polygonSet;
		}
	}
	public function execute() {

		createMap(PhysicsObject, boxSet, boxMap, anonymousBoxSet);
		createMap(PhysicsObject, circleSet, circleMap, anonymousCircleSet);
		createMap(Polygon, polygonSet, polygonMap, anonymousPolygonSet);
	}
	private function createMap(
		physicsObjectClass:Class<PhysicsObject>, displayObjectSet:Array<DisplayObject>,
		map:Map<DisplayObject, Map<DisplayObject, PhysicsObject>>, anonymousSet:Array<PhysicsObject>
	){

		for (i in 0...displayObjectSet.length){

			var displayObject = displayObjectSet[i];
			var physicsObjectMap:Map<DisplayObject, PhysicsObject> = new Map();
			map.set(displayObject, physicsObjectMap);

			parse(physicsObjectClass, displayObject, physicsObjectMap, anonymousSet);
		}
	}
	private function parse(
		physicsObjectClass:Class<PhysicsObject>, displayObject:DisplayObject,
		physicsObjectMap:Map<DisplayObject, PhysicsObject>, anonymousSet:Array<PhysicsObject>
	) {

		var movieClip:MovieClip = cast displayObject;
		var numChildren:Int =
			#if js movieClip.getNumChildren(); #else movieClip.numChildren; #end

		for (i in 0...numChildren) {

			var shapeInstance:MovieClip = cast movieClip.getChildAt(i);
			var instanceName:String = null;

			#if js
			for(prop in Reflect.fields(movieClip)){
				if(Reflect.field(movieClip, prop) == shapeInstance){
					instanceName = prop;
					break;
				}
			}
			#else
			instanceName = shapeInstance.name;
		    #end

			var physicsObject:PhysicsObject = Type.createInstance(physicsObjectClass, [shapeInstance]);

			if(instanceName.indexOf(ANONYMOUS_INSTANCE) != -1)
			    anonymousSet.push(physicsObject);
			else
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

