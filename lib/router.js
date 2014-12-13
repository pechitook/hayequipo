Router.route('/', function () {
	this.layout('Layout');
    this.render('Home');
});

Router.route('/crear-partido', function () {
	this.layout('Layout');
  this.render('CrearPartido');
});

Router.route('/crear-partido/jugadores', function () {
	this.layout('Layout');
  this.render('AgregarJugadores');
});