import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
	selector : "mi-app",
	templateUrl : "./app/view/peliculas.html",
	styleUrls : ["../assets/css/styles.css"]
})

export class AppComponent{
	public titulo = "Películas con Angular 2";
	public pelicula:Pelicula;
	public mostrarDatos:boolean;

	constructor()
	{
		this.mostrarDatos = false;
		this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
		this.debug();
	}

	debug()
	{
		console.log(this.pelicula);
	}

	onShowHide()
	{
		this.mostrarDatos = true;
	}
}