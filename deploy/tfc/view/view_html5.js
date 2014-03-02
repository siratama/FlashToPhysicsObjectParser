(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.view_html5 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


// symbols:
(lib.box = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AgIAJIAAgRIARAAIAAARg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.sampleboxSampleBox = function() {
	this.initialize();

	// レイヤー 1
	this.wall = new lib.box();
	this.wall.setTransform(312,84,11.6,58.959);

	this.instance = new lib.box();
	this.instance.setTransform(280,175,58,22,-24.2);

	this.instance_1 = new lib.box();
	this.instance_1.setTransform(93,175,58,22,25);

	this.floor = new lib.box();
	this.floor.setTransform(86,52,58,22);

	this.addChild(this.floor,this.instance_1,this.instance,this.wall);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28,25.1,314,194.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;