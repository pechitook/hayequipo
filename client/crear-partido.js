Template.CrearPartido.rendered = function(){
	$('input[datetime]').datetimepicker();
};

Template.CrearPartido.events({
	'click [data-action=submit]': function(){
		Router.go('/crear-partido/jugadores');
	}
});