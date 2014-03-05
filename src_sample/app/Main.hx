package;
import sample.polygon.SamplePolygon;
import sample.circle.SampleCircle;
import sample.box.SampleBox;
import com.dango_itimi.physics.PhysicsPolygon;
import com.dango_itimi.physics.PhysicsObject;
import com.dango_itimi.physics.PhysicsObjectType;
import com.dango_itimi.physics.FlashToPhysicsObjectParser;
class Main {

	private var flashToPhysicsObjectParser:FlashToPhysicsObjectParser;

	private var sampleBox:SampleBox;
	private var sampleCircle:SampleCircle;
	private var samplePolygon:SamplePolygon;

	public static function main(){
		new Main();
	}
	public function new(){
	}
	private function parse(){

		flashToPhysicsObjectParser = new FlashToPhysicsObjectParser();

		addBox();
		addCircle();
		addPolygon();

		flashToPhysicsObjectParser.execute();

		outputBox();
		outputCircle();
		outputPolygon();
	}

	//
	private function addBox(){

		sampleBox = flashToPhysicsObjectParser.register(PhysicsObjectType.BOX, SampleBox);
	}
	private function addCircle(){

		sampleCircle = flashToPhysicsObjectParser.register(PhysicsObjectType.CIRCLE, SampleCircle);
	}
	private function addPolygon(){

		samplePolygon = flashToPhysicsObjectParser.register(PhysicsObjectType.POLYGON, SamplePolygon);
	}

	//
	private function outputBox(){

		trace("---");

		var physicsObject:PhysicsObject;
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleBox, sampleBox.floor);
		trace(physicsObject);

		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleBox, sampleBox.slope);
		trace(physicsObject);

		var anonymousSet = flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(sampleBox);
		for(anonymousPhysicsObject in anonymousSet)
			trace(anonymousPhysicsObject);

	}
	private function outputCircle(){

		trace("---");

		var physicsObject:PhysicsObject;
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleCircle, sampleCircle.circle0);
		trace(physicsObject);

		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleCircle, sampleCircle.circle1);
		trace(physicsObject);

		var anonymousSet = flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(sampleCircle);
		for(anonymousPhysicsObject in anonymousSet)
			trace(anonymousPhysicsObject);
	}
	private function outputPolygon(){

		trace("---");

		var polygon:PhysicsPolygon;
		polygon = cast flashToPhysicsObjectParser.getPhysicsObject(samplePolygon, samplePolygon.polygon0);
		trace(polygon);

		polygon = cast flashToPhysicsObjectParser.getPhysicsObject(samplePolygon, samplePolygon.polygon1);
		trace(polygon);

		var anonymousSet = flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(samplePolygon);
		for(anonymousPhysicsObject in anonymousSet)
			trace(anonymousPhysicsObject);
	}
}
