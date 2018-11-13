angular.
	module('ex2').
	component('ex2', {
		templateUrl: 'ex2/ex2.template.html',
		controller: function ex2Controller(){
			this.infoPerso = 
			{
				id : "7845", 
				nom :"Durand", 
				prenom :"Jean-Pierre", 
				dateNaissance :"17/08/1967"
			};
						
		}
});