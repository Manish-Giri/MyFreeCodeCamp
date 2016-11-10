"use strict";

function pushOperator(oper) {

	switch (oper) {}

	currentOp = oper;
	entries.push(currentOp);
	console.log("----");
	console.log("Entries = " + entries);

	//changes for new displays
	$previousDisplay.html('<i style="font-size:0.7em; color:green">' + oldResult + "</i>");
	console.log("Old Result = " + oldResult);
	//clear currentOp
	currentOp = '';
}

//# sourceMappingURL=test-compiled.js.map