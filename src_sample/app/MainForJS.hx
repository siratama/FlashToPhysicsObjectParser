package;

import js.Browser;

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
