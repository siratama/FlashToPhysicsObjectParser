FlashToPhysicsObjectParser
=============================

document language [[English](README.md)] | [[Japanese]](README_jp.md)

FlashToPhysicsObjectParser is a Haxe library which parses the symbol data(x, y, width, height, rotation, vertices) of Flash Professional CC to physics engine. 

![アプリケーション概要](document/overview.png)

---
## Features

### Parse of an anonymity symbol 

The anonymity symbol which has not set the property name besides the symbol which set the property name is parsed. It can use for the static object which does not need to control and to arrange. 

### Parse of the data outputted from HTML5 Canvas Document

HTML5 Canvas outputted data(for CreateJS) of a peculiar format besides swf is parsable. In order to parse HTML5 Canvas outputted data, it is necessary to set the following libraries as a class path. 

[https://github.com/nickalie/CreateJS-Haxe](https://github.com/nickalie/CreateJS-Haxe)

---
## How to parse a rectangle symbol(Box)

How to analyze a rectangle symbol is described using FlashToPhysicsObjectParser. Please check together with a sample file. 

### Preparation

In order to use Flash CC outputted data simply in Haxe, please install two following JSFL(Flash CC Extentions). 

* [FlashToHaxeConverter](https://github.com/siratama/Flash-To-Haxe-Converter)
* [Linkage](https://github.com/siratama/Linkage)

### Authoring

Create assets.fla.

#### (a) sample/box/SampleBox is created in a library

![rectangle setting 1](document/usage1.png)

#### (b) A rectangle symbol is arranged in sample/box/SampleBox

![rectangle setting 2](document/usage2.png)

A property name is set to a rectangle symbol to control by a script. For example, the name 'floor' is set up. 

#### (c) Linkage is set as sample/box/SampleBox MovieClip

![rectangle setting 3](document/usage3.png)

Linkage is set as SampleBox MovieClip using Linkage extension.

#### (d) The structure of the MovieClip which set up linkage is outputted to a Haxe file. 

![rectangle setting 4](document/usage4.png)

The structure of a MovieClip is outputted to a Haxe file using FlashToHaxeConverter extention. 

#### (e) Publish swf

assets.swf is outputted by the publication command of Flash CC. assets.swf is specified by -swf-lib of the compiler option of Haxe. 

### Using FlashToPhysicsObjectParser

It programs by Haxe. First of all, the instance of a FlashToPhysicsObjectParser class is created. 

	var flashToPhysicsObjectParser = new FlashToPhysicsObjectParser();

Next, the MovieClip to parse is registered using a register method. Since SampleBox parses as a rectangle, PhysicsObjectType.BOX is specified as the first argument. SampleBox class is the class file outputted by FlashToHaxeConverter. Since a register method returns the class instance specified by the second argument, it has. 

	var sampleBox:SampleBox = flashToPhysicsObjectParser.register(PhysicsObjectType.BOX, SampleBox);

An execute method is performed after the completion of registration. 

	flashToPhysicsObjectParser.execute();

PhysicsObject instance from which each numerical value was extracted as rectangle data is gettable by calling getPhysicsObject method after execution. The following scripts are written in order to get the symbol of the property name 'floor' set up by Flash CC. 'floor' property is defined in the class of SampleBox outputted by FlashToHaxeConverter. 

	var physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleBox, sampleBox.floor);

The data of the position information on 'floor' symbol, width, height, etc. is parsed by PhysicsObject instance. The object of a physics engine library is created using these figures. 

	trace(physicsObject);
	//x: 52
	//y: 125
	//width: 26
	//height: 60
	//degree: -55.704...
	//radian: -0.9721...

The symbol which has not set up the property name is gettable by getAnonymousPhysicsObjectSet method. 

	var anonymousSet = flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(sampleBox);
	for(anonymousPhysicsObject in anonymousSet)
		trace(anonymousPhysicsObject);

---
## How to parse a perfect circle

Since it is the same, a rectangle and the setting method are omitted. 

---
## How to parse vertices(Polygon)

### Authoring Rule

It is necessary to make the vertex MovieClip name into the consecutive numbers which begin from 0 of a 'p'+'number'. For details, please refer to sample/polygon/SamplePolygon MovieClip in sample/fla/assets.fla file. 

![polygon rule](document/polygon.png)

Initial 'p' is defined as VERTEX_MOVIE_CLIP_HEAD_NAME in PhysicsPolygon class. 

	public static var VERTEX_MOVIE_CLIP_HEAD_NAME:String = "p";

It can change as follows. 

	PhsycsPolygon.VERTEX_MOVIE_CLIP_HEAD_NAME = "a";

It is necessary to make the initial into an English character from the property name rule of a MovieClip. 

### Conversion of vertex class

The return value of FlashToPhysicsObjectParser.getPhysicsObject method is cast and it gets as PhysicsPolygon. 

	var polygon:PhysicsPolygon =
		cast flashToPhysicsObjectParser.getPhysicsObject(samplePolygon, samplePolygon.flipper);

The PhysicsPolygon class has the arrangement vertices of a vertex Point(flash.geom.Point or createjs.easeljs.Point) class. 

	public var vertices(default, null):Array<Point>;

In order to use vertex from physics engine library Box2D or Nape, it is necessary to convert a Point class into B2Vec2(Box2D) or Vec2(Nape) class. PhysicsPolygon.convertVertices method is used in order to convert. `Array<Point>` is convertible for `Array<B2Vec2>` or `Array<Vec2>`. 

	var vertices:Array<B2Vec2> = polygon.convertVertices(B2Vec2); //Box2D
	//var vertices:Array<Vec2> = polygon.convertVertices(Vec2); //Nape

---
## The example of use of physics engine library Nape

It is an example using PhysicsObject using Nape. This example is not in a sample file. 

### Box

	var shape = new Polygon(Polygon.box(physicsObject.width, physicsObject.height));

	var body = new Body(BodyType.STATIC);
	body.position.setxy(physicsObject.x, physicsObject.y);
	body.rotate(new Vec2(physicsObject.x, physicsObject.y), physicsObject.radian);
	body.shapes.add(shape);

	space.bodies.add(body);

### Circle

	var shape = new Circle(physicsObject.width / 2);

	var body = new Body(BodyType.STATIC);
	body.position.setxy(physicsObject.x, physicsObject.y);
	body.shapes.add(shape);

	space.bodies.add(body);

### Polygon

	var polygon:PhysicsPolygon = cast physicsObject;
	var vertices = polygon.convertVertices(Vec2);

	var shape = new Polygon(vertices);

	var body = new Body(BodyType.STATIC);
	body.position.setxy(physicsObject.x, physicsObject.y);
	body.shapes.add(shape);

	space.bodies.add(body);
