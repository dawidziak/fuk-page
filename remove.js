var _body = document.getElementsByTagName('body')[0],
	_elements = _body.getElementsByTagName('*'),
	random = null,
	max = _elements.length;

function fuck() {
	max = _elements.length;
	if (max < 1) return;
	random = Math.floor(Math.random() * max) % max;
	random = Math.floor(Math.random() * max * random) % max;
	_elements[random].remove();
	setTimeout(fuck, 1000);
}
setTimeout(fuck, 1500);