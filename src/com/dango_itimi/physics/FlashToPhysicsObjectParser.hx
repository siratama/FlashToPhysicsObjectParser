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

	//first key: Class Instance
	//second key: (Class Instance).property
	public var map(default, null):Map<DisplayObject, Map<DisplayObject, PhysicsObject>>;
	public var anonymousMap(default, null):Map<DisplayObject, Array<PhysicsObject>>;

	//Anonymous instance property name
	// Flash document: "instance" + "Number"
	// HTML5 canvas document: "instance" or "instance" + "_" + "SerialNumber"
	// OpenFL native: "MovieClip" + " " + "Number"
	private static inline var ANONYMOUS_INSTANCE:String = "instance";
	private static inline var ANONYMOUS_INSTANCE_FOR_OPENFL:String = "MovieClip";

	private var registeredBoxSet:Array<DisplayObject>;
	private var registeredCircleSet:Array<DisplayObject>;
	private var registeredPolygonSet:Array<DisplayObject>;

	public function new(){

		map = new Map();
		anonymousMap = new Map();

		registeredBoxSet = [];
		registeredCircleSet = [];
		registeredPolygonSet = [];
	}

	//returned key displayObject
	@:generic public function register<T:DisplayObject>(physicsObjectType:PhysicsObjectType, displayObjectClass:Class<T>):T{

		var displayObject = Type.createInstance(displayObjectClass, []);
		getRegisteredSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	//for OpenFL
	public function registerInstance(physicsObjectType:PhysicsObjectType, displayObject:DisplayObject){

		getRegisteredSet(physicsObjectType).push(displayObject);
	}
	private function getRegisteredSet(physicsObjectType:PhysicsObjectType):Array<DisplayObject>{

		return switch(physicsObjectType){
			case PhysicsObjectType.BOX: registeredBoxSet;
			case PhysicsObjectType.CIRCLE: registeredCircleSet;
			case PhysicsObjectType.POLYGON: registeredPolygonSet;
		}
	}

	//
	public function execute(){

		createMap(PhysicsObject, registeredBoxSet);
		createMap(PhysicsObject, registeredCircleSet);
		createMap(PhysicsPolygon, registeredPolygonSet);
	}
	private function createMap(physicsObjectClass:Class<PhysicsObject>, registeredDisplayObjectSet:Array<DisplayObject>){

		for(i in 0...registeredDisplayObjectSet.length){

			var displayObject = registeredDisplayObjectSet[i];

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

			#if js
			var shapeInstance:MovieClip = cast container.getChildAt(i);
			#else
			var shapeInstance = container.getChildAt(i);
			if(!Std.is(shapeInstance, MovieClip)) continue;
			#end

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


			if(instanceName.indexOf(
				#if (js || flash) ANONYMOUS_INSTANCE #else ANONYMOUS_INSTANCE_FOR_OPENFL #end
			) != -1)
				anonymousSet.push(physicsObject);
			else
				physicsObjectMap.set(shapeInstance, physicsObject);
		}
	}

	//
	public function getPhysicsObject(keyDisplayObject:DisplayObject, keyDisplayObjectProperty:DisplayObject):PhysicsObject{
		return map[keyDisplayObject][keyDisplayObjectProperty];
	}
	public function getAnonymousPhysicsObjectSet(keyDisplayObject:DisplayObject):Array<PhysicsObject>{
		return anonymousMap[keyDisplayObject];
	}
}

