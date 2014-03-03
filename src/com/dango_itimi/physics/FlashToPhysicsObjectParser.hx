package com.dango_itimi.physics;

#if js
import createjs.easeljs.MovieClip;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
#else
import flash.display.MovieClip;
import flash.display.DisplayObjectContainer;
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

	public var anonymousBoxMap(default, null):Map<DisplayObject, Array<PhysicsObject>>;
	public var anonymousCircleMap(default, null):Map<DisplayObject, Array<PhysicsObject>>;
	public var anonymousPolygonMap(default, null):Map<DisplayObject, Array<PhysicsObject>>;

	//Anonymous instance property name
	// Flash document: "instance" + "Number"
	// HTML5 canvas document: "instance" or "instance" + "_" + "SerialNumber"
	private static inline var ANONYMOUS_INSTANCE:String = "instance";

	public function new(){

		boxSet = [];
		circleSet = [];
		polygonSet = [];

		boxMap = new Map();
		circleMap = new Map();
		polygonMap = new Map();

		anonymousBoxMap = new Map();
		anonymousCircleMap = new Map();
		anonymousPolygonMap = new Map();
	}

	//returned key displayObject
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

	//
	public function execute(){

		createMap(PhysicsObject, boxSet, boxMap, anonymousBoxMap);
		createMap(PhysicsObject, circleSet, circleMap, anonymousCircleMap);
		createMap(Polygon, polygonSet, polygonMap, anonymousPolygonMap);
	}
	private function createMap(
		physicsObjectClass:Class<PhysicsObject>, displayObjectSet:Array<DisplayObject>,
		map:Map<DisplayObject, Map<DisplayObject, PhysicsObject>>,
		anonymousMap:Map<DisplayObject, Array<PhysicsObject>>
	){
		for(i in 0...displayObjectSet.length){

			var displayObject = displayObjectSet[i];

			var physicsObjectMap:Map<DisplayObject, PhysicsObject> = new Map();
			map.set(displayObject, physicsObjectMap);

			var anonymousPhysicsObjectSet:Array<PhysicsObject> = [];
			anonymousMap.set(displayObject, anonymousPhysicsObjectSet);

			parse(physicsObjectClass, displayObject, physicsObjectMap, anonymousPhysicsObjectSet);
		}
	}
	private function parse(
		physicsObjectClass:Class<PhysicsObject>, displayObject:DisplayObject,
		physicsObjectMap:Map<DisplayObject, PhysicsObject>, anonymousSet:Array<PhysicsObject>
	){
		var container =
			cast(displayObject, #if js Container #else DisplayObjectContainer #end);

		var numChildren:Int =
			#if js container.getNumChildren(); #else container.numChildren; #end

		for(i in 0...numChildren){

			var shapeInstance:MovieClip = cast container.getChildAt(i);
			var instanceName:String = null;

			#if js
			for(prop in Reflect.fields(container)){
				if(Reflect.field(container, prop) == shapeInstance){
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
	public function getPhysicsObject(physicsObjectType:PhysicsObjectType, keyDisplayObject:DisplayObject, keyDisplayObjectProperty:DisplayObject):PhysicsObject{

		var map = getMap(physicsObjectType);
		return map[keyDisplayObject][keyDisplayObjectProperty];
	}
	private function getMap(physicsObjectType:PhysicsObjectType):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: boxMap;
			case PhysicsObjectType.CIRCLE: circleMap;
			case PhysicsObjectType.POLYGON: polygonMap;
		}
	}

	//
	public function getAnonymousPhysicsObjectSet(physicsObjectType:PhysicsObjectType, keyDisplayObject:DisplayObject):Array<PhysicsObject>{

		var map = getAnonymousMap(physicsObjectType);
		return map[keyDisplayObject];
	}
	private function getAnonymousMap(physicsObjectType:PhysicsObjectType):Map<DisplayObject, Array<PhysicsObject>>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: anonymousBoxMap;
			case PhysicsObjectType.CIRCLE: anonymousCircleMap;
			case PhysicsObjectType.POLYGON: anonymousPolygonMap;
		}
	}
}

