import {Component} from "angular2/core";
import {Pelicula} from "../model/pelicula";
import {PeliculasService} from  "../services/peliculas.service";

@Component({
	selector : "peliculas-list",
	templateUrl : "./app/view/peliculas-list.html",
	providers : [PeliculasService]
})

export class PeliculasListComponent
{
	public pelicula:Pelicula;
	public peliculaElegida:Pelicula;
	public mostrarDatos:boolean;
	//public peliculas:Array<string>;
	public peliculas;

	public datoServicio;

	constructor(private _peliculasService: PeliculasService)
	{
		this.datoServicio = this._peliculasService.getPeliculas();

		this.mostrarDatos = false;

		//this.pelicula = new Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
		this.peliculas = this._peliculasService.getPeliculas();

		this.peliculaElegida = this.peliculas[0];
		this.pelicula = this.peliculas[0];
	}

	debug(titulo = null)
	{
		if(titulo != null)
		{
			console.log(this.pelicula.titulo);
		}
		else
		{
			console.log(this.pelicula);
		}	
	}

	onShowHide(value)
	{
		this.mostrarDatos = value;
	}

	onCambiarPelicula(pelicula)
	{
		this.pelicula = pelicula;
		this.peliculaElegida = pelicula;
	}
}