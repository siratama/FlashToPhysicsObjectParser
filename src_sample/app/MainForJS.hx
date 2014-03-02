package;

import js.Browser;
import sample.box.SampleBox;

import com.dango_itimi.physics.PhysicsObject;
import com.dango_itimi.physics.PhysicsObjectType;
import com.dango_itimi.physics.FlashToPhysicsObjectParser;

class MainForJS extends Main{

	public static function main(){
		new MainForJS();
	}
	public function new(){
		Browser.window.onload = initialize;
		super();
	}
	private function initialize(event){
		parse();
	}
}
